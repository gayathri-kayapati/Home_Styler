import { v4 as uuid } from "uuid";

import lighting from "../../Images/decor/lighting.webp";
import accentFurniture from "../../Images/decor/accentFurniture.webp";
import candles from "../../Images/decor/candles.webp";
import photoFrames from "../../Images/decor/photoFrames.webp";
import planters from "../../Images/decor/planters.webp";

import cookWare from "../../Images/kichenAndDinning/cookWare.webp";
import cutlery from "../../Images/kichenAndDinning/cutlery.webp";
import dinningMeterial from "../../Images/kichenAndDinning/dinningMeterial.webp";
import lunchEssentials from "../../Images/kichenAndDinning/lunchEssentials.webp";
import serveWare from "../../Images/kichenAndDinning/serveware.webp";

import jarsAndContainers from "../../Images/storage/jarsAndContainers.webp";
import bins from "../../Images/storage/bins.webp";
import organizers from "../../Images/storage/organizers.webp";

import bedSheets from "../../Images/bedding/bedSheets.webp";
import cushions from "../../Images/bedding/cushions.webp";
import pillows from "../../Images/bedding/pillows.webp";
import throws from "../../Images/bedding/throws.webp";

import dairy from "../../Images/homeEssentials/dairy.webp";
import keyChains from "../../Images/homeEssentials/keyChains.webp";
import stationary from "../../Images/homeEssentials/stationary.webp";

