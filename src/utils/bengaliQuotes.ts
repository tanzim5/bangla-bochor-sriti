
// Collection of famous Bengali quotes from Bangladeshi literature
export const bengaliQuotes = [
  {
    quote: "আমি কবি আমার চোখে নীল আকাশ আমার চেতনার কোণে থাকে হাজারো বাতাস।",
    author: "রবীন্দ্রনাথ ঠাকুর"
  },
  {
    quote: "আমি কোনো আগন্তুক নই, এ বিশ্ব আমার ঘর।",
    author: "জীবনানন্দ দাশ"
  },
  {
    quote: "সবুজ পাতার মৃদু হিল্লোল আমার বন্ধু, আমার সখী।",
    author: "সুকান্ত ভট্টাচার্য"
  },
  {
    quote: "জীবন যখন শুকায়ে যায় করুণাধারায় এসো।",
    author: "কাজী নজরুল ইসলাম"
  },
  {
    quote: "যে যায় স্বর্গ সেও বেদনার গহনে ডুবে যায়।",
    author: "শামসুর রাহমান"
  },
  {
    quote: "প্রতিটি শব্দের অর্থ আছে, প্রতিটি নীরবতারও।",
    author: "হুমায়ূন আহমেদ"
  },
  {
    quote: "সময়ের অনুসরণে আমি শিখেছি পৃথিবীর রহস্য।",
    author: "আল মাহমুদ"
  },
  {
    quote: "মানুষ মরে যায়, কিন্তু তার কথা বেঁচে থাকে।",
    author: "সৈয়দ শামসুল হক"
  },
  {
    quote: "জীবন এক অদ্ভুত পাঠশালা, যেখানে প্রতিদিন নতুন পাঠ।",
    author: "সুফিয়া কামাল"
  },
  {
    quote: "স্বাধীনতা এমন একটি অনিবার্য সত্য যাকে মেনে নিতেই হয়।",
    author: "সেলিনা হোসেন"
  },
  {
    quote: "আমি সেই মেঘ যে কাঁদে হাসে, মনের আকাশে ভেসে যায়।",
    author: "নির্মলেন্দু গুণ"
  },
  {
    quote: "নদীর মতন ভালোবাসি আমি, আমার ধারায় বয়ে যায় জীবন।",
    author: "শহীদুল্লাহ কায়সার"
  },
  {
    quote: "সবুজ মাঠে দাঁড়িয়ে আমি দেখি জীবনের রূপ।",
    author: "হেলাল হাফিজ"
  },
  {
    quote: "একটি ফুলের জন্ম যেন আমার হৃদয়ে হয়।",
    author: "সিকান্দার আবু জাফর"
  },
  {
    quote: "জীবন এক অনন্ত যাত্রা, প্রতিটি পদক্ষেপ নতুন দিগন্ত।",
    author: "আহসান হাবীব"
  }
];

// Function to get a quote based on the day of the year
export const getDailyQuote = () => {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return bengaliQuotes[dayOfYear % bengaliQuotes.length];
};
