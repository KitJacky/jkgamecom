import { ArrowUpRight, Users } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  players?: string;
  category: string;
  featured?: boolean;
}

export const GameCard = ({
  title,
  description,
  image,
  link,
  players,
  category,
  featured = false,
}: GameCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full min-h-[240px] overflow-hidden rounded-3xl border border-border/60 bg-surface/80 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_60px_hsl(263_70%_50%/0.3)]"
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />

      {/* Category */}
      <span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-background/70 backdrop-blur-sm border border-secondary/30 text-secondary">
        {category}
      </span>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
        <h3
          className={`font-display text-foreground leading-tight mb-2 ${
            featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm text-muted-foreground ${
            featured ? "line-clamp-3 max-w-md" : "line-clamp-2"
          }`}
        >
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          {players ? (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="w-3.5 h-3.5" />
              {players}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-glow-pulse" />
              Online
            </span>
          )}

          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-foreground/10 border border-border/70 text-foreground transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </a>
  );
};
