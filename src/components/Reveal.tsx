"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ delay?: number; className?: string }>;

export default function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
