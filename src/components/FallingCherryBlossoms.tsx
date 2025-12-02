import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Blossom {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export function FallingCherryBlossoms() {
  const [blossoms, setBlossoms] = useState<Blossom[]>([]);

  useEffect(() => {
    // Generate random cherry blossoms
    const newBlossoms: Blossom[] = [];
    for (let i = 0; i < 15; i++) {
      newBlossoms.push({
        id: i,
        x: Math.random() * 100, // Random horizontal position (0-100%)
        delay: Math.random() * 10, // Random delay (0-10s)
        duration: 15 + Math.random() * 10, // Duration between 15-25s
        size: 20 + Math.random() * 15, // Size between 20-35px
      });
    }
    setBlossoms(newBlossoms);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {blossoms.map((blossom) => (
        <motion.div
          key={blossom.id}
          className="absolute"
          style={{
            left: `${blossom.x}%`,
            top: "-50px",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(blossom.id) * 100, Math.sin(blossom.id * 2) * -50, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: blossom.duration,
            delay: blossom.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Cherry Blossom SVG Outline */}
          <svg
            width={blossom.size}
            height={blossom.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 5 petals rotated around center */}
            <g transform="rotate(0 12 12)">
              <path
                d="M12 4C12 4 10.5 4 9.5 5.5C9 6.2 9 7 9.5 7.8C10 8.5 11 9 12 9C13 9 14 8.5 14.5 7.8C15 7 15 6.2 14.5 5.5C13.5 4 12 4 12 4Z"
                stroke="#ffb7c5"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
            </g>
            <g transform="rotate(72 12 12)">
              <path
                d="M12 4C12 4 10.5 4 9.5 5.5C9 6.2 9 7 9.5 7.8C10 8.5 11 9 12 9C13 9 14 8.5 14.5 7.8C15 7 15 6.2 14.5 5.5C13.5 4 12 4 12 4Z"
                stroke="#ffb7c5"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
            </g>
            <g transform="rotate(144 12 12)">
              <path
                d="M12 4C12 4 10.5 4 9.5 5.5C9 6.2 9 7 9.5 7.8C10 8.5 11 9 12 9C13 9 14 8.5 14.5 7.8C15 7 15 6.2 14.5 5.5C13.5 4 12 4 12 4Z"
                stroke="#ffb7c5"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
            </g>
            <g transform="rotate(216 12 12)">
              <path
                d="M12 4C12 4 10.5 4 9.5 5.5C9 6.2 9 7 9.5 7.8C10 8.5 11 9 12 9C13 9 14 8.5 14.5 7.8C15 7 15 6.2 14.5 5.5C13.5 4 12 4 12 4Z"
                stroke="#ffb7c5"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
            </g>
            <g transform="rotate(288 12 12)">
              <path
                d="M12 4C12 4 10.5 4 9.5 5.5C9 6.2 9 7 9.5 7.8C10 8.5 11 9 12 9C13 9 14 8.5 14.5 7.8C15 7 15 6.2 14.5 5.5C13.5 4 12 4 12 4Z"
                stroke="#ffb7c5"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
            </g>
            {/* Center circle outline */}
            <circle
              cx="12"
              cy="12"
              r="2"
              stroke="#ffd4e0"
              strokeWidth="0.6"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
