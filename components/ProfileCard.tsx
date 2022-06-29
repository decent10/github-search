import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ProfileProps } from "../types";
const variant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};
const pictureVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.6 },
};
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export default function ProfileCard({
  name,
  avatarUrl = "/profile.jpg",
  profileUrl,
  location,
  bio,
}: ProfileProps) {
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        translateY: 10,
        scale: 0.9,
      }}
      initial={{ opacity: 0, y: 200 }}
      className=" w-full mx-4 md:w-1/3 lg:w-1/4 min-w-0 break-words bg-white  mb-6 shadow-lg rounded-xl mt-16"
    >
      <div className="flex flex-wrap justify-center mb-20">
        <div className="w-full flex justify-center">
          <div className="relative">
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className=" absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
            >
              <Image
                src={avatarUrl}
                className=" shadow-lg cursor-pointer rounded-full align-middle border-none"
                height={130}
                width={130}
                alt={name || "github profile pic"}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <motion.h3
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          initial={{ opacity: 0 }}
          className="text-2xl text-indigo-700 leading-normal mb-1"
        >
          {name ? name : "No name"}
        </motion.h3>
        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
          {location}
        </div>
        <a
          href={profileUrl}
          target="_blank"
          className=" flex justify-center font-normal text-center text-slate-700 hover:text-slate-400"
          rel="noreferrer"
        >
          <motion.svg
            width={24}
            height={24}
            whileHover={{
              scale: 1.2,
            }}
            fill="currentColor"
            className="text-slate-700  transform"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
            />
          </motion.svg>
        </a>
      </div>
      <div className="mt-6 py-6 border-t border-indigo-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 ">
            <p className="font-light leading-relaxed text-slate-800 mb-4 h-32 min-h-0 text-ellipsis overflow-hidden">
              {bio ? bio : ""}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
