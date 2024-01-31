"use client";

import React, { useEffect, useState } from "react";

// icon
import { PiArrowFatUpFill } from "react-icons/pi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 group">
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } hidden lg:inline-flex bg-secondary p-3 rounded-full shadow-2xl group-hover:-translate-y-2 transition-all duration-300 group-hover:scale-110 outline-none focus:outline-none focus:ring-secondary`}
      >
        <PiArrowFatUpFill className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default ScrollToTop;
