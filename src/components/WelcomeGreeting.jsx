import { motion } from 'framer-motion';

export default function WelcomeGreeting() {
  return (
    <header className="space-y-8 max-w-3xl">

    <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{
            duration:.8,
            ease:[0.16,1,0.3,1]
        }}
    >

        <div className="inline-flex items-center rounded-full border border-primaryLight/30 bg-black/30 px-4 py-1 mb-6 backdrop-blur-sm">

            <span className="h-2 w-2 rounded-full bg-secondaryLight mr-3 animate-pulse" />

            <span className="text-sm tracking-wider uppercase text-secondaryLight font-medium">

                Interactive Software Engineering Portfolio

            </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight text-white drop-shadow-md">

            Project

            <span className="block bg-gradient-to-r from-primaryLight to-accentLight bg-clip-text text-transparent drop-shadow-sm">

                Showcase

            </span>

        </h1>

    </motion.div>

    <motion.p
        initial={{opacity:0,y:15}}
        animate={{opacity:1,y:0}}
        transition={{
            delay:.15,
            duration:.8
        }}
        className="text-lg md:text-xl leading-8 max-w-2xl text-slate-200 drop-shadow-sm font-medium"
    >

        Experience each project through interactive demonstrations,
        architecture overviews, and implementation walkthroughs.
        Every solution represents practical software engineering,
        scalable design, and attention to user experience.

    </motion.p>

    <motion.a
        href="#projects"
        initial={{opacity:0,y:15}}
        animate={{opacity:1,y:0}}
        transition={{
            delay:.3,
            duration:.8
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black/40 border border-primaryLight/40 text-white font-medium backdrop-blur-md hover:bg-black/60 hover:border-primaryLight/60 hover:shadow-lg hover:shadow-primaryLight/20 transition-all duration-200"
    >
        Explore Projects
        <span className="text-secondary">→</span>
    </motion.a>

  </header>
  );
}