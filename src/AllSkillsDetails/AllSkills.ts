import AGORA from "../assets/Agora.jpg";
import ANTD from "../assets/antd.png";
import apollo from "../assets/apollo.jpg";
import BOOTSTRAP from "../assets/bootstrap.jpg";
import css from "../assets/css.png";
import FIGMA from "../assets/figma.png";
import framerMotion from "../assets/framer_motion.jpeg";
import GIT from "../assets/git.png";
import { default as github } from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import jira from "../assets/jira.png";
import MUI from "../assets/material-UI.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import NPM from "../assets/npm.png";
import photoshop from "../assets/photoshop.png";
import python from "../assets/python.svg";
import r from "../assets/r.svg";
import reactImage from "../assets/react.png";
import reactQuery from "../assets/reactquery.png";
import RECOIL from "../assets/recoil.png";
import redux from "../assets/redux.png";
import SASS from "../assets/sass.png";
import slack from "../assets/slack.jpg";
import solidjs from "../assets/solidjs.jpeg";
import STYLED_COMPONENT from "../assets/styled-components.png";
import svelte from "../assets/svelte.svg";
import TAILWIND from "../assets/tailwind.png";
import typrscript from "../assets/typescript.png";
import vite from "../assets/vite.png";
import vuejs from "../assets/vuejs.svg";
import WEBSOCKET from "../assets/websocket.png";
import zustand from "../assets/zustand.jpg";

import chakra from "../assets/chakra-ui.webp";
import express from "../assets/expressjs.png";
import firebase from "../assets/firebase.png";
import graphql from "../assets/graphql.webp";
import mantine from "../assets/mantine.png";
import postgresql from "../assets/postgres.png";

export interface SkillItem {
  id: number;
  src: string;
  title: string;
  style: string;
}

