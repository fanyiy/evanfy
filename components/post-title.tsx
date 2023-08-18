"use client";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

export default function PostTitle({ title }) {
  return (
    <motion.div transition={{ type: "spring", stiffness: 400, damping: 40 }}>
      <Balancer>{title}</Balancer>
    </motion.div>
  );
}
