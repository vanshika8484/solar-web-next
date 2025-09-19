"use client";
import { useEffect, useState } from "react";
import MessageBubble2 from "./MessageBubble2";
import Image from "next/image";
const conversationData = [
  {
    sender: "chacha",
    text: "Local jugaad se bijli nahi milti, sirf tension milta hai! Divy Solar se paaiye guarantee wali roshni aur chain ka jeevan!",
  },
  {
    sender: "roshni",
    text: "Haan Chacha! Ab toh EMI pe solar lagwayenge aur bijli ke bill se chutkaara paayenge!",
  },
];

const ChatUI4 = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < conversationData.length) {
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, conversationData[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 1800);
      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Solar Chat</h1>
      <div className="w-full max-w-3xl wp rounded-2xl p-6 space-y-4 ">
        {messages.map((msg, i) => (
          <MessageBubble2
            key={i}
            sender={msg.sender}
            text={msg.text}
            avatar={
              msg.sender === "chacha"
                ? "/Images/chacha.webp"
                : "/Images/didi.webp"
            }
          />
        ))}
        {isTyping && currentIndex < conversationData.length && (
          <MessageBubble2
            sender={conversationData[currentIndex].sender}
            typing={true}
            avatar={
              conversationData[currentIndex].sender === "chacha"
                ? "/Images/chacha.webp"
                : "/Images/didi.webp"
            }
          />
        )}
      </div>
    </div>
  );
};

export default ChatUI4;
