from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "external images"
DEST = ROOT / "public" / "images"
DEST.mkdir(parents=True, exist_ok=True)

MAPPING = {
    "mali-river-hero.webp": "aa5abudock2p1nm2qysof8bcjtbt4dg9d05a3fjihcmnha5lwkcxnqtbuubzlikld88ge5ih7ykngcdtasmerycdog.jpg",
    "djibril-kassogue-portrait.webp": "Djibril Portrait Chat 2.png",
    "djibril-with-traveller.webp": "aa5abucu6elvfv22lbpbbvafbixrvsatupi1z-2-wdsixzkah95wxolt1ljxhindoy-a0lnbefoveozmfadraptut5.jpg",
    "bamako-city-culture.webp": "aa5abud31i4phsjs5cnrwc9wcsgnutpolcibm1zdrq9rw0z1junyfzh75xg-xlcsokpegnttnst-sknbvycb9qbnzw.jpg",
    "djenne-mud-mosque.webp": "aa5abubqzoogklcbowjtt207ve67-muawrozlp58w2gvxpispp2woaluwum1ml5cvczvytp2flkq39a8uuqzuwaqzp.jpg",
    "mopti-river-life.webp": "aa5abudn12pikjkxf81xxv-sjiyvhresame8djql6njp25bbyazfqj-w39xb4ued3tncqqig2bxtfzedpvtuq-cj6h.jpg",
    "dogon-country-landscape.webp": "aa5abuaq8dgoo3pwsdpquwfalrl7stz4gpc-wr6-dzamsozdsa57xdfiyorizfwscqfocgnm1zva7vynkbm4gve7dp.jpg",
    "desert-route.webp": "aa5abudhrbqa4fvquitxqji-1vtnd7pil819poqx5njfndoylkj7myqroks-zgjvta-4nbcyypgrsdqugy5ekd3dz8.jpg",
    "west-africa-route.webp": "aa5abuc-y4an-6orlfrqihb3fkdsxthqsczc1zorced3tvpv-miousohhpnkvymmllso2nymsw-4ca8vit-uwilct1.jpg",
    "malian-textile-bogolan.webp": "aa5abubzfebiro4eqvha1hkblgmdoroogkpsmaqdny8fov2ax-ajuqx6dkyqfey5jvenp7nk9slems18tcx6-t-f19.jpg",
    "community-children.webp": "aa5abudy-hndclokip-ggtujgho-wy1vfniqn9bdqmppsn0kvy2f1ktcyeqedvpbamwmuy53hnvpzt3kf70vmhathe.jpg",
    "gallery-01.webp": "aa5abuddogg-gk4mfskzjhjx08j70nikre8mc7drdmgb04j0-tif34rmh-mo46wqsxbupusgpmjahdftkvehwrun-w.jpg",
    "gallery-02.webp": "aa5abucu6elvfv22lbpbbvafbixrvsatupi1z-2-wdsixzkah95wxolt1ljxhindoy-a0lnbefoveozmfadraptut5.jpg",
    "gallery-03.webp": "aa5abudock2p1nm2qysof8bcjtbt4dg9d05a3fjihcmnha5lwkcxnqtbuubzlikld88ge5ih7ykngcdtasmerycdog.jpg",
    "gallery-04.webp": "aa5abudoncuoup3gbg5-msz3ybanw9uy7qjlwrk97men-qic3i8aqiapl9qw5xcq7p-e3wnrohsrlauhss2xzdelew.jpg",
    "gallery-05.webp": "aa5abuca1u9tjrnaycm8u8eicsdmxlpml96z6aknqfqfeeyi0iyn6kukrzqkkpa4yc-miqeq-clfdmng64ahuvrg1d.jpg",
    "gallery-06.webp": "aa5abuagfcnv0ux5piyi1kbsrhy8lboi8b7h3pnv4ksrlej1ytepq-yksmtxpu8ljmrcv00xtru-k6qvttve-gwyun.jpg",
    "gallery-07.webp": "aa5abubodnmcv4ngnj2-kft070khx68c6t0j25disvy-rhak0lrj8qdngv8qgp5bbpleu2oursfemxk7bd5yngkrse.jpg",
    "gallery-08.webp": "aa5abubqzoogklcbowjtt207ve67-muawrozlp58w2gvxpispp2woaluwum1ml5cvczvytp2flkq39a8uuqzuwaqzp.jpg",
    "gallery-09.webp": "aa5abucg85grfk4mpbfnrnfrezql2nlpzb8bmkpu2ysa8l4u8ok16dqpvqr4ys2sjwqmp8law8merirq7jynagwsuh.jpg",
    "gallery-10.webp": "aa5abubaakcb423vsy3vtv7gzyjauv3ow3r6ggk8iiwm4-e5rvapimspmevo-2zhnmltwkyg4txoiebtuwmpjit5di.jpg",
    "gallery-11.webp": "aa5abubnslq96eons85eixuttuvweddz8c5tqo8gglurbkd9qyydmkmdgwgvw7ix4odv10nkmwn-xevr-raushvvfj.jpg",
    "gallery-12.webp": "aa5abucvn-vugxhuryaylo2tsi5qiya4w285bqmqaad1orzsyed8nryuozrziz7c1eyd-6rhe8qcl9yk-2xns-bkfv.jpg",
}

def fit_size(width, height, max_side=1600):
    scale = min(max_side / max(width, height), 1)
    return int(width * scale), int(height * scale)

missing = []
for output_name, input_name in MAPPING.items():
    source = SOURCE / input_name
    if not source.exists():
        missing.append(input_name)
        continue
    with Image.open(source) as image:
        image = image.convert("RGB")
        image.thumbnail(fit_size(*image.size), Image.Resampling.LANCZOS)
        image.save(DEST / output_name, "WEBP", quality=82, method=6)

if missing:
    raise SystemExit("Missing source images:\n" + "\n".join(missing))

print(f"Prepared {len(MAPPING)} images in {DEST}")
