/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { FaRegFileAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { IoDownloadOutline } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { IoClose } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// eslint-disable-next-line no-unused-vars
function Card({ data, reference }) {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-800/90 overflow-hidden py-10 px-8 text-white"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5  font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full  left-0 ">
          <div className="flex items-center justify-between py-3 px-8 mb-3">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <IoDownloadOutline size=".9em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen ? (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
