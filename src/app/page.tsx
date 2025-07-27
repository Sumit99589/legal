"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Features from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import AIModelsUsed from "@/components/ui/model_used";
import Steps from "@/components/ui/steps";
import TypewriterText from "@/components/ui/TypewriterText";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col justify-center items-center space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          LegalDoc AI
        </motion.h1>

        <motion.div
          className="text-2xl text-gray-200 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <TypewriterText
            text="   AI-powered tool that translates and simplifies legal contracts and documents with speed, accuracy, and clarity."
            speed={40}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/bot">
            <Button variant="outline" className="text-black p-6 text-xl cursor-pointer mt-8">
              Try for free
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Features />
      </motion.div>

      {/* Models Used Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AIModelsUsed />
      </motion.div>

      {/* Steps Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Steps />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
