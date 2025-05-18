"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Send, X, ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

export default function AlveonChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hiii, I'm Alvie 🐝 ✨ How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (!isMinimized) {
      inputRef.current?.focus();
    }
  }, [isMinimized]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      setIsTyping(false);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Thanks for your interest! Our AI services include chatbots (like me, YAY), AI automation, and AI consulting. Would you like to learn more about a specific service?",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    }, 3000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating button (visible when chat is minimized) */}
      <AnimatePresence>
        {isMinimized && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#34B6E0] to-[#4bb8d4] flex items-center justify-center shadow-lg overflow-hidden"
            onClick={() => setIsMinimized(false)}
            aria-label="Open chat"
          >
            <Image
              src="/alvie.png"
              alt="Alvie"
              width={64}
              height={64}
              className="object-contain"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat container */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-sm mb-4"
          >
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl backdrop-blur-md bg-[#19234b]/80">
              {/* Header */}
              <div className="px-6 py-4 flex items-center border-b border-white/10 bg-gradient-to-b from-[#232357]/10 to-[#25235a]/20">
                <div className="relative mr-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34B6E0]/80 to-[#4bb8d4] flex items-center justify-center text-white font-bold text-lg border border-white/20 shadow-lg overflow-hidden">
                    <Image
                      src="/alvie.png"
                      alt="Alvie"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#19234b] animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-white font-semibold">Alvie</h2>
                  <p className="text-xs text-[#B5C9D9]">Online</p>
                </div>
                <div className="ml-auto flex space-x-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-[#B5C9D9] hover:text-white transition-colors duration-200"
                    aria-label="Minimize chat"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-[#B5C9D9] hover:text-white transition-colors duration-200"
                    aria-label="Close chat"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Chat messages area */}
              <div className="bg-[#0B111E]/90 h-96 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[#34B6E0]/20 scrollbar-track-transparent">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className={cn(
                      "flex items-start mb-4 group",
                      message.isUser && "justify-end"
                    )}
                  >
                    <div
                      className={cn(
                        "p-4 max-w-[80%] transform transition-all duration-200 group-hover:translate-y-[-2px] group-hover:shadow-lg rounded-xl",
                        message.isUser
                          ? "bg-gradient-to-br from-[#34B6E0] to-[#4bb8d4] text-white rounded-tr-none"
                          : "bg-[#111827]/80 border border-white/10 text-[#B5C9D9] rounded-tl-none"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-start mb-4"
                  >
                    <div className="bg-[#111827]/80 border border-white/10 p-4 rounded-xl rounded-tl-none">
                      <div className="flex space-x-1">
                        <span className="inline-block w-2 h-2 bg-[#B5C9D9] rounded-full animate-[bounce_1.4s_infinite_0s]"></span>
                        <span className="inline-block w-2 h-2 bg-[#B5C9D9] rounded-full animate-[bounce_1.4s_infinite_0.2s]"></span>
                        <span className="inline-block w-2 h-2 bg-[#B5C9D9] rounded-full animate-[bounce_1.4s_infinite_0.4s]"></span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="px-6 py-4 bg-[#111827]/90 border-t border-white/10">
                <div className="flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ask Alvie..."
                    className="flex-1 bg-[#0B111E] border border-white/10 rounded-full px-5 py-3 text-sm text-[#B5C9D9] placeholder-[#B5C9D9]/50 focus:outline-none focus:ring-2 focus:ring-[#34B6E0]/50 transition-all"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#34B6E0] to-[#4bb8d4] flex items-center justify-center shadow-lg hover:shadow-[#34B6E0]/20 transition-all"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    aria-label="Send message"
                  >
                    <Send className="h-5 w-5 text-white" />
                  </motion.button>
                </div>
                <div className="text-xs text-[#B5C9D9] mt-3 flex justify-between items-center">
                  <span>Powered by Alveon AI</span>
                  <button className="text-[#B5C9D9] hover:text-white transition-colors duration-200 flex items-center">
                    <ChevronDown className="h-4 w-4 inline mr-1" />
                    Options
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
