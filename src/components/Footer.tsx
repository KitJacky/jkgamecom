import { Facebook, Gamepad2 } from "lucide-react";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";

export const Footer = () => {
  const footerLinks = [
    {
      title: "熱門遊戲",
      links: [
        { label: "JK 江湖", href: "http://jky.jkgame.com" },
        { label: "DOS 遊戲", href: "http://dos.jkgame.com" },
        { label: "機械人大戰", href: "/msvs" },
        { label: "三國演義", href: "#sangoku" },
      ],
    },
    {
      title: "快速連結",
      links: [
        { label: "討論區", href: "http://discuss.la", external: true },
        { label: "JK SITE", href: "http://jk.hk", external: true },
        { label: "Web Hosting", href: "http://jknet.hk", external: true },
      ],
    },
    {
      title: "資源",
      links: [
        { label: "金庸－鐵心網備份", href: "/iron/", external: true },
        { label: "遊戲總覽", href: "#games" },
      ],
    },
  ];

  const socialLinks = [
    { 
      icon: <Facebook size={20} />, 
      label: "Facebook", 
      href: "https://www.facebook.com/groups/74937612206/" 
    },
  ];

  return (
    <footer className="bg-background/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="text-foreground text-3xl font-bold font-orbitron">JKGame</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              自 1997 年以來為玩家提供經典網頁遊戲服務
            </p>
            <p className="text-sm text-primary/80">
              共 31+ 款經典遊戲
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground text-lg font-semibold mb-6 font-orbitron">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block transform"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-t border-border/50 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/50 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:shadow-[0_0_20px_hsl(263_70%_50%/0.5)] transform text-primary"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-muted-foreground">
            © 1997 - 2025 JKGame.com @ <a href="https://jackykit.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">JackyKit</a>. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="JKGame" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};
