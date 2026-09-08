import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, Users, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGameById, getRelatedGames, SITE_URL, gameDetailPath } from "@/lib/games";
import { getGameImage } from "@/lib/game-images";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";

const GameDetail = () => {
  const { id } = useParams();
  const game = getGameById(id);

  if (!game) return <NotFound />;

  const image = getGameImage(game.image);
  const canonical = `${SITE_URL}${gameDetailPath(game.id)}`;
  const absoluteImage = image.startsWith("http")
    ? image
    : `${typeof window !== "undefined" ? window.location.origin : SITE_URL}${image}`;
  const title = `${game.title} - 免下載直接玩 | JKGame.com 經典網頁遊戲`.slice(0, 70);
  const description = `${game.title}（${game.category}・${game.players}）— ${game.description}`.slice(0, 155);
  const playUrl = game.url.startsWith("http") ? game.url : `${SITE_URL}${game.url}`;
  const related = getRelatedGames(game);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    image: absoluteImage,
    url: canonical,
    genre: game.category,
    playMode: game.players,
    gamePlatform: "Web Browser",
    applicationCategory: "GameApplication",
    publisher: { "@type": "Organization", name: "JKGame.com", url: SITE_URL },
    offers: { "@type": "Offer", price: "0", priceCurrency: "HKD" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "遊戲大全", item: `${SITE_URL}/#games` },
      { "@type": "ListItem", position: 3, name: game.title, item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${game.title},${game.category},網頁遊戲,web game,JKGame,免下載遊戲`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${game.title} | JKGame.com`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={absoluteImage} />
        <meta property="og:site_name" content="JKGame.com" />
        <meta property="og:locale" content="zh_HK" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${game.title} | JKGame.com`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            返回遊戲大全
          </Link>

          <article className="bento-tile overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={image}
                alt={`${game.title} 遊戲畫面`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
                <span className="px-2.5 py-1 self-start rounded-md text-[10px] font-bold uppercase tracking-widest bg-background/70 border border-secondary/30 text-secondary">
                  {game.category}
                </span>
                <h1 className="font-display text-3xl md:text-5xl text-foreground mt-3">{game.title}</h1>
                <p className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
                  <Users className="w-4 h-4" />
                  {game.players}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-10 space-y-6">
              <h2 className="font-display text-xl text-foreground">遊戲介紹</h2>
              <p className="text-muted-foreground leading-relaxed">{game.description}</p>
              <p className="text-muted-foreground leading-relaxed">
                {game.title} 是 JKGame.com 自 1997 年起收錄的經典網頁遊戲之一，無需下載、無需安裝，
                打開瀏覽器即可直接遊玩。
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" asChild>
                  <a href={playUrl} target="_blank" rel="noopener noreferrer">
                    <Gamepad2 className="w-4 h-4 mr-2" />
                    開始遊戲
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="http://discuss.la" target="_blank" rel="noopener noreferrer">
                    討論區
                  </a>
                </Button>
              </div>
            </div>
          </article>

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="font-display text-2xl text-foreground mb-5">其他經典遊戲</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map((g) => (
                  <Link
                    key={g.id}
                    to={gameDetailPath(g.id)}
                    className="bento-tile p-4 flex flex-col gap-2 group"
                  >
                    <img
                      src={getGameImage(g.image)}
                      alt={`${g.title} 縮圖`}
                      loading="lazy"
                      className="w-full h-24 object-cover rounded-xl"
                    />
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {g.title}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {g.category}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GameDetail;
