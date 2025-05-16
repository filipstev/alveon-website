"use client";

import React from "react";
import { motion } from "motion/react";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  icon,
  iconPosition = "right",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-in-out";

  const variantStyles = {
    primary:
      "bg-secondary-foreground hover:bg-secondary text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white hover:bg-gray-100 text-gray-900 border border-gray-200",
    outline:
      "bg-transparent hover:bg-secondary/20 text-secondary border border-secondary",
    text: "bg-transparent hover:bg-secondary/20 text-secondary",
  };

  const sizeStyles = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-2.5 px-5",
    lg: "text-lg py-3 px-6",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;
