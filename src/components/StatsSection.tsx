import { Users, Gamepad, Clock, Trophy } from "lucide-react";
import gamesData from "@/data/games.json";
import type { GamesData } from "@/types/game";

const typedGamesData = gamesData as GamesData;
const totalGames = Object.values(typedGamesData.categories).reduce(
  (acc, cat) => acc + cat.games.length,
  0
);

export const StatsSection = () => {
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 animate-glow-pulse">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
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
