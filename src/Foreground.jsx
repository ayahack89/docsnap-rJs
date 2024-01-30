/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: " This ia a demo, that will be displayed.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: " This ia a demo, that will be displayed.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: " This ia a demo, that will be displayed.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className=" fixed top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, _index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
