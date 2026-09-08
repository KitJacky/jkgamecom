import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight, Sparkles } from "lucide-react";
import { GLSLHills } from "@/components/ui/glsl-hills";

const scrollToGames = () => {
  document.getElementById("games")?.scrollIntoView({ behavior: "smooth" });
};

const quickTags = [
  { label: "JK 江湖", href: "http://jky.jkgame.com" },
  { label: "機械人大戰", href: "/msvs" },
  { label: "箱庭諸島", href: "/hako6/" },
  { label: "DOS 遊戲", href: "http://dos.jkgame.com" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Animated background */}
      <div className="absolute inset-0">
        <GLSLHills />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[130px] animate-fade-in-up">
          {/* Hero tile */}
          <div className="md:col-span-3 md:row-span-2 relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface-elevated/90 to-background/90 backdrop-blur-md p-8 md:p-10 flex flex-col justify-end">
            <div className="absolute top-0 right-4 opacity-[0.08] pointer-events-none select-none">
              <span className="font-display text-[7rem] md:text-[10rem] leading-none tracking-tighter text-foreground">
                1997
              </span>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary bg-secondary/10 border border-secondary/20">
                <Sparkles className="w-3 h-3" />
                Established 1997
              </span>

              <h1 className="font-display text-5xl md:text-7xl leading-none text-foreground mb-4">
                JK<span className="text-primary">GAME</span>.COM
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-6">
                重溫經典，31+ 款懷舊網頁遊戲集結地。免下載直接玩，穿越時空的數位遊樂場。
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={scrollToGames}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-7 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(263_90%_65%/0.6)]"
                >
                  <Gamepad2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  開始遊戲
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToGames}
                  className="rounded-xl px-7 border-border/70 bg-background/40 hover:bg-primary/10 hover:border-primary/60 text-foreground"
                >
                  瀏覽遊戲列表
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
          </div>

          {/* Count tile */}
          <div className="bento-tile p-6 flex flex-col items-center justify-center text-center group cursor-default">
            <span className="font-display text-4xl text-accent">31+</span>
            <span className="mt-2 text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
              懷舊經典
            </span>
          </div>

          {/* Quick tags tile */}
          <div className="bento-tile p-4 flex flex-wrap gap-2 items-center justify-center">
            {quickTags.map((tag, i) => (
              <a
                key={tag.label}
                href={tag.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  i === 0
                    ? "bg-primary text-primary-foreground shadow-[0_0_18px_hsl(263_70%_50%/0.4)]"
                    : "bg-foreground/5 text-muted-foreground border border-border/70 hover:border-secondary/60 hover:text-secondary"
                }`}
              >
                {tag.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
