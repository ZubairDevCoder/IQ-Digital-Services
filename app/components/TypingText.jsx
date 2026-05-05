"use client";

import { useEffect, useState } from "react";

export default function TypingText({ words }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!words || !words.length) return;

    if (forward) {
      if (subIndex < words[index].length) {
        const timeout = setTimeout(() => {
          setSubIndex((p) => p + 1);
          setText(words[index].substring(0, subIndex + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setForward(false);
      }
    } else {
      if (subIndex > 0) {
        const timeout = setTimeout(() => {
          setSubIndex((p) => p - 1);
          setText(words[index].substring(0, subIndex - 1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setForward(true);
        setIndex((p) => (p + 1) % words.length);
      }
    }
  }, [subIndex, index, forward, words]);

  return (
    <span className="text-yellow-500 font-semibold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
