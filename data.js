export const LANGUAGES = [
  { title: "English", value: "en" },
  { title: "Bahasa Indonesia", value: "id" },
  // { title: "Bahasa Melayu", value: "ms" },
  { title: "Esperanto", value: "eo" },
  // { title: "Tiếng Việt", value: "vi" },
  { title: "日本語", value: "ja" },
  // { title: "한국어", value: "ko" },
  // { title: "简体中文", value: "zh-hans" },
  // { title: "繁體中文（台灣）", value: "zh-hant" },
  // { title: "繁體中文（香港）", value: "yue" },
  // { title: "ภาษาไทย", value: "th" },
  // { title: "தமிழ்", value: "ta" },
  // { title: "العربية", value: "ar" },
  // { title: "فارسی", value: "fa" },
  // { title: "اردو", value: "ur" },
  // { title: "ئۇيغۇرچە", value: "ug" },
  // { title: "עברית", value: "he" },
  // { title: "יידיש", value: "yi" },
];

export const SKILLS = {
  frontEndSkills: [
    "HTML 5",
    "CSS 3",
    "Bootstrap",
    "JavaScript ES6",
    "TypeScript",
    "React",
    "NextJS",
    "Vue.js",
  ],
  backEndSkills: ["JavaScript ES6", "Node.js", "Express.js", "EJS", "REST API", "OAuth 2.0"],
  databaseSkills: ["PostgreSQL", "MySQL 8.0", "MongoDB", "Mongoose"],
  otherSkills: ["LaTeX 2ε", "Unity", "C#"],
};

// * format date: yyyy-mm-dd || yyyy/mm/dd || yyyy-m-d || yyyy/m/d
// * format time: hh:mm || h:mm
export const PORTFOLIOS = [
  {
    id: "realtime-calendar",
    link: "https://react-realtime-calendar.web.app/",
    sourceCode: "https://github.com/ahmadfauzan96/multilingual-realtime-calendar",
    tags: ["JavaScript", "React"],
    establishedDate: "2024-08-14",
    establishedTime: "04:30",
    establishedTimeZone: "Asia/Jakarta",
    titleEN: "Multilingual Real-Time Calendar",
    titleID: "Kalender Waktu-Nyata Multibahasa",
    titleJA: "多言語・リアルタイムなカレンダー",
    titleEO: "Multlingve Realtempa Kalendaro",
    descriptionEN:
      "A web application where user can choose their own language(s) to display a realtime calendar.",
    descriptionID:
      "Sebuah aplikasi web di mana pengguna dapat memilih bahasanya sendiri untuk menampilkan kalender secara waktu-nyata.",
    descriptionJA:
      "ユーザーは自言語を選択してリアルタイムなカレンダーを表示するためのウェブアプリです。",
    descriptionEO:
      "La retaplikaĵo kie uzantoj povas elekti ilian lingvo(j)n por montri la realtempan kalendaron.",
  },
  {
    id: "kanji-lookup",
    link: "https://kanji-lookup.vercel.app/",
    sourceCode: "https://github.com/ahmadfauzan96/kanji-lookup",
    tags: ["React", "NextJS 14", "Bootstrap 5", "MUI", "REST API"],
    establishedDate: "2024-10-23",
    establishedTime: "22:30",
    establishedTimeZone: "Asia/Jakarta",
    titleEN: "Kanji Lookup",
    titleID: "Cari Kanji",
    titleJA: "漢字検索",
    titleEO: "Kanĝijn Serĉi",
    descriptionEN:
      "A web application where user can enter Japanese kanji to get its information or words containing it, or a kanji reading to get kanjis with such reading.",
    descriptionID:
      "Sebuah aplikasi web di mana pengguna dapat memasukkan kanji bahasa Jepang untuk menampilkan informasi mengenai atau kata-kata yang mengandung kanji tersebut, atau memasukkan suatu cara baca kanji untuk mendapatkan kanji dengan cara baca tersebut.",
    descriptionJA:
      "ユーザーは日本語の漢字を入力してその漢字の情報又はその漢字を含む単語を入手するため、又は訓読み・音読みを入力してその読み方で漢字一覧を入手するためのウェブアプリです。",
    descriptionEO:
      "La retaplikaĵo kie uzantoj povas enirigi japanan kanĝijn por trovi ĝian informojn aŭ vortojn kiu enhavas ĝin, aŭ la legadon de kanĝijn por trovi kanĝijn kun tian sin.",
  },
];

