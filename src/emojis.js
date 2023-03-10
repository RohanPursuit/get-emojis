const emojis = [
  {
    symbol: "๐ฝ",
    letter: "a",
    name: "alien",
    category: "faces",
  },
  {
    symbol: "๐ถ",
    letter: "b",
    name: "baby",
    category: "faces",
  },
  {
    symbol: "๐ต",
    letter: "c",
    name: "cactus",
    category: "plant",
  },
  {
    symbol: "๐ฉ",
    letter: "d",
    name: "doughnut",
    category: "food",
  },
  {
    symbol: "๐",
    letter: "e",
    name: "elephant",
    category: "animals",
  },
  {
    symbol: "๐",
    letter: "f",
    name: "fries",
    category: "food",
  },
  {
    symbol: "๐ป",
    letter: "g",
    name: "ghost",
    category: "faces",
  },
  {
    symbol: "๐",
    letter: "h",
    name: "heart",
    category: "",
  },
  {
    symbol: "๐ฆ",
    letter: "i",
    name: "ice-cream",
    category: "food",
  },
  {
    symbol: "๐คน",
    letter: "j",
    name: "juggler",
    category: "faces",
  },
  {
    symbol: "๐ฅ",
    letter: "k",
    name: "kiwi",
    category: "food",
  },
  {
    symbol: "๐",
    letter: "l",
    name: "ladybug",
    category: "animals",
  },
  {
    symbol: "๐",
    letter: "m",
    name: "mushroom",
    category: "",
  },
  {
    symbol: "๐ฐ",
    letter: "n",
    name: "news",
    category: "",
  },
  {
    symbol: "๐",
    letter: "o",
    name: "octopus",
    category: "animals",
  },
  {
    symbol: "๐ฉ",
    letter: "p",
    name: "poop",
    category: "faces",
  },
  {
    symbol: "โ",
    letter: "q",
    name: "question",
    category: "",
  },
  {
    symbol: "๐ค",
    letter: "r",
    name: "robot",
    category: "faces",
  },
  {
    symbol: "๐",
    letter: "s",
    name: "die",
    category: "faces",
  },
  {
    symbol: "๐",
    letter: "t",
    name: "tongue",
    category: "",
  },
  {
    symbol: "๐ฆ",
    letter: "u",
    name: "unicorn",
    category: "animals",
  },
  {
    symbol: "๐",
    letter: "v",
    name: "volcano",
    category: "",
  },
  {
    symbol: "๐",
    letter: "w",
    name: "whale",
    category: "animals",
  },
  {
    symbol: "โ",
    letter: "x",
    name: "exclamation",
    category: "",
  },
  {
    symbol: "โฏ",
    letter: "y",
    name: "yinyang",
    category: "",
  },
  {
    symbol: "๐ค",
    letter: "z",
    name: "zipper",
    category: "faces",
  },
  {
    symbol: "๐",
    name: "grin",
    category: "faces",
  },
  {
    symbol: "๐",
    name: "sunglasses",
    category: "faces",
  },
  {
    symbol: "๐",
    name: "laugh",
    category: "faces",
  },
  {
    symbol: "๐?",
    name: "mad",
    category: "faces",
  },
  {
    symbol: "๐ญ",
    name: "cry",
    category: "faces",
  },
  {
    symbol: "๐",
    name: "silly",
    category: "faces",
  },
  {
    symbol: "๐ฑ",
    name: "whoops",
    category: "faces",
  },
  {
    symbol: "๐ป",
    name: "code",
    category: "devices",
  },
  {
    symbol: "โ",
    name: "check",
    category: "",
  },
  {
    symbol: "๐",
    name: "hands",
    category: "",
  },
  {
    symbol: "๐",
    name: "heartbreak",
    category: "",
  },
  {
    symbol: "๐",
    name: "dog",
    category: "animals",
  },
  {
    symbol: "๐",
    name: "burger",
    category: "food",
  },
  {
    symbol: "๐น",
    name: "cocktail",
    category: "drinks",
  },
  {
    symbol: "๐",
    name: "pizza",
    category: "food",
  },
  {
    symbol: "๐ฏ",
    name: "burrito",
    category: "food",
  },
  {
    symbol: "๐ฎ",
    name: "taco",
    category: "food",
  },
  {
    symbol: "๐",
    name: "grapes",
    category: "food",
  },
  {
    symbol: "๐",
    name: "strawberry",
    category: "food",
  },
  {
    symbol: "๐",
    name: "pineapple",
    category: "food",
  },
  {
    symbol: "๐",
    name: "watermelon",
    category: "food",
  },
  {
    symbol: "๐",
    name: "banana",
    category: "food",
  },
  {
    symbol: "๐ฃ",
    name: "sushi",
    category: "food",
  },
  {
    symbol: "๐ฟ",
    name: "popcorn",
    category: "food",
  },
  {
    symbol: "๐ฑ",
    name: "bento",
    category: "food",
  },
  {
    symbol: "๐ฐ",
    name: "cake",
    category: "food",
  },
  {
    symbol: "๐บ",
    name: "beer",
    category: "drinks",
  },
  {
    symbol: "๐ท",
    name: "wine",
    category: "drinks",
  },
  {
    symbol: "๐",
    name: "meat",
    category: "food",
  },
  {
    symbol: "๐ซ",
    name: "chocolate",
    category: "food",
  },
  {
    symbol: "๐ผ",
    name: "bottle",
    category: "drinks",
  },
  {
    symbol: "๐พ",
    name: "champagne",
    category: "drinks",
  },
  {
    symbol: "๐ธ",
    name: "martini",
    category: "drinks",
  },
  {
    symbol: "๐ฝ",
    name: "dinner",
    category: "",
  },
  {
    symbol: "๐",
    name: "car",
    category: "vehicles",
  },
  {
    symbol: "๐",
    name: "train",
    category: "vehicles",
  },
  {
    symbol: "๐ซ",
    name: "plane",
    category: "vehicles",
  },
  {
    symbol: "๐",
    name: "earth",
    category: "",
  },
  {
    symbol: "โต",
    name: "boat",
    category: "vehicles",
  },
  {
    symbol: "๐ง",
    name: "rain",
    category: "weather",
  },
  {
    symbol: "๐จ",
    name: "snow",
    category: "weather",
  },
  {
    symbol: "๐ฉ",
    name: "thunderstorm",
    category: "weather",
  },
  {
    symbol: "๐",
    name: "sun",
    category: "weather",
  },
  {
    symbol: "๐ช",
    name: "tornado",
    category: "weather",
  },
  {
    symbol: "๐ฅ",
    name: "fire",
    category: "",
  },
  {
    symbol: "๐",
    name: "halloween",
    category: "holidays",
  },
  {
    symbol: "๐",
    name: "christmas",
    category: "holidays",
  },
  {
    symbol: "๐บ",
    name: "tv",
    category: "devices",
  },
  {
    symbol: "๐ถ",
    name: "music",
    category: "entertainment",
  },
  {
    symbol: "๐ฌ",
    name: "movie",
    category: "entertainment",
  },
  {
    symbol: "๐",
    name: "motorcycle",
    category: "transportation",
  },
  {
    symbol: "๐",
    name: "birthday",
    category: "holiday",
  },
  {
    symbol: "๐",
    name: "book",
    category: "entertainment",
  },
  {
    symbol: "๐",
    name: "notebook",
    category: "",
  },
  {
    symbol: "๐",
    name: "key",
    category: "devices",
  },
  {
    symbol: "๐?",
    name: "fix",
    category: "devices",
  },
  {
    symbol: "๐ฑ",
    name: "phone",
    category: "devices",
  },
  {
    symbol: "๐",
    name: "call",
    category: "devices",
  },
];

module.exports = emojis;