export const allSkills: SkillItem[] = [
  {
    id: 1,
    src: html,
    title: "HTML5 MARKUP",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS3 STYLING",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JAVASCRIPT ES6+",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImage,
    title: "REACT & REACT NATIVE",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: redux,
    title: "REDUX STATE MGMT",
    style: "shadow-purple-500",
  },
  {
    id: 6,
    src: node,
    title: "NODE.JS RUNTIME",
    style: "shadow-green-400",
  },
  {
    id: 7,
    src: RECOIL,
    title: "RECOIL STATE MGMT",
    style: "shadow-gray-300",
  },
  {
    id: 8,
    src: github,
    title: "GITHUB VERSION CONTROL",
    style: "shadow-gray-400",
  },
  {
    id: 9,
    src: mongodb,
    title: "MONGODB DATABASE",
    style: "shadow-green-500",
  },
  {
    id: 10,
    src: vite,
    title: "VITE BUILD TOOL",
    style: "shadow-yellow-500",
  },
  {
    id: 11,
    src: nextjs,
    title: "NEXT.JS FRAMEWORK",
    style: "shadow-gray-400",
  },
  {
    id: 12,
    src: typrscript,
    title: "TYPESCRIPT LANGUAGE",
    style: "shadow-blue-600",
  },
  {
    id: 13,
    src: framerMotion,
    title: "FRAMER MOTION ANIMATIONS",
    style: "shadow-blue-300",
  },
  {
    id: 14,
    src: NPM,
    title: "NPM PACKAGE MANAGER",
    style: "shadow-red-500",
  },
  {
    id: 15,
    src: GIT,
    title: "GIT VERSION CONTROL",
    style: "shadow-orange-500",
  },
  {
    id: 16,
    src: ANTD,
    title: "ANT DESIGN COMPONENTS",
    style: "shadow-blue-600",
  },
  {
    id: 17,
    src: MUI,
    title: "MATERIAL-UI COMPONENTS",
    style: "shadow-blue-500",
  },
  {
    id: 18,
    src: SASS,
    title: "SASS PREPROCESSOR",
    style: "shadow-pink-400",
  },
  {
    id: 19,
    src: STYLED_COMPONENT,
    title: "STYLED-COMPONENTS CSS-IN-JS",
    style: "shadow-pink-100",
  },
  {
    id: 20,
    src: TAILWIND,
    title: "TAILWIND CSS FRAMEWORK",
    style: "shadow-blue-300",
  },
  {
    id: 21,
    src: BOOTSTRAP,
    title: "BOOTSTRAP FRAMEWORK",
    style: "shadow-purple-500",
  },
  {
    id: 22,
    src: jira,
    title: "JIRA PROJECT MGMT",
    style: "shadow-blue-700",
  },
  {
    id: 23,
    src: slack,
    title: "SLACK COLLABORATION",
    style: "shadow-red-500",
  },
  {
    id: 24,
    src: photoshop,
    title: "ADOBE PHOTOSHOP",
    style: "shadow-blue-400",
  },
  {
    id: 25,
    src: FIGMA,
    title: "FIGMA DESIGN TOOL",
    style: "shadow-red-500",
  },
  {
    id: 26,
    src: AGORA,
    title: "AGORA VIDEO CALLING",
    style: "shadow-blue-500",
  },
  {
    id: 27,
    src: WEBSOCKET,
    title: "WEBSOCKET REAL-TIME",
    style: "shadow-orange-400",
  },
  {
    id: 100,
    src: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
    title: "FLUTTER",
    style: "shadow-blue-500",
  },
  {
    id: 200,
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    title: "DART",
    style: "shadow-blue-600",
  },
  {
    id: 300,
    src: "https://streamlit.io/images/brand/streamlit-mark-color.png",
    title: "STREAMLIT",
    style: "shadow-red-500",
  },
  {
    id: 400,
    src: "https://raw.githubusercontent.com/d3/d3-logo/master/d3.png",
    title: "D3.JS",
    style: "shadow-orange-500",
  },
  {
    id: 500,
    src: "https://nestjs.com/img/logo-small.svg",
    title: "NESTJS",
    style: "shadow-red-600",
  },
  {
    id: 600,
    src: "https://fastify.dev/img/fastify-logo.svg",
    title: "FASTIFY",
    style: "shadow-black",
  },
  {
    id: 700,
    src: "https://raw.githubusercontent.com/hapijs/hapi/master/images/hapi.png",
    title: "HAPI.JS",
    style: "shadow-orange-500",
  },
  {
    id: 800,
    src: "https://prisma.io/images/favicon-32x32.png",
    title: "PRISMA ORM",
    style: "shadow-indigo-500",
  },
  {
    id: 900,
    src: "https://sequelize.org/img/logo.svg",
    title: "SEQUELIZE",
    style: "shadow-blue-400",
  },
  {
    id: 1000,
    src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    title: "MYSQL",
    style: "shadow-orange-500",
  },
  {
    id: 1100,
    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
    title: "SQLITE",
    style: "shadow-blue-400",
  },
  {
    id: 1200,
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    title: "AWS SERVICES",
    style: "shadow-orange-500",
  },
  {
    id: 1300,
    src: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    title: "DOCKER",
    style: "shadow-blue-500",
  },
  {
    id: 1400,
    src: "https://kubernetes.io/images/favicon.png",
    title: "KUBERNETES",
    style: "shadow-blue-600",
  },
  {
    id: 1500,
    src: "https://seeklogo.com/images/G/google-analytics-logo-3EE15494D5-seeklogo.com.png",
    title: "GOOGLE ANALYTICS",
    style: "shadow-orange-400",
  },
  {
    id: 1600,
    src: "https://cdn.sanity.io/images/3do82whm/next/0b299e574d682496a4ab54c9012351d3b070445d-2000x2000.png?w=45&h=45&fit=crop",
    title: "SANITY IO",
    style: "shadow-red-500",
  },
  {
    id: 1700,
    src: "https://images.ctfassets.net/344bhfa86743/2uWd3y9tQ1a03e1i2k0j1e/189280f8337722749557766023533477/contentful-logo.png",
    title: "CONTENTFUL",
    style: "shadow-blue-500",
  },
  {
    id: 1800,
    src: "https://strapi.io/assets/strapi-logo-dark.png",
    title: "STRAPI",
    style: "shadow-purple-500",
  },
  // New skills from resume
  {
    id: 28,
    src: python,
    title: "PYTHON",
    style: "shadow-blue-500",
  },
  {
    id: 29,
    src: r,
    title: "R PROGRAMMING",
    style: "shadow-blue-600",
  },
  {
    id: 30,
    src: svelte,
    title: "SVELTE",
    style: "shadow-orange-500",
  },
  {
    id: 31,
    src: solidjs,
    title: "SOLIDJS",
    style: "shadow-blue-400",
  },
  {
    id: 32,
    src: apollo,
    title: "APOLLO GRAPHQL",
    style: "shadow-purple-600",
  },
  {
    id: 33,
    src: zustand,
    title: "ZUSTAND",
    style: "shadow-orange-400",
  },
  {
    id: 34,
    src: vuejs,
    title: "VUE.JS",
    style: "shadow-green-500",
  },
  {
    id: 35,
    src: reactQuery,
    title: "REACT QUERY",
    style: "shadow-red-500",
  },
  {
    id: 36,
    src: express,
    title: "EXPRESS.JS",
    style: "shadow-gray-400",
  },
  {
    id: 37,
    src: postgresql,
    title: "POSTGRESQL",
    style: "shadow-blue-500",
  },
  {
    id: 38,
    src: firebase,
    title: "FIREBASE",
    style: "shadow-orange-500",
  },
  {
    id: 39,
    src: graphql,
    title: "GRAPHQL",
    style: "shadow-pink-500",
  },
  {
    id: 40,
    src: chakra,
    title: "CHAKRA UI",
    style: "shadow-teal-500",
  },
  {
    id: 41,
    src: mantine,
    title: "MANTINE",
    style: "shadow-blue-500",
  },
  {
    id: 42,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68pt-44K6Zu1nDhCqnAvcW_e05xHQZkvshoyWIhHejg_iis7xPmfIZb43Wu6OWjs1958&usqp=CAU",
    title: "THREE.JS",
    style: "shadow-gray-600",
  },
  {
    id: 43,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OficebiLHdOd2zhh88fzqtZaOUHrsx2UDqo-8SLPQMTQKTjRle9J4z2TsHvKnRkjJ-Q&usqp=CAU",
    title: "JEST",
    style: "shadow-red-600",
  },
  {
    id: 44,
    src: "https://www.cypress.io/cypress_logo_social.png",
    title: "CYPRESS",
    style: "shadow-green-600",
  },
  {
    id: 45,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE48dHnqpwAJngcqznoFWOlUBV2AXaPHt5mg&s",
    title: "MIXPANEL",
    style: "shadow-purple-500",
  },
  {
    id: 46,
    src: "https://devio2023-media.developers.io/wp-content/uploads/2023/05/eyecatch_sentry_1200x630.png",
    title: "SENTRY",
    style: "shadow-orange-600",
  },
  {
    id: 47,
    src: "https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_white.png?auto=format&fit=max&w=847&dpr=2",
    title: "DATADOG",
    style: "shadow-red-500",
  },
  {
    id: 48,
    src: "https://gotrialpro.net/wp-content/uploads/edd/2024/07/Trello-Free-Trial.png",
    title: "TRELLO",
    style: "shadow-blue-500",
  },
  {
    id: 49,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsuQQUD-CKSk5-Pw6zmAPPO7_4CtaarQ7_g&s",
    title: "BITBUCKET",
    style: "shadow-blue-600",
  },
  {
    id: 50,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    title: "GOOGLE WORKSPACE",
    style: "shadow-blue-500",
  },
  {
    id: 51,
    src: "https://cdn.worldvectorlogo.com/logos/socket-io-1.svg",
    title: "SOCKET.IO",
    style: "shadow-black",
  },
  {
    id: 52,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHgR7XfRdmxVoZq6awbq57zVK6-8shpCCBg&s",
    title: "TWILIO",
    style: "shadow-red-500",
  },
  {
    id: 53,
    src: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbLklMI%2FbtsFAjkijvi%2FAAAAAAAAAAAAAAAAAAAAAH7DlspIpzgGURD90gsVmK61ZoRhJ2mn66HPk-x3mrBr%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1756652399%26allow_ip%3D%26allow_referer%3D%26signature%3DLKXBTHPm%252F1keWW%252BqT0NhbkaK8Co%253D",
    title: "SWIPER JS",
    style: "shadow-blue-500",
  },
  {
    id: 54,
    src: "https://images.seeklogo.com/logo-png/49/1/chart-js-logo-png_seeklogo-496478.png",
    title: "CHART.JS",
    style: "shadow-red-500",
  },
  {
    id: 55,
    src: "https://formik.org/images/formik-og.png",
    title: "FORMIK",
    style: "shadow-blue-500",
  },
  {
    id: 56,
    src: "https://miro.medium.com/1*8pLiWUrglmnzfBYf1XJ4TA.jpeg",
    title: "YUP VALIDATION",
    style: "shadow-purple-500",
  },
  {
    id: 57,
    src: "https://images.ctfassets.net/crb83veve8xb/2YfNwMlyl1U0DLVXRgL8TB/9e8474e083f2ba01a296343d84f2282d/vercel_thumbnail.webp",
    title: "VERCEL",
    style: "shadow-black",
  },
  {
    id: 58,
    src: "https://www.magnolia-cms.com/dam/jcr:6da2ba1b-7388-4d94-a76f-a8a166f6bb80/Netlify.jpg",
    title: "NETLIFY",
    style: "shadow-teal-500",
  },
  {
    id: 59,
    src: "https://sm.pcmag.com/t/pcmag_au/review/w/wix-websit/wix-website-builder_tfca.1920.jpg",
    title: "WIX",
    style: "shadow-orange-500",
  },
  {
    id: 60,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaE6ImPs_x2tF41b4sLXzfMJ4G9sUmsZCHKTPIPKNm0xXwREK8VJbnAY7sk2R9khi7hU&usqp=CAU",
    title: "WORDPRESS",
    style: "shadow-blue-500",
  },
  {
    id: 61,
    src: "https://sm.pcmag.com/t/pcmag_me/review/w/webflow-we/webflow-website-builder_hec8.1920.jpg",
    title: "WEBFLOW",
    style: "shadow-blue-600",
  },
  {
    id: 62,
    src: "https://cdn.prod.website-files.com/63c6a35ee97bea3e121bf3f4/65ba74ce20f7c87960a872ce_64631e51d10baae4dab60132_2.webp",
    title: "FRAMER",
    style: "shadow-purple-500",
  },
  {
    id: 63,
    src: "https://vectordiary.com/wp-content/uploads/2023/03/How-to-Download-Adobe-XD-Free.jpg",
    title: "ADOBE XD",
    style: "shadow-pink-500",
  },
  {
    id: 64,
    src: "https://www.raulcarini.dev/_next/image?url=%2Fassets%2Fturbopack%2Fturbopack.png&w=1920&q=100CCCC",
    title: "TURBO",
    style: "shadow-blue-500",
  },
  {
    id: 65,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBmD8m8zj1f9HtDKFOEFTyr-CsGlKAijUKcDt-mpOxz8wyOuBDnmXYwIxVpJV632nPIo&usqp=CAU",
    title: "PAYLOAD CMS",
    style: "shadow-green-500",
  },
  {
    id: 66,
    src: "https://cdn.prod.website-files.com/66c75dcbd30bceb099fe2269/6834909ef008abc19b856fe3_pipedrive-logo.png",
    title: "PIPEDRIVE",
    style: "shadow-blue-500",
  },
  {
    id: 67,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpO52givBofwhZZyRhhJLRZbzo1JqKnbA6Q&s",
    title: "ZOHO",
    style: "shadow-blue-600",
  },
  {
    id: 68,
    src: "https://miro.medium.com/v2/resize:fit:1200/1*2IxFOAlmFfcFDegN6UVP2w.png",
    title: "MMKV",
    style: "shadow-purple-500",
  },
  {
    id: 69,
    src: "https://www.zealousys.com/wp-content/uploads/2024/02/React-Testing-Libraries.webp",
    title: "REACT TESTING LIBRARY",
    style: "shadow-red-500",
  },
  {
    id: 70,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhZSk0aVmTUbojgHAi4CrJfPL6Ls5DNkDgw&s",
    title: "ENZYME",
    style: "shadow-blue-500",
  },
  {
    id: 71,
    src: "https://raw.githubusercontent.com/mochajs/mocha/HEAD/assets/mocha-logo.svg",
    title: "MOCHA",
    style: "shadow-amber-600",
  },
];
