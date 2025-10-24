import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  players?: string;
  category: string;
}

export const GameCard = ({ title, description, image, link, players, category }: GameCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_12px_48px_hsl(263_70%_50%/0.3)] hover:-translate-y-2 transform">
      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-xs font-medium text-primary-foreground">
        {category}
      </div>

      {/* Image container with overlay */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          {players && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{players}</span>
            </div>
          )}
          
          <Button 
            asChild
            size="sm"
            className="ml-auto bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50 transition-all duration-300 hover:scale-110 transform hover:shadow-[0_0_20px_hsl(263_70%_50%/0.5)]"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              開始遊戲
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0" />
      </div>
    </Card>
  );
};
