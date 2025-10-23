import { Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
              JKGame.com
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              自 1997 年以來為玩家提供經典網頁遊戲服務
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/groups/74937612206/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">快速連結</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="http://jky.jkgame.com" className="hover:text-primary transition-colors">
                  JK 江湖
                </a>
              </li>
              <li>
                <a href="http://dos.jkgame.com" className="hover:text-primary transition-colors">
                  DOS 遊戲
                </a>
              </li>
              <li>
                <a href="/msvs" className="hover:text-primary transition-colors">
                  機械人大戰
                </a>
              </li>
              <li>
                <a href="http://discuss.la" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  討論區
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">資源</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/iron/" target="_blank" className="hover:text-primary transition-colors">
                  金庸－鐵心網備份
                </a>
              </li>
              <li>
                <a href="http://jk.hk" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  JK SITE
                </a>
              </li>
              <li>
                <a href="http://jknet.hk" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Web Hosting Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 1997 - 2025 JKGame.com @ <a href="https://jackykit.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">JackyKit</a>. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              共 31+ 款經典遊戲
            </p>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};