export const GYEE_EXCERPTS = [
  {
    lang: "en",
    fonts: ["Noto Sans"],
    excerpt: "Hope you can live the life you want, and enjoy it.",
  },
  {
    lang: "no",
    fonts: ["Noto Sans"],
    excerpt: "Håper du kan leve det livet du ønsker, og nyte det.",
  },
  {
    lang: "nl",
    fonts: ["Noto Sans"],
    excerpt: "Ik hoop dat je het leven kunt leiden dat je wilt en dat je ervan kunt genieten.",
  },
  {
    lang: "eo",
    fonts: ["Noto Sans"],
    excerpt: "Ni esperas, ke vi povas vivi la vivon kiun vi volas, kaj ĝui ĝin.",
  },
  {
    lang: "id",
    fonts: ["Noto Sans"],
    excerpt: "Semoga Anda dapat menjalani kehidupan yang Anda inginkan, dan menikmatinya.",
  },
  {
    lang: "vi",
    fonts: ["Noto Sans"],
    excerpt: "Hi vọng bạn có thể sống cuộc sống mà bạn mong muốn và tận hưởng nó.",
  },
  {
    lang: "ms",
    fonts: ["Noto Sans"],
    excerpt: "Semoga Anda dapat menjalani kehidupan yang Anda inginkan, dan menikmatinya.",
  },
  {
    lang: "zh-hans",
    fonts: ["Noto Sans", "Noto Sans SC"],
    excerpt: "希望你能过上你想要的生活，并享受它。",
  },
  {
    lang: "zh-hant",
    fonts: ["Noto Sans", "Noto Sans TC"],
    excerpt: "希望你能過自己想要的生活，並且享受它。",
  },
  {
    lang: "yue",
    fonts: ["Noto Sans", "Noto Sans HK"],
    excerpt: "希望你可以過你想要嘅生活，同埋享受佢。",
  },
  {
    lang: "ja",
    fonts: ["Noto Sans", "Noto Sans JP"],
    excerpt: "あなたが望む人生を生きて、それを楽しむことができることを願っています。",
  },
  {
    lang: "ko",
    fonts: ["Noto Sans", "Noto Sans KR"],
    excerpt: "당신이 원하는 삶을 살 수 있고, 그것을 즐길 수 있기를 바랍니다.",
  },
  {
    lang: "th",
    fonts: ["Noto Sans", "Noto Sans Thai"],
    excerpt: "หวังว่าคุณจะใช้ชีวิตตามที่คุณต้องการและเพลิดเพลินไปกับมัน.",
  },
  {
    lang: "hi",
    fonts: ["Noto Sans"],
    excerpt: "आशा है कि आप अपनी इच्छानुसार जीवन जी सकेंगे और उसका आनंद ले सकेंगे।",
  },
  {
    lang: "mr",
    fonts: ["Noto Sans"],
    excerpt: "आशा आहे की तुम्ही तुम्हाला हवे ते जीवन जगू शकाल आणि त्याचा आनंद घ्याल.",
  },
  {
    lang: "ne",
    fonts: ["Noto Sans"],
    excerpt: "आशा छ कि तपाईले चाहानु भएको जीवन जिउन सक्नुहुन्छ, र यसको आनन्द लिनुहोस्।",
  },
  {
    lang: "sa",
    fonts: ["Noto Sans"],
    excerpt:
      "आशास्ति यत् भवन्तः इच्छन्ति जीवनं जीवितुं शक्नुवन्ति, तस्य आनन्दं च लब्धुं शक्नुवन्ति।",
  },
  {
    lang: "ta",
    fonts: ["Noto Sans", "Noto Sans Tamil"],
    excerpt:
      "நீங்கள் விரும்பும் வாழ்க்கையை நீங்கள் வாழ முடியும், அதை அனுபவிக்க முடியும் என்று நம்புகிறேன்.",
  },
  {
    lang: "ar",
    fonts: ["Noto Sans", "Noto Sans Arabic"],
    excerpt: "أتمنى أن تتمكن من عيش الحياة التي تريدها، والتمتع بها.",
  },
  {
    lang: "fa",
    fonts: ["Noto Sans", "Noto Sans Arabic"],
    excerpt: "امیدوارم بتوانید آنطور که می خواهید زندگی کنید و از آن لذت ببرید.",
  },
  {
    lang: "ur",
    fonts: ["Noto Sans", "Noto Sans Arabic", "Noto Nastaliq Urdu"],
    excerpt: "امید ہے کہ آپ اپنی مرضی کی زندگی گزار سکتے ہیں، اور اس سے لطف اندوز ہو سکتے ہیں۔",
  },
  {
    lang: "ug",
    fonts: ["Noto Sans", "Noto Sans Arabic"],
    excerpt:
      "ئۆزىڭىز ئارزۇ قىلغان ھاياتنى ئۆتكۈزۈشىڭىزنى ، ئۇنىڭدىن ھۇزۇرلىنىشىڭىزنى ئۈمىد قىلىمەن.",
  },
  {
    lang: "ms-arab",
    fonts: ["Noto Sans", "Noto Sans Arabic"],
    excerpt: "سموڬ اندا داڤت منجالني كهيدوڤن يڠ اندا ماهوكن، دان منعمتيڽ.",
  },
  {
    lang: "he",
    fonts: ["Noto Sans", "Noto Sans Hebrew"],
    excerpt: "מקווה שתוכל לחיות את החיים שאתה רוצה, וליהנות מהם.",
  },
  {
    lang: "yi",
    fonts: ["Noto Sans", "Noto Sans Hebrew"],
    excerpt: "האָפענונג איר קענען לעבן די לעבן איר ווילן, און הנאה עס.",
  },
];
