import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ProjectTile({ project, index }) {
  return (
    <motion.a
      href={`/projects/${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] } }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative block bg-card/60 border border-border shadow-sm rounded-2xl overflow-hidden backdrop-blur-md flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Video Thumbnail Area */}
      <div className="relative w-full h-[200px] bg-surface/50 overflow-hidden">
        {project.videoUrl ? (
          <>
            <video
              src={project.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-4xl text-primary/30">▶</div>
          </div>
        )}
        
        {/* Play Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300"
        >
          <div className="p-4 rounded-full bg-secondary/80 text-foreground group-hover:bg-secondary group-hover:shadow-lg group-hover:shadow-secondary/50 transition-all duration-300">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h2 
              className="text-xl font-bold font-heading text-foreground tracking-tight group-hover:text-secondary transition-colors duration-200"
              style={{ viewTransitionName: `title-${project.id}` }}
            >
              {project.title}
            </h2>
          </div>

          <p className="text-sm text-muted leading-relaxed font-light line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Tags and Link */}
        <div className="pt-6 space-y-4">
          <div className="w-full h-[1px] bg-border/20" />
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span 
                  key={i} 
                  className="text-[11px] font-medium tracking-wide text-muted bg-primary/10 px-2.5 py-1 rounded border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-sm text-secondary font-medium group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
    </motion.a>
  );
}
