import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlueCursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      animate={{
        background: visible
          ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, hsl(185 85% 50% / 0.04), transparent 60%)`
          : "transparent",
      }}
      transition={{ type: "tween", duration: 0.15 }}
    />
  );
};

export default BlueCursorGlow;
