import React from 'react';
import LandingPageCard from './components/LandingPageCard';

const pages = [
  {
    title: 'My Portfolio',
    image: 'https://i.ibb.co/r2hPYPmV/Screenshot-2.png',
    url: 'https://aafaque-portfolio.netlify.app',
  },
  {
    title: 'Cruise Ship Express',
    image: 'https://i.ibb.co/KxtjB95V/Screenshot-1.png',
    url: 'https://cruiseshipexpress.netlify.app',
  },
  {
    title: 'Packers and Movers',
    image: 'https://i.ibb.co/5xrQ2cCj/Screenshot-3.png',
    url: 'https://moverspackerslandingpage.netlify.app',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-6 sm:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 drop-shadow-lg animate-fade-in p-3">
            🌟 Explore Landing Experiences
          </h1>
          <p className="text-xl sm:text-2xl mt-4 text-gray-800 font-medium max-w-3xl mx-auto">
            Sleek, interactive, and crafted with precision — powered by React, Tailwind CSS, and Framer Motion.
          </p>
          <div className="mt-6 w-32 h-1 mx-auto bg-gradient-to-r from-indigo-400 via-pink-400 to-red-400 rounded-full shadow-md"></div>
        </div>
<div className='bg-purple-300/70 p-12 rounded-xl shadow-xl mb-16'>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {pages.map((page, index) => (
            <LandingPageCard
              key={index}
              title={page.title}
              image={page.image}
              url={page.url}
              />
            ))}
        </div>
            </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aafaque Sufiyan Nazir. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;