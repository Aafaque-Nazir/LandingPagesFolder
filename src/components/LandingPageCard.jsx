import { motion } from 'framer-motion';

function LandingPageCard({ title, image, url }) {
  return (
    <motion.div
      className="relative max-w-sm rounded-2xl overflow-hidden bg-white/20 shadow-lg border border-white/30"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <img
        className="w-full h-52 object-center"
        src={image}
        alt={title}
      />
      <div className="p-5 bg-gray-200/70 backdrop-blur-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition"
        >
          View Live
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default LandingPageCard;
