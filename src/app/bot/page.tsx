"use client";
import { Button } from "@/components/ui/button"; // Assuming this is a shadcn/ui Button or similar
import FileDropBox from "@/components/ui/dropbox"; // Assuming this is your custom FileDropBox component
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations

export default function Bot() {
  const [length, setLength] = useState<Number>(400);

  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col items-center text-center max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Title Section */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            Generate Reports of Any Legal Document in Minutes.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Transform complex legal jargon into clear, actionable insights with AI.
          </p>
        </motion.div>

        {/* Report Length Selection and File Upload */}
        <motion.div
          className="flex flex-col space-y-8 items-center w-full"
          variants={itemVariants}
        >
          <p className="text-xl sm:text-2xl text-gray-300 font-semibold">
            Choose the desired report length:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Length Buttons */}
            {[400, 600, 1000].map((len) => (
              <motion.div
                key={len}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={`
                    px-8 py-4 rounded-xm text-lg font-bold shadow-lg transition-all duration-300
                    ${length === len
                      ? "border border-white bg-black text-white"
                      : "bg-white text-black"
                    }
                  `}
                  onClick={() => setLength(len)}
                >
                  {len} words
                </Button>
              </motion.div>
            ))}
          </div>

          {/* File Drop Box */}
          <motion.div
            className="w-full max-w-2xl mt-12"
            variants={itemVariants}
          >
            <FileDropBox length={length} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
