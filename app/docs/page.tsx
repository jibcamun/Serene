"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import Link from "next/link";

export default function Documentation() {
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

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 7,
          originX: 0,
          backgroundColor: theme === "light" ? "black" : "white",
        }}
      />
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen"
        initial={{ backgroundColor: theme === "dark" ? "#fff" : "#000" }}
        animate={{ backgroundColor: theme === "dark" ? "#000" : "#fff" }}
        exit={{ backgroundColor: theme === "dark" ? "#fff" : "#000" }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 px-4 py-2"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <button className="absolute top-4 left-4 px-4 py-2">
          <Link href={"/"}>Return to Home</Link>
        </button>
        <motion.h1
          className="lg:text-9xl md:text-8xl font-bold max-w-[80%] text-5xl mb-12 m-4 mt-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Serene
        </motion.h1>
        <motion.h1
          className="lg:text-4xl md:text-3xl max-w-[80%] text-2xl m-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Serene is a modern, minimal web app that displays the current time,
          date, and an inspirational quote. It features a responsive design with
          a light/dark theme toggle and fresh motivational quotes. Serene
          provides a clean and user-friendly dashboard experience for everyone.
        </motion.h1>

        <hr />

        <motion.h1
          className="lg:text-5xl md:text-4xl max-w-[80%] text-3xl m-8 mt-22 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Key Highlights
        </motion.h1>

        <motion.h1
          className="lg:text-3xl md:text-2xl max-w-[80%] text-xl m-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Live Clock
        </motion.h1>
        <motion.h1
          className="lg:text-3xl md:text-2xl max-w-[80%] text-xl m-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Date Display
        </motion.h1>
        <motion.h1
          className="lg:text-3xl md:text-2xl max-w-[80%] text-xl m-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Inspirational Quotes
        </motion.h1>
        <motion.h1
          className="lg:text-3xl md:text-2xl max-w-[80%] text-xl m-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Theme Toggle
        </motion.h1>
        <motion.h1
          className="lg:text-3xl md:text-2xl max-w-[80%] text-xl m-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Responsive Design
        </motion.h1>
        <motion.h1
          className="lg:text-3xl md:text-2xl max-w-[80%] text-xl m-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Documentation
        </motion.h1>

        <hr />

        <motion.h1
          className="lg:text-5xl md:text-4xl max-w-[80%] text-3xl m-8 mt-22 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The Idea
        </motion.h1>

        <motion.h1
          className="lg:text-3xl md:text-2xl max-w-[80%] text-xl m-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Serene is designed to be a calming, distraction-free dashboard that
          motivates users with time, date, and wisdom. It’s ideal for use as a
          browser start page or a personal dashboard, helping users stay
          inspired and aware of the present moment.
        </motion.h1>

        <hr />

        <motion.h1
          className="lg:text-5xl md:text-4xl max-w-[80%] text-3xl m-8 mt-22 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Socials
        </motion.h1>

        <motion.div
          className="flex flex-row justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <iframe
            src="https://ghbtns.com/github-btn.html?user=jibcamun&repo=Serene&size=large&text=false"
            width="45"
            height="30"
            title="GitHub"
          ></iframe>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=jibcamun&type=follow&size=large"
            width="190"
            height="30"
            title="GitHub"
          ></iframe>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=jibcamun&repo=Serene&type=star&size=large"
            width="80"
            height="30"
            title="GitHub"
          ></iframe>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=jibcamun&repo=Serene&type=watch&size=large&v=2"
            width="90"
            height="30"
            title="GitHub"
          ></iframe>
        </motion.div>

        <hr />

        <motion.h1
          className="lg:text-5xl md:text-4xl max-w-[80%] text-3xl m-8 mt-22 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technologies Used
        </motion.h1>

        <motion.div
          className="flex flex-row gap-8 m-4 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Link href={"https://react.dev/"}>
            <svg
              className="fill-black dark:fill-white"
              role="img"
              viewBox="0 0 24 24"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>React</title>
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
            </svg>
          </Link>

          <Link href={"https://nextjs.org/"}>
            <svg
              viewBox="0 0 394 80"
              width={100}
              height={100}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              className="fill-black dark:fill-white"
            >
              <title>Next.js</title>
              <path
                className="fill-black dark:fill-white"
                d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
              />
              <path
                className="fill-black dark:fill-white"
                d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
              />
            </svg>
          </Link>

          <Link href={"https://tailwindcss.com/"}>
            <svg
              className="fill-black dark:fill-white"
              role="img"
              viewBox="0 0 24 24"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Tailwind CSS</title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
          </Link>

          <Link href={"https://www.npmjs.com/"}>
            <svg
              className="fill-black dark:fill-white"
              role="img"
              viewBox="0 0 24 24"
              width={48}
              height={48}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>npm</title>
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
            </svg>
          </Link>

          <Link href={"https://motion.dev/"}>
            <svg
              className="fill-black dark:fill-white"
              role="img"
              viewBox="0 0 24 24"
              height={48}
              width={48}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Framer Motion</title>
              <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
