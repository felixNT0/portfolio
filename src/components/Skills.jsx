import React from "react";

import ANTD from "../assets/antd.png";
import BOOTSTRAP from "../assets/bootstrap.jpg";
import css from "../assets/css.png";
import framerMotion from "../assets/framer_motion.jpeg";
import GIT from "../assets/git.png";
import { default as github } from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import MUI from "../assets/material-UI.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import NPM from "../assets/npm.png";
import reactImage from "../assets/react.png";
import RECOIL from "../assets/recoil.png";
import redux from "../assets/redux.png";
import SASS from "../assets/sass.png";
import STYLED_COMPONENT from "../assets/styled-components.png";
import TAILWIND from "../assets/tailwind.png";
import typrscript from "../assets/typescript.png";
import vite from "../assets/vite.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "REACT AND REACT NATIVE",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: redux,
      title: "REDUX",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: node,
      title: "NODE JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: RECOIL,
      title: "RECOIL",
      style: "shadow-white",
    },
    {
      id: 8,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },

    {
      id: 9,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: vite,
      title: "VITE",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: nextjs,
      title: "NEXT JS",
      style: "shadow-gray-400",
    },

    {
      id: 12,
      src: typrscript,
      title: "TYPESCRIPT",
      style: "shadow-blue-600",
    },
    {
      id: 13,
      src: framerMotion,
      title: "FRAMER MOTION",
      style: "shadow-blue-300",
    },
    {
      id: 14,
      src: NPM,
      title: "NPM",
      style: "shadow-red-500",
    },
    {
      id: 15,
      src: GIT,
      title: "GIT",
      style: "shadow-orange-500",
    },
    {
      id: 16,
      src: ANTD,
      title: "ANT DESIGN",
      style: "shadow-blue-600",
    },
    {
      id: 17,
      src: MUI,
      title: "Material-UI",
      style: "shadow-blue-500",
    },
    {
      id: 18,
      src: SASS,
      title: "SASS",
      style: "shadow-pink-400",
    },
    {
      id: 19,
      src: STYLED_COMPONENT,
      title: "STYLED COMPONENT",
      style: "shadow-pink-100",
    },
    {
      id: 20,
      src: TAILWIND,
      title: "TAILWIND CSS",
      style: "shadow-blue-300",
    },

    {
      id: 21,
      src: BOOTSTRAP,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div name="skills" className="w-full h-auto experience">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            data-aos="fade-up"
            className="text-4xl font-bold border-b-4 border-gray-500 p-.5 inline"
          >
            Skills
          </p>
          <p
            className="py-6"
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="700"
          >
            These are the some tools and technologies I've worked with and used
            them in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              data-aos="zoom-in-up"
              data-aos-delay="30"
              className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