import coolMistHumidifier from "../../Images/appliances/coolMistHumidifier.webp";
import garmetCare from "../../Images/appliances/garmetCare.webp";
import gasStove from "../../Images/appliances/gasStove.webp";
import juicer from "../../Images/appliances/juicer.webp";
import vacuumCleaner from "../../Images/appliances/vacuumCleaner.webp";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    image: lighting,
    title: "MFD HOME FURNISHING",
    description: "H-L - 5552-3P Glass",
    rating: "5.0",
    discountPrice: "3360",
    actualPrice: "8400",
    discountPercentage: "60",
    categoryName: "decor",
    details:
      "Black Metal & Luster Glass Quirky Design Cluster Light by MFD HOME FURNISHING",
  },
  {
    id: uuid(),
    image: cookWare,
    title: "Zyliss",
    description: "Ultimate Pro 24cm Frying Pan with Por spout",
    rating: "4.0",
    discountPrice: "8460",
    actualPrice: "9400",
    discountPercentage: "10",
    categoryName: "kichen & Dinning",
    details:
      "Zyliss best cookware yet! Zyliss 24cm frying pan feature advanced ALPINE CRYSTALS non-stick Swiss technology that delivers superior non-stick performance and healthier cooking, eliminating the need for oil or butter. With the hard anodized body, Zyliss Ultimate PRO Frying Pans are reliable, designed to withstand everyday use and safe for use with metal tools.Zyliss Swiss-engineered PFAO free non-stick coating: nothing sticks and no oil or butter needed!With a durable hard-anodized body, this professional frying pan is hard wearing and safe for use with metal tools.The stainless steel induction base is suitable for all hobs, including induction.Ergonomic, stainless steel handle for a durable and comfortable grip, and oven safe up to 230°C/450°F.Pouring spout for convenient transfer of liquids, such as fats, oils, or sauces.",
  },
  {
    id: uuid(),
    image: candles,
    title: "Novo Koyo",
    description: "God's Plan Travel Tin Candle",
    rating: "4.5",
    discountPrice: "1100",
    actualPrice: "1210",
    discountPercentage: "10",
    categoryName: "decor",
    details:
      "Novo Koyo God's Plan Travel Tin candle is a complex concoction of Sandalwood Musk & Vanilla. Soothing yet impactful, this candle is for the ones who love the sublimity of Vanilla while appreciating the depth of sandalwood. Carry it on a stay-cation or use it for a date night! Please burn the candle for 2 hours, the first time that you'd light it, for the candle to burn in the best possible way & to avoid tunelling in the jar. (L x W x H): 3.5 x 3.5 x 2.5 inches",
  },
  {
    id: uuid(),
    image: jarsAndContainers,
    title: "Bonhomie",
    description: "Pack of 3 Textured Glass Jar with Wooden Lid",
    rating: "3.2",
    discountPrice: "1575",
    actualPrice: "2863",
    discountPercentage: "45",
    categoryName: "storage",
    details:
      "Add style and class to your dining table with this glass jar with lid set (pack of 3) from Bonhomie. Made from high-quality glass, the enchanting set will be a great addition to your modern kitchen.",
  },
  {
    id: uuid(),
    image: cushions,
    title: "Rajasthan Decor",
    description:
      "Hand Block Quilted Pure Cotton Animal Printed Cushion Cover Set Of 2",
    rating: "5.0",
    discountPrice: "925",
    actualPrice: "2499",
    discountPercentage: "63",
    categoryName: "bedding",
    details:
      "Introducing 100% Cotton and certified handblock cushion cover which has been crafted by Rajasthani Artisans.210 Thread count cotton percale gives a soft feeling. Export quality quilting makes cushion more Ethnic. Check the entire festive colletiion where we bring you handblock curtain and Bedsheets",
  },
  {
    id: uuid(),
    image: cutlery,
    title: "Faaya Gifting",
    description: "Serving Spoons - Set Of 6 - Tudor Blooms",
    rating: "4.3",
    discountPrice: "5500",
    actualPrice: "6600",
    discountPercentage: "20",
    categoryName: "kichen & Dinning",
    details:
      "Transform your dinners into luxurious affairs with this serving spoon set. The perfect accessories for your formal or informal dinner parties.",
  },
  {
    id: uuid(),
    image: planters,
    title: "Ecofynd",
    description: "Zoe Gold Metal Pot (Pack Of 2)",
    rating: "3.0",
    discountPrice: "602",
    actualPrice: "1399",
    discountPercentage: "57",
    categoryName: "decor",
    details:
      "Add a vibrant aesthetic to your home with these gold pots from Ecofynd. Made from metal, they have a modern minimalistic vibe. They are suitable for plants of different type.",
  },
  {
    id: uuid(),
    image: dinningMeterial,
    title: "Saral Home",
    description:
      "Brown Dining Table Kitchen Placemats Set of 7 (6 Mat -33 x 45 Cm, 1 Runner 33 x 120 Cm)",
    rating: "3.5",
    discountPrice: "1200",
    actualPrice: "1999",
    discountPercentage: "40",
    categoryName: "kichen & Dinning",
    details:
      "Saral home premium quality polyester viscose fabric made 6 pieces place mat and 1 piece runner give your dining table a decorative look and protect your table from Water Marks, Heat, Spills, Stains and Scratches. Size of runner is 33x120 cm and Size of place mat is 33x45 cm.",
  },
  {
    id: uuid(),
    image: vacuumCleaner,
    title: "Ecovacs",
    description: "DEEBOT U2 PRO Robot Vacuum Cleaner",
    rating: "4.5",
    discountPrice: "21901",
    actualPrice: "61900",
    discountPercentage: "65",
    categoryName: "appliances",
    details:
      "Patented Jmcs Technology: Patented Jmcs Technology For Guaranteed Maximum Yield. Atleast 10 % More Juice Than Any Other Cold Press Juicerversatile Options: Kuvings B1700 Juicer Comes With Optional Accessories Like Smoothie Strainer And Sorbet Strainer. You Can Make Juice, Smoothie, Sorbet & Nut Milk. Smoothie And Ice-Cream Maker Attachment Are To Be Bought Separately As Optional Accessories.Unique Patented Cleaning Tool: Kuvings Green Cleaning Tool Helps In Cleaning The Juicer In Less Than A Minutejuice Everything: Kuvings B1700 Cold Press Juicer Is Capable Of Squeezing Any Fruit, Vegetable, Leafy Greens And Nuts (Almond, Cashew, Soy, Etc) To Prepare Delicious Nut Milk; Powerful High Torque Motor: Best-In-Class High Quality Brush-Less Ac Motor (240 Watts) So You Can Juice Even The Hardest Ingredients With Ease. 240 Watts Motor Is Powerful, Durable And Works Quietly.",
  },
  {
    id: uuid(),
    image: bedSheets,
    title: "KOPA",
    description: "Rumba Double Comforter Blue12",
    rating: "4.2",
    discountPrice: "1359",
    actualPrice: "3999",
    discountPercentage: "66",
    categoryName: "bedding",
    details:
      "Double down on coziness this season with this incredibly soft ultra light feel Rumba comforter from KOPA that ensures maximum comfort and relaxing night sleep. Made from super soft microfiber with silken filling, this comforter is highly durable. It also makes for a wonderful gifting option!",
  },
  {
    id: uuid(),
    image: keyChains,
    title: "Gemtherapy",
    description: "Keychain- Pink",
    rating: "5.0",
    discountPrice: "899",
    actualPrice: "988",
    discountPercentage: "10",
    categoryName: "home essentials",
    details:
      "A simple way to keep a healing stone close to you is to hang in a keychain. Be it on your desk drawer or car keys, it'll ensure you are receiving the vibrations all day. Agate can work wonders in bringing balance and harmony to your life. Welcome peace and balance to your house, car, office or personal life wherever you decide to use this gemstone keychain. Agate properties bring positive vibes and are irresistibly beautiful to own. It also makes for a thoughtful gift for your loved ones. Note: Each stone forms its own unique pattern over thousands of years inside the earth. No two stones look the same so what you possess belongs purely to you and you alone.Our agate product has been subtly dyed to enhance this texture, and carefully electroplated(not gold leaf or gilded, which may rub off) to highlight its beauty.",
  },
  {
    id: uuid(),
    image: throws,
    title: "House This",
    description: "Purvanchal Throw Grey",
    rating: "3.5",
    discountPrice: "2320",
    actualPrice: "2899",
    discountPercentage: "20",
    categoryName: "bedding",
    details:
      "This plush throw from House This will give you just the right balance of warm and comfy. Crafted from a unique viscose and polyester blend that’s warm yet airy, it features a deep fringed border to be extra edgy. Makes for the perfect housewarming gift.",
  },
  {
    id: uuid(),
    image: lunchEssentials,
    title: "CELLO",
    description:
      "Exe Stainless Steel Lunch Box for Office & School, 3 Containers, Blue",
    rating: "5.0",
    discountPrice: "425",
    actualPrice: "499",
    discountPercentage: "15",
    categoryName: "kichen & Dinning",
    details:
      "Eco Bite lunch from Cello stainless steel lunch boxes range will keep your food hot. It has 3 round stainless steel containers which is 100 percent leak - proof. This is ideal for office, schools and colleges. The lunch boxes are easy to clean and maintain, making them ideal for everyday use.",
  },
  {
    id: uuid(),
    image: dairy,
    title: "Happywagon",
    description: "Hummingbird Vines Hardbound Planner",
    rating: "4.0",
    discountPrice: "999",
    actualPrice: "1699",
    discountPercentage: "41",
    categoryName: "home essentials",
    details:
      "Start the new year fresh and get a few steps closer to accomplishing your goals with our 2023 planner. Inside you'll also find monthly and weekly views, colourful habit trackers, inspirational quotes, and a pocket for storing a few things. It also contains 3 sheets of stickers, including a page of gold foiled stickers for extra fun. The planner comes in a gorgeous keepsake box.",
  },
  {
    id: uuid(),
    image: coolMistHumidifier,
    title: "Oriley",
    description:
      "2111B Ultrasonic Cool Mist Humidifier for Home, Office (2.3L, Solid Pink)",
    rating: "5.0",
    discountPrice: "1967",
    actualPrice: "2429",
    discountPercentage: "19",
    categoryName: "appliances",
    details:
      "Oriley 2111B Ultrasonic Cool Mist Humidifier Manual Air Purifier for Home Office Adults and Baby Bedroom (1 Year Warranty) (2.3L, 18W, Solid Pink)",
  },
  {
    id: uuid(),
    image: serveWare,
    title: "Vigneto",
    description: "Victorian Green 3 Tier Dessert Stand",
    rating: "3.5",
    discountPrice: "2600",
    actualPrice: "3120",
    discountPercentage: "20",
    categoryName: "kichen & Dinning",
    details:
      "Enrich your dining experience with the alluring hues of greens, embossed with pink blossoms and accentuated with gold details. The victorian dessert stand, an ode to nature is a symbol of utmost grace and sophistication. Display delicious brownies, pastries and muffins or mouth-watering barfi and gajjak in our unique floral shaped tableware range!",
  },
  {
    id: uuid(),
    image: garmetCare,
    title: "Philips",
    description: "GC104 01 1100 W Dry Iron",
    rating: "4.3",
    discountPrice: "1169",
    actualPrice: "1259",
    discountPercentage: "7",
    categoryName: "appliances",
    details:
      "Fast and Powerful Crease Removal, Easy Gliding on all Fabrics, Pointed Tip for Ironing Tricky Areas, Comfortable Ironing",
  },
  {
    id: uuid(),
    image: organizers,
    title: "Artsy Design Co.",
    description: "Terracotta Jewellery Organiser Small - Stoneware Concrete",
    rating: "3.8",
    discountPrice: "1400",
    actualPrice: "2100",
    discountPercentage: "50",
    categoryName: "storage",
    details:
      "Lift your jewellery storage to lunar heights with the moon and ring holder trinket set from Artsy Design Co.. Featuring a crescent moon sitting on top a trinket dish embellished with a hand painted gold foil details. The ring or earring cone holder can hold a few rings at a time and can be used as an accent piece.",
  },
  {
    id: uuid(),
    image: photoFrames,
    title: "eCraftIndia",
    description: "Memory Wall Collage Photo Frame - Set of 10 Photo Frames",
    rating: "5.0",
    discountPrice: "1800",
    actualPrice: "3999",
    discountPercentage: "55",
    categoryName: "decor",
    details:
      "Keep your memories alive, choose your favourites and make a designer collage for your walls with these elegant and premium individual photo frames of different sizes from eCraftIndia. It is a perfect decor piece to break the monotony of your walls. These photo frames with their subtle grace are made from high-quality synthetic wood that is light in weight. Whether you want to glorify your wall, gift it to someone special, or use it for corporate gifting, the end-user can make a lot of combinations using these photo frames. This orientation has 10 black photo frames. Frame size is 0.75 inch. This collage photo frame set has 3 frames for picture size 4 inch x 4 inch, 4 frames for picture size 5 inch x 5 inch, 1 frame for picture size 5 inch x 7 inch, 2 frames for picture size 6 inch x 4 inch. Note- rectangle frames for picture size 8 inch x 10 inch, 5 inch x 7 inch and 6 inch x 4 inch can be used in both directions i.e. horizontally and vertically.",
  },
  {
    id: uuid(),
    image: stationary,
    title: "WAABI-SAABI",
    description: "Kitchen Shears Multi-Purpose Scissors FUSO",
    rating: "4.6",
    discountPrice: "654",
    actualPrice: "688",
    discountPercentage: "5",
    categoryName: "home essentials",
    details:
      "Get snipping with these grey scissors from Waabi Saabi. Made with the finest quality material, it has a sturdy design that helps you to cut through things with ease and accuracy.",
  },
  {
    id: uuid(),
    image: juicer,
    title: "Kuvings",
    description: "B1700 Cold Press Juicer (Red)",
    rating: "5.0",
    discountPrice: "21903",
    actualPrice: "35900",
    discountPercentage: "39",
    categoryName: "kichen & Dinning",
    details:
      " 1.The Exceptional Truedetect 3D Technology: Truedetect3D Object Avoidance Technology Is Based On 3D Structured Light Technology. 2.Truemapping System: Truemapping Laser-Based Mapping And Navigation Technology, An Aerospace-Standard Detection Technology First Adopted For This Function In The Industry By Ecovacs, Floor Maps Can Be Created In Seconds To Improve Overall Cleaning Efficiency. 3. Multi-Floor Mapping: Deebot Can Now Save Up To 3 Different Maps Perfect For Multi-Level Homes And Multiple Cleaning Spaces. When Deebot Starts To Clean, It Will Automatically Recognize The Saved Area It Is Going To Clean. Up To 180 Minute Runtime A Longer Battery Life ",
  },
  {
    id: uuid(),
    image: pillows,
    title: "The Home Story",
    description: "Cushion Fillers 12 x 12 Inches - Pack of 3",
    rating: "4.8",
    discountPrice: "657",
    actualPrice: "1095",
    discountPercentage: "40",
    categoryName: "bedding",
    details:
      "If you are looking to add an interesting element to your seating area, then owning one of these cushion made with Reliance Conjugated Fiber is a must. Made of superior quality material, these cushions are easy to wash and maintain. The Cushion Fillers are soft, heavily puffed and are made of superior quality fabric. Each cushion is in a vacuum sealed bag to allow easy shipping. Note: packing is vacuumed pack and cut the poly bag and shake the product for 3 minutes and also mention to wait till 24 hours to see its actual shape. (L x W): 12x12 Inches",
  },
  {
    id: uuid(),
    image: gasStove,
    title: "Wonderchef",
    description:
      "Ruby 4 Burner Manual Ignition Glass Cooktop, Black Toughened Glass",
    rating: "3.4",
    discountPrice: "4299",
    actualPrice: "10000",
    discountPercentage: "57",
    categoryName: "kichen & Dinning",
    details:
      "Individual pan supports cook for the entire family with ease. Highefficiency 4 brass burners offers fuel saving efficiency, uniform heating and faster cooking. High quality thick toughened black glass top convenient to clean and maintain. Compact design and manual ignition. Cast aluminium mixing tube does not rust, offers unobstructed LPG flow with smooth functioning.Material: Brass Burners, Toughened Glass, Stainless Steel Ring",
  },
  {
    id: uuid(),
    image: bins,
    title: "Mason Home",
    description: "Braided Dustbin Brown",
    rating: "5.0",
    discountPrice: "2695",
    actualPrice: "3750",
    discountPercentage: "28",
    categoryName: "storage",
    details:
      "The Braided dustbin are sized perfectly for smaller spaces, but still have plenty of room for your recyclables and garbage. Made of high quality durable materials, this can will hold up to everyday use. The modern design combined with the beautiful finish makes it the perfect complement to any home.",
  },
  {
    id: uuid(),
    image: accentFurniture,
    title: "The Decor Remedy",
    description: "Adam Nesting Table (Set of 2)",
    rating: "4.2",
    discountPrice: "11990",
    actualPrice: "16000",
    discountPercentage: "25",
    categoryName: "decor",
    details:
      "The set of our adam marble nesting table is perfect for the neglected corners or as side tables, you can keep them nested in one another if there is a space crunch or just use them separately, they look absolutely beautiful.",
  },
];
