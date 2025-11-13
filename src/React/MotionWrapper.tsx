import React from "react";
import { motion } from "framer-motion";
import type { MotionProps, Variants } from "framer-motion";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
}

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function MotionWrapper({
  children,
  delay = 0,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={defaultAnimations}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
