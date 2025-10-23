import { GameCard } from "./GameCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import jkJianghuImg from "@/assets/jk-jianghu.jpg";
import mechaBattleImg from "@/assets/mecha-battle.jpg";
import dosGamesImg from "@/assets/dos-games.jpg";
import hakoniwaImg from "@/assets/hakoniwa.jpg";
import ebsBattleImg from "@/assets/ebs-battle.jpg";

const games = {
  featured: [
    {
      title: "JK 江湖",
      description: "2001年出品的網絡江湖，香港首個推出的江湖遊戲。2015年已重新修復無限任玩。",
      image: jkJianghuImg,
      link: "http://jky.jkgame.com",
      players: "線上多人",
      category: "RPG"
    },
    {
      title: "機械人大戰 MSVS",
      description: "日本制作的經典遊戲，2004年改為中文版，繼續服務所有希望重溫的玩家。",
      image: mechaBattleImg,
      link: "/msvs",
      players: "策略對戰",
      category: "策略"
    },
    {
      title: "1900 款 DOS 遊戲",
      description: "經典 DOS 遊戲大集合，重溫童年回憶。",
      image: dosGamesImg,
      link: "http://dos.jkgame.com",
      players: "單人遊戲",
      category: "復古"
    }
  ],
  hako: [
    {
      title: "箱庭諸島 海戰",
      description: "箱庭諸島海戰版本，加入海戰元素的島嶼建設遊戲。",
      image: hakoniwaImg,
      link: "/hako6/",
      category: "模擬經營"
    },
    {
      title: "究想箱庭諸島",
      description: "箱庭諸島究想版，更豐富的遊戲內容。",
      image: hakoniwaImg,
      link: "/hako5/",
      category: "模擬經營"
    },
    {
      title: "箱庭諸島 PHP",
      description: "PHP 版本的箱庭諸島，穩定流暢。",
      image: hakoniwaImg,
      link: "/hako_php/",
      category: "模擬經營"
    }
  ],
  ebs: [
    {
      title: "無盡的戰鬥 php-eb 終極版",
      description: "原名 - 無盡的戰爭，JKGAME 更改遊戲程式更名為 - 機械人大戰。",
      image: ebsBattleImg,
      link: "/php-eb/",
      category: "策略"
    },
    {
      title: "機械人大戰 第2代",
      description: "機械人大戰系列第二代作品。",
      image: ebsBattleImg,
      link: "/ebsII/",
      category: "策略"
    },
    {
      title: "機械人大戰 Plus",
      description: "機械人大戰加強版本。",
      image: ebsBattleImg,
      link: "/ebsplus/",
      category: "策略"
    }
  ]
};

export const GamesSection = () => {
  return (
    <section id="games" className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            熱門遊戲
          </h2>
          <p className="text-muted-foreground text-lg">
            探索我們的經典遊戲收藏
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="featured">精選</TabsTrigger>
            <TabsTrigger value="hako">箱庭系列</TabsTrigger>
            <TabsTrigger value="ebs">EBS系列</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.featured.map((game, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <GameCard {...game} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hako" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.hako.map((game, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <GameCard {...game} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ebs" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.ebs.map((game, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <GameCard {...game} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 text-foreground"
          >
            查看所有遊戲 (31+)
          </Button>
        </div>
      </div>
    </section>
  );
};
