"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString();
      setTime(formatted.toUpperCase());

      const date_formatted = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      setDate(date_formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fixQuote = () => {
      fetch("/quotes.json")
        .then((res) => res.json())
        .then((data) => {
          const random = data[Math.floor(Math.random() * data.length)];
          setQuote(`"${random.text}" — ${random.author}`);
        })
        .catch((err) => {
          console.error("Failed to fetch local quotes:", err);
          setQuote("Could not load quote.");
        });
    };

    fixQuote();

    const interval = setInterval(fixQuote, 100000);

    return () => clearInterval(interval);
  }, []);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <motion.div
      key={theme}
      initial={{ backgroundColor: theme === "dark" ? "#fff" : "#000" }}
      animate={{ backgroundColor: theme === "dark" ? "#000" : "#fff" }}
      exit={{ backgroundColor: theme === "dark" ? "#fff" : "#000" }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-screen dark:bg-black dark:text-white"
      style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-4 py-2"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>

      <button className="absolute top-4 left-4 px-4 py-2">
        <Link href={"/docs"}>Documentation</Link>
      </button>

      <motion.h1
        className="lg:text-9xl md:text-8xl font-bold max-w-[80%] text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {time}
      </motion.h1>
      <motion.h1
        className="text-2xl mb-12 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {date}
      </motion.h1>
      <motion.h1
        className="text-xl max-w-[80%] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <i>{quote}</i>
      </motion.h1>

      <motion.h1
        className="text-xl max-w-[80%] bottom-4 absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {timezone}
      </motion.h1>
    </motion.div>
  );
}
