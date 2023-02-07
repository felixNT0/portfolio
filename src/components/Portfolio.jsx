import React from "react";
import farmeasy from "../assets/portfolio/farmeasy.png";
import geek from "../assets/portfolio/geek.png";
import houseacq from "../assets/portfolio/houseacq.png";
import investyield from "../assets/portfolio/investyield.png";
import monsterindia from "../assets/portfolio/monsterindia.png";
import omdb from "../assets/portfolio/omdb.png";
import paperdaz from "../assets/portfolio/paperdaz.png";
import politicsthreadadmin from "../assets/portfolio/politicsthreaadmin.png";
import politicthread from "../assets/portfolio/politicsthread.png";
import sugarcosmetic from "../assets/portfolio/sugarcosmetic.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: investyield,
      link: "https://www.investyield.ng/",
      name: "Invest Yield",
      disc: "This is a website and app where you can make transactions of money in dollars, naira and other currencies.",
    },
    {
      id: 2,
      src: politicthread,
      link: "https://politicsthread.com/",
      name: "Politics Thread",
      disc: "This is a working that allows everyone that comes to the website to express their feeling about politics.",
    },
    {
      id: 3,
      src: paperdaz,
      link: "https://paperdaz.com/",
      name: "Paperdaz",
      disc: "This is a website which Provide Paperdaz anytime anywhere for clients to complete. Save time and money for everyone!.",
    },
    {
      id: 4,
      src: houseacq,
      link: "https://houseacq.com/",
      name: "House Acq",
      disc: "This is a website where users can sign up, post house vacancy and see houses that they can book.",
    },
    {
      id: 5,
      src: politicsthreadadmin,
      link: "https://rpt.politicsthread.com/",
      name: "Politics Thread Admin Dashboard",
      disc: "This is a website for the admins where they will have to approve the post of each users before it show on the website.",
    },
    {
      id: 6,
      src: farmeasy,
      link: "https://ephemeral-visheshsingh-farmeasy.netlify.app/",
      name: "FarmEasy Clone",
      disc: "This is a working clone of Pharmeasy website where you can search for any medicine and healthcare products.",
    },
    {
      id: 7,
      src: sugarcosmetic,
      link: "https://melodic-malabi-d69a87.netlify.app/",
      name: "Sugarcosmetic Clone",
      disc: "This is a working clone of the Sugar Cosmetics website where you can buy beauty products like makeup kits, powder, and brushes.",
    },
    {
      id: 8,
      src: omdb,
      link: "https://singhvishesh9484.github.io/Asynchronus-movie-app/",
      name: "Hotstar Mini",
      disc: "This is mini clone of Hotstar where you can see list of movies and sort them accoring to rating.",
    },
    {
      id: 9,
      src: geek,
      link: "https://benevolent-fudge-ac5ed4.netlify.app/",
      name: "Geekbuying Clone",
      disc: "This is clone of geekbuying website where you can browse some electric items.",
    },
    {
      id: 10,
      src: monsterindia,
      link: "https://monster-india-clone.netlify.app/",
      name: "monsterindia Clone",
      disc: "This is a working clone of the monster India website where you can search and get jobs across India.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="portfolio_component w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div
            data-aos="slide-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="700"
            className="py-6"
          >
            I have spent a lot of time on different projects. I love doing
            everything from scratch. Here are some of my favorite ones which sum
            up my knowledge. I have done many small projects from different
            courses and challenges to learn the basics. You can click on the
            demo to view.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, name, disc }) => (
            <div
              key={id}
              data-aos="zoom-in-down"
              data-aos-delay="30"
              data-aos-duration="700"
              className="cursor-pointer shadow-md shadow-gray-600 rounded-lg "
            >
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
              </div>
              <p style={{ textAlign: "center" }}>{name}</p>
              <br />
              <p style={{ padding: "15px 0 10px 15px", fontSize: "12px" }}>
                {disc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
