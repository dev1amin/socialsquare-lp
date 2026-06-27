import { useEffect, useState } from "react";

const BlueCursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const syncEnabled = () => setEnabled(media.matches);
    syncEnabled();
    media.addEventListener("change", syncEnabled);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    if (media.matches) {
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      media.removeEventListener("change", syncEnabled);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, hsl(223 82% 55% / 0.06), transparent 62%)`,
      }}
    />
  );
};

export default BlueCursorGlow;
