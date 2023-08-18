"use client";
import { motion } from "framer-motion";

export default function PostLink({ title }) {
  return (
    <motion.p transition={{ type: "spring", stiffness: 400, damping: 40 }}>
      {title}
    </motion.p>
  );
}