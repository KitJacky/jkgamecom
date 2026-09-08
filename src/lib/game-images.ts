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

export const imageMap: Record<string, string> = {
  "jk-jianghu": jkJianghuImg,
  "mecha-battle": mechaBattleImg,
  "dos-games": dosGamesImg,
  hakoniwa: hakoniwaImg,
  "ebs-battle": ebsBattleImg,
  petpk: petpkImg,
  town: townImg,
  ffa: ffaImg,
  "ff-battle": ffaImg,
  trade: tradeImg,
  roses: mechaBattleImg,
  hero: ffaImg,
  sangoku: sangokuImg,
  ore: jkJianghuImg,
  sf2: ffaImg,
  sea: seaImg,
  br: brImg,
  ogame: ogameImg,
  epet: petpkImg,
  wor: jkJianghuImg,
};

export const getGameImage = (key: string) => imageMap[key] || imageMap["jk-jianghu"];
