import { Users, Gamepad, Clock, Trophy } from "lucide-react";
import gamesData from "@/data/games.json";
import type { GamesData } from "@/types/game";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const typedGamesData = gamesData as GamesData;
const totalGames = Object.values(typedGamesData.categories).reduce(
  (acc, cat) => acc + cat.games.length,
  0
);

export const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const stats = [
    {
      icon: Gamepad,
      value: `${totalGames}+`,
      label: "經典遊戲",
      color: "text-primary",
    },
    {
      icon: Clock,
      value: "28 年",
      label: "服務歷史",
      color: "text-accent",
    },
    {
      icon: Users,
      value: "10萬+",
      label: "註冊玩家",
      color: "text-secondary",
    },
    {
      icon: Trophy,
      value: "免費",
      label: "完全免費",
      color: "text-primary",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 transform group">
                <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
