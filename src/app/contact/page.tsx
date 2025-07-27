"use client";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion"; // ✅ import motion

const data = [
  {
    title: "Email",
    desc: "We respond to all emails within 24 hours.",
    info: "sumitbhatt9958@gmail.com",
  },
  {
    title: "LinkedIn",
    desc: "Connect with me via LinkedIn",
    info: "",
  },
  {
    title: "Phone",
    desc: "We're available Mon-Fri, 9am-5pm.",
    info: "9958969267",
  },
  {
    title: "Live Chat",
    desc: "Get instant help from our support team.",
    info: "Start Chat",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <h1 className="text-5xl font-medium">Contact Us</h1>
        <p className="text-xl text-gray-400">Contact the support team at LegalDoc.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="flex flex-col bg-[#27272A] p-6 rounded-xl justify-center space-y-3 font-sans shadow-lg hover:scale-[1.02] transition-transform"
          >
            <h1 className="text-xl font-medium">{item.title}</h1>
            <p className="text-gray-400">{item.desc}</p>
            <span>{item.info}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
