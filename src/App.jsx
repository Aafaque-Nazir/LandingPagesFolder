import React from "react";
import LandingPageCard from "./components/LandingPageCard";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const pages = [
  {
    title: "Ecommerce Store",
    image: "https://i.ibb.co/jZyV94dw/CAF70-BF2-EABA-40-C2-BCC1-8-E0-AF74746-FD.png",
    url: "https://shopease-aafaque.app",
    github: "https://github.com/Aafaque-Nazir/LandingPagesFolder",
  },
  {
    title: "NGOs Landing Page",
    image: "https://i.ibb.co/mCTVsJYd/Screenshot-47.png",
    url: "https://ngo-aafaque.netlify.app",
    github: "https://github.com/Aafaque-Nazir/LandingPagesFolder",
  },
  {
    title: "Food Delivery App",
    image: "https://i.ibb.co/jqVhnX8/Screenshot-4.png",
    url: "https://bread-and-bite.netlify.app",
    github: "https://github.com/Aafaque-Nazir/FoodApp",
  },
  {
    title: "My Portfolio",
    image: "https://i.ibb.co/dRRZWd1/BA0-AB626-31-DC-41-F0-A77-D-80428-D59-B014.png",
    url: "https://aafaque-portfolio.netlify.app",
    github: "https://github.com/Aafaque-Nazir/Portfolio",
  },
  {
    title: "Weather App",
    image: "https://i.ibb.co/qYwxntTC/E58-A0-D5-C-FFC8-44-BD-9658-63-C2-E2462-EFB.png",
    url: "https://weather-aafaque.netlify.app/",
    github: "https://github.com/Aafaque-Nazir/TodoList",
  },
  {
    title: "Tasky - Todo App",
    image: "https://i.ibb.co/NdNjj3Bz/2-B05-E778-F78-D-4001-851-C-C47-D6-C64-F233.png",
    url: "https://tasky-aafaque.netlify.app/",
    github: "https://github.com/Aafaque-Nazir/TodoList",
  },
  {
    title: "Cruise Ship Express",
    image: "https://i.ibb.co/KxtjB95V/Screenshot-1.png",
    url: "https://cruiseshipexpress.netlify.app",
    github: "https://github.com/Aafaque-Nazir/CruiseShip",
  },
  {
    title: "Sea Cros - Cruise Booking",
    image: "https://i.ibb.co/qYCjsS5V/3-A3-A008-D-21-DC-4-C22-A8-FA-994-D66-CD79-B3.png",
    url: "https://sea-cros.netlify.app",
    github: "https://github.com/Aafaque-Nazir/CruiseShip",
  },
  {
    title: "Blog Website",
    image: "https://i.ibb.co/1f7BFTym/2-EB85060-5-A6-F-47-AB-BA05-972119-CDC500.png",
    url: "https://blogpostapp-aafaque.netlify.app",
    github: "https://github.com/Aafaque-Nazir/MoversPackers",
  },
  {
    title: "Random Password Generator",
    image: "https://i.ibb.co/ksLtSQnZ/1215-B214-446-A-4-A78-AE95-A78-FA3-F471-E5.png",
    url: "https://password-randoms.netlify.app/",
    github: "https://github.com/Aafaque-Nazir/pass-generator",
  },
  {
    title: "PassMan - Password Manager",
    image: "https://i.ibb.co/7t2dTK6R/9-A3-ED1-B5-6-AAF-4583-AF94-314-FE9-A52461.png",
    url: "https://passman-passwordmanager.netlify.app/",
    github: "https://github.com/Aafaque-Nazir/PassManager",
  },
  {
    title: "Currency Converter",
    image: "https://i.ibb.co/hJZHDtmC/356-D914-E-46-A7-4713-A3-F5-80487770-F38-D.png",
    url: "https://currenccyconnvverter.netlify.app/",
    github: "https://github.com/Aafaque-Nazir/CurrecncyConverter",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-8 sm:p-14 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
            <Typewriter
              options={{
                strings: [" Every Project in My Learning Journey"],
                autoStart: true,
                loop: true,
                delay: 75,
                pauseFor: 2000,
              }}
            />
          </h1>
          <p className="text-lg sm:text-xl mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing all my work — experiments, learnings, and real-world
            projects. Built with React, Tailwind CSS, and endless curiosity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {pages.map((page, index) => (
            <LandingPageCard
              key={index}
              title={page.title}
              image={page.image}
              url={page.url}
              github={page.github}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Aafaque Sufiyan Nazir. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
