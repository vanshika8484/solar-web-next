import { motion } from "@/app/utils/motion";
import Image from "next/image";

const MessageBubble2 = ({ sender, text, typing, avatar }) => {
  const isChacha = sender === "chacha";
  const isRight = sender === "roshni";

  return (
    <motion.div
      className={`flex w-full mb-4 ${
        isRight ? "justify-end" : "justify-start"
      }`}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      layout
    >
      {!isRight && avatar && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-10 h-10 mr-2 rounded-full overflow-hidden shadow-md"
        >
          <Image
            src={sender === "chacha" ? "/Images/chacha.webp" : "/Images/didi.webp"}
            alt="avatar"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      <div className="relative max-w-[75%]">
        <motion.div
          className={`px-4 py-3 rounded-2xl text-sm sm:text-base shadow-md whitespace-pre-line
            ${
              isRight
                ? "bg-white text-black rounded-br-none"
                : "bg-red-600 text-white rounded-bl-none"
            }
          `}
          layout
        >
          {typing ? (
            <div className="flex flex-col">
              <p
                className={`mb-1 text-xs italic ${
                  isRight ? "text-black" : "text-white"
                }`}
              >
                {isRight
                  ? "Roshni Didi is typing..."
                  : "Solar Chacha is typing..."}
              </p>
              <div className="flex space-x-1 items-center h-5">
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                />
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                />
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {text}
            </motion.div>
          )}
        </motion.div>

        {/* Tail */}
        <div
          className={`absolute w-3 h-3 bg-inherit 
            ${
              isRight
                ? "bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-45"
                : "bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-45"
            }
          `}
        />
      </div>

      {isRight && avatar && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-10 h-10 ml-2 rounded-full overflow-hidden shadow-md"
        >
          <Image
            src={avatar}
            alt="avatar"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MessageBubble2;
