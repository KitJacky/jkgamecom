import { Button } from "@/components/ui/button";
import { Gamepad2, Sparkles } from "lucide-react";
import { GLSLHills } from "@/components/ui/glsl-hills";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* GLSL Hills animated background */}
      <div className="absolute inset-0">
        <GLSLHills />
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/20 to-accent/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">自 1997 年以來服務玩家</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-shimmer bg-[length:200%_auto]">
            JKGame
          </h1>
          
          <p className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            經典網頁遊戲大全
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            免下載直接玩 · 31+ 款經典遊戲 · 懷舊與創新並存
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(263_90%_65%/0.6)]"
              onClick={() => {
                const gamesSection = document.getElementById("games");
                if (gamesSection) {
                  gamesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Gamepad2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              開始遊戲
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300"
              onClick={() => {
                const gamesSection = document.getElementById("games");
                if (gamesSection) {
                  gamesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              瀏覽遊戲列表
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
              <span>JK 江湖</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
              <span>機械人大戰</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span>箱庭諸島</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
