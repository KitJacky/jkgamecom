import { useState } from "react";
import { GameCard } from "./GameCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import gamesData from "@/data/games.json";
import type { GamesData } from "@/types/game";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Import all images
import jkJianghuImg from "@/assets/jk-jianghu.jpg";
import mechaBattleImg from "@/assets/mecha-battle.jpg";
import dosGamesImg from "@/assets/dos-games.jpg";
import hakoniwaImg from "@/assets/hakoniwa.jpg";
import ebsBattleImg from "@/assets/ebs-battle.jpg";
import petpkImg from "@/assets/petpk.jpg";
import townImg from "@/assets/town.jpg";
import ffaImg from "@/assets/ffa.jpg";
import tradeImg from "@/assets/trade.jpg";
import sangokuImg from "@/assets/sangoku.jpg";
import seaImg from "@/assets/sea.jpg";
import brImg from "@/assets/br.jpg";
import ogameImg from "@/assets/ogame.jpg";

// Image mapping
const imageMap: { [key: string]: string } = {
  "jk-jianghu": jkJianghuImg,
  "mecha-battle": mechaBattleImg,
  "dos-games": dosGamesImg,
  "hakoniwa": hakoniwaImg,
  "ebs-battle": ebsBattleImg,
  "petpk": petpkImg,
  "town": townImg,
  "ffa": ffaImg,
  "ff-battle": ffaImg,
  "trade": tradeImg,
  "roses": mechaBattleImg,
  "hero": ffaImg,
  "sangoku": sangokuImg,
  "ore": jkJianghuImg,
  "sf2": ffaImg,
  "sea": seaImg,
  "br": brImg,
  "ogame": ogameImg,
  "epet": petpkImg,
  "wor": jkJianghuImg,
};

const typedGamesData = gamesData as GamesData;

export const GamesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filterGames = (games: typeof typedGamesData.categories.featured.games) => {
    if (!searchTerm) return games;
    return games.filter(
      (game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <section id="games" ref={ref} className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto relative z-10">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">All Games</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">
              遊戲<span className="text-primary">大全</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              共 {typedGamesData.categories.all.games.length} 款經典遊戲，免下載直接玩
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜尋遊戲..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 rounded-xl bg-surface/80 backdrop-blur-sm border-border/60 focus:border-primary/60"
              />
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 border-y border-border/50 py-4">
            <TabsList className="inline-flex flex-wrap gap-2 h-auto bg-transparent p-0">
              {[
                ["all", "全部"],
                ["featured", "精選"],
                ["strategy", "策略"],
                ["rpg", "RPG"],
                ["simulation", "模擬"],
                ["battle", "對戰"],
                ["jk-series", "JK系列"],
                ["hako", "箱庭"],
                ["ebs", "EBS"],
              ].map(([value, label]) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="rounded-full px-5 py-2 text-sm font-semibold bg-foreground/5 border border-border/60 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-[0_0_20px_hsl(263_70%_50%/0.4)] transition-all"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(typedGamesData.categories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="transition-all duration-500 data-[state=active]:animate-fade-in">
              {filterGames(category.games).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">找不到符合的遊戲</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]">
                  {filterGames(category.games).map((game, index) => {
                    const featured = index === 0 || index === 7;
                    return (
                      <div
                        key={game.id}
                        className={`opacity-0 h-full ${featured ? "sm:col-span-2 lg:row-span-2" : ""}`}
                        style={{
                          animation: 'fade-in-up 0.6s ease-out forwards',
                          animationDelay: `${Math.min(index, 12) * 0.06}s`
                        }}
                      >
                        <GameCard
                          title={game.title}
                          description={game.description}
                          image={imageMap[game.image] || imageMap["jk-jianghu"]}
                          link={game.url}
                          players={game.players}
                          category={game.category}
                          featured={featured}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            更多遊戲陸續上線中...
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 text-foreground"
            onClick={() => window.open("http://discuss.la", "_blank")}
          >
            加入討論區了解更多
          </Button>
        </div>
      </div>
    </section>
  );
};
