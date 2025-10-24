import { useState, useEffect } from "react";
import { Gamepad2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-[0_8px_32px_hsl(0_0%_0%/0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <Gamepad2 className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 hover:scale-105 transform">
              JKGame
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("games")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              遊戲列表
            </button>
            <a
              href="http://discuss.la"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              討論區
            </a>
            <a
              href="http://dos.jkgame.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              DOS 遊戲
            </a>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(263_70%_50%/0.5)] transform"
              onClick={() => scrollToSection("games")}
            >
              開始遊戲
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("games")}
                className="text-left text-foreground/80 hover:text-primary transition-all duration-300 py-2 hover:translate-x-2 transform"
              >
                遊戲列表
              </button>
              <a
                href="http://discuss.la"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-all duration-300 py-2 hover:translate-x-2 transform"
              >
                討論區
              </a>
              <a
                href="http://dos.jkgame.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-all duration-300 py-2 hover:translate-x-2 transform"
              >
                DOS 遊戲
              </a>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full transition-all duration-300 hover:scale-105 transform"
                onClick={() => scrollToSection("games")}
              >
                開始遊戲
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
