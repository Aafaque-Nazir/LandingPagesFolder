import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiExternalLink } from "react-icons/fi";

function LandingPageCard({ title, image, url }) {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={20}
      scale={1.12}
      transitionSpeed={450}
      className="w-full"
    >
      <motion.div
        className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            className="w-full h-52 object-cover rounded-t-2xl"
            src={image}
            alt={title}
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>

          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-md hover:shadow-indigo-500/40 transition cursor-pointer"
          >
            View Live
            <FiExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default LandingPageCard;
