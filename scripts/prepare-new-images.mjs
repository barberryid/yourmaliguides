// Optimizes the June 2026 batch of real trip photos into public/images.
// Python/PIL is not installed on this machine, so this batch uses sharp
// (bundled with Astro) instead of scripts/prepare-images.py. Same output:
// max 1600px on the long edge, WebP quality 82.
import sharp from "sharp";
import { mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(ROOT, "external images", "new images");
const DEST = path.join(ROOT, "public", "images");
mkdirSync(DEST, { recursive: true });

// gallery-NN.webp -> source filename
const MAPPING = {
  "gallery-13.webp": "726516134_27340955535557942_230617812202126774_n.jpg",
  "gallery-14.webp": "727715136_27340935132226649_3615013516730879037_n.jpg",
  "gallery-15.webp": "728195662_27340927712227391_1087097669690850372_n.jpg",
  "gallery-16.webp": "728195762_27340941042226058_1407837557754065855_n.jpg",
  "gallery-17.webp": "728950841_27340929425560553_7613029838720997396_n.jpg",
  "gallery-18.webp": "729068748_27340932055560290_2950764603796021109_n.jpg",
  "gallery-19.webp": "729148417_27340936365559859_2561053481991637697_n.jpg",
  "gallery-20.webp": "729204861_27340941488892680_4797768647502749752_n.jpg",
  "gallery-21.webp": "729259672_27340937818893047_3875509705314129291_n.jpg",
  "gallery-22.webp": "729437574_27340956052224557_2478984842184902532_n.jpg",
  "gallery-23.webp": "729517739_27340944412225721_6365653790950531154_n.jpg",
  "gallery-24.webp": "729828740_27340933388893490_7712706351149863937_n.jpg",
  "gallery-25.webp": "729939624_27340955708891258_2511637422285659385_n.jpg",
  "gallery-26.webp": "729973539_27340927658894063_419318106070018231_n.jpg",
  "gallery-27.webp": "729988330_27340938415559654_6766360278917538737_n.jpg",
  "gallery-28.webp": "730109320_27340949475558548_5165731556246379516_n.jpg",
  "gallery-29.webp": "730331511_27340949978891831_1237745250127629263_n.jpg",
  "gallery-30.webp": "730348271_27340929388893890_687363407939045140_n.jpg",
  "gallery-31.webp": "731525378_27340944038892425_3172385226356732789_n.jpg",
};

for (const [output, input] of Object.entries(MAPPING)) {
  await sharp(path.join(SOURCE, input))
    .rotate() // respect EXIF orientation
    .resize(1600, 1600, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(path.join(DEST, output));
  console.log("wrote", output);
}

console.log(`Prepared ${Object.keys(MAPPING).length} images in ${DEST}`);
