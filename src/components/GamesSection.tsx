import { useState } from "react";
import { GameCard } from "./GameCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import gamesData from "@/data/games.json";
import type { GamesData } from "@/types/game";

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
  const [activeTab, setActiveTab] = useState("featured");

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
    <section id="games" className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            遊戲大全
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            探索我們的經典遊戲收藏 - 共 {Object.values(typedGamesData.categories).reduce((acc, cat) => acc + cat.games.length, 0)} 款遊戲
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜尋遊戲..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
              />
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="featured">精選</TabsTrigger>
            <TabsTrigger value="jk-series">JK系列</TabsTrigger>
            <TabsTrigger value="hako">箱庭</TabsTrigger>
            <TabsTrigger value="ebs">EBS</TabsTrigger>
          </TabsList>

          {Object.entries(typedGamesData.categories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="animate-fade-in">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                {category.name}
              </h3>
              
              {filterGames(category.games).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">找不到符合的遊戲</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterGames(category.games).map((game, index) => (
                    <div
                      key={game.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <GameCard
                        title={game.title}
                        description={game.description}
                        image={imageMap[game.image] || imageMap["jk-jianghu"]}
                        link={game.url}
                        players={game.players}
                        category={game.category}
                      />
                    </div>
                  ))}
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
