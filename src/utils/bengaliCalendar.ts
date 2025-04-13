
// Bengali month names
export const bengaliMonths = [
  'বৈশাখ', // Boishakh
  'জ্যৈষ্ঠ', // Joishtho
  'আষাঢ়', // Asharh
  'শ্রাবণ', // Srabon
  'ভাদ্র', // Bhadro
  'আশ্বিন', // Ashwin
  'কার্তিক', // Kartik
  'অগ্রহায়ণ', // Ogrohayon
  'পৌষ', // Poush
  'মাঘ', // Magh
  'ফাল্গুন', // Falgun
  'চৈত্র' // Choitro
];

// Bengali digits
export const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

// Bengali calendar seasons
export const bengaliSeasons = [
  { name: 'গ্রীষ্ম', months: [0, 1] }, // Grisho (Summer)
  { name: 'বর্ষা', months: [2, 3] }, // Borsha (Rainy)
  { name: 'শরৎ', months: [4, 5] }, // Shorot (Autumn)
  { name: 'হেমন্ত', months: [6, 7] }, // Hemonto (Late Autumn)
  { name: 'শীত', months: [8, 9] }, // Sheet (Winter)
  { name: 'বসন্ত', months: [10, 11] } // Basonto (Spring)
];

// Convert Gregorian to Bengali date
// This is a simplified approximation
export function convertToBengaliDate(date: Date = new Date()): {
  date: string;
  month: string;
  year: string;
  monthIndex: number;
  day: number;
} {
  // Current Bengali year starts approximately on April 14
  const gregorianYear = date.getFullYear();
  const gregorianMonth = date.getMonth();
  const gregorianDay = date.getDate();
  
  // Bengali calendar typically starts around April 14 (Pohela Boishakh)
  let bengaliYear = gregorianYear - 593; // Approximate conversion
  let bengaliMonthIndex = 0;
  let bengaliDay = 0;

  // Rough estimation of Bengali date
  if (gregorianMonth === 3 && gregorianDay >= 14) {
    // April after 14th - Boishakh starts
    bengaliMonthIndex = 0;
    bengaliDay = gregorianDay - 13;
  } else if (gregorianMonth === 4) {
    // May - mostly Boishakh
    bengaliMonthIndex = gregorianDay < 15 ? 0 : 1;
    bengaliDay = gregorianDay < 15 ? gregorianDay + 17 : gregorianDay - 14;
  } else if (gregorianMonth > 4 && gregorianMonth < 11) {
    // June to October - mid months
    bengaliMonthIndex = (gregorianMonth - 4) + (gregorianDay < 15 ? 1 : 2);
    bengaliDay = gregorianDay < 15 ? gregorianDay + 16 : gregorianDay - 14;
  } else if (gregorianMonth >= 11 || gregorianMonth < 3) {
    // November to March - end of Bengali year
    if (gregorianMonth === 11) {
      bengaliMonthIndex = 7; // Ogrohayon
    } else if (gregorianMonth === 0) {
      bengaliMonthIndex = 8; // Poush
    } else if (gregorianMonth === 1) {
      bengaliMonthIndex = 9; // Magh
    } else if (gregorianMonth === 2) {
      bengaliMonthIndex = 10; // Falgun
    } else { // gregorianMonth === 3 && gregorianDay < 14
      bengaliMonthIndex = 11; // Choitro
    }
    bengaliDay = gregorianDay < 15 ? gregorianDay + 16 : gregorianDay - 14;
    
    // Adjust year for months before Bengali new year
    if (gregorianMonth < 4) {
      bengaliYear = gregorianYear - 594;
    }
  }

  // Ensure bengaliDay is in valid range
  bengaliDay = Math.min(Math.max(bengaliDay, 1), 31);
  bengaliMonthIndex = bengaliMonthIndex % 12;
  
  // Convert number to Bengali numerals
  const bengaliDayStr = numberToBengali(bengaliDay);
  const bengaliYearStr = numberToBengali(bengaliYear);

  return {
    date: bengaliDayStr,
    month: bengaliMonths[bengaliMonthIndex],
    year: bengaliYearStr,
    monthIndex: bengaliMonthIndex,
    day: bengaliDay
  };
}

// Convert a number to Bengali digits
export function numberToBengali(num: number): string {
  return num.toString().split('').map(digit => bengaliDigits[parseInt(digit)]).join('');
}

// Calculate the percentage of the Bengali year completed
export function calculateYearProgress(): number {
  const today = new Date();
  
  // Approximate Bengali New Year's date for the current Gregorian year
  const bengaliNewYear = new Date(today.getFullYear(), 3, 14); // April 14
  
  // If today is before April 14, use previous year's Bengali New Year
  if (today < bengaliNewYear) {
    bengaliNewYear.setFullYear(bengaliNewYear.getFullYear() - 1);
  }
  
  // Next Bengali New Year
  const nextBengaliNewYear = new Date(bengaliNewYear);
  nextBengaliNewYear.setFullYear(nextBengaliNewYear.getFullYear() + 1);
  
  // Calculate progress
  const totalDays = (nextBengaliNewYear.getTime() - bengaliNewYear.getTime()) / (1000 * 60 * 60 * 24);
  const elapsedDays = (today.getTime() - bengaliNewYear.getTime()) / (1000 * 60 * 60 * 24);
  
  return Math.min(Math.max(elapsedDays / totalDays * 100, 0), 100);
}

// Calculate remaining days in the Bengali year
export function calculateRemainingDays(): number {
  const today = new Date();
  
  // Approximate Bengali New Year's date for the current Gregorian year
  let nextBengaliNewYear = new Date(today.getFullYear(), 3, 14); // April 14
  
  // If today is after or equal to April 14, use next year's Bengali New Year
  if (today >= nextBengaliNewYear) {
    nextBengaliNewYear.setFullYear(nextBengaliNewYear.getFullYear() + 1);
  }
  
  // Calculate remaining days
  const remainingDays = (nextBengaliNewYear.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
  
  return Math.ceil(remainingDays);
}

// Bengali festivals data
export const bengaliFestivals = [
  {
    name: "পহেলা বৈশাখ",
    englishName: "Pohela Boishakh",
    description: "Bengali New Year",
    month: 0, // Boishakh
    day: 1
  },
  {
    name: "রবীন্দ্র জয়ন্তী",
    englishName: "Rabindra Jayanti",
    description: "Tagore's Birthday",
    month: 0, // Boishakh
    day: 25
  },
  {
    name: "জমাইষষ্ঠী",
    englishName: "Jamai Sasthi",
    description: "Son-in-law Day",
    month: 1, // Joishtho
    day: 21
  },
  {
    name: "রথযাত্রা",
    englishName: "Rath Yatra",
    description: "Chariot Festival",
    month: 2, // Asharh
    day: 10
  },
  {
    name: "দুর্গা পূজা",
    englishName: "Durga Puja",
    description: "Worship of Goddess Durga",
    month: 5, // Ashwin
    day: 7,
    duration: 5
  },
  {
    name: "লক্ষ্মী পূজা",
    englishName: "Lokkhi Puja",
    description: "Worship of Goddess Lakshmi",
    month: 5, // Ashwin
    day: 15
  },
  {
    name: "কালী পূজা",
    englishName: "Kali Puja",
    description: "Worship of Goddess Kali",
    month: 6, // Kartik
    day: 29
  },
  {
    name: "নবান্ন",
    englishName: "Nabanna",
    description: "Harvest Festival",
    month: 7, // Ogrohayon
    day: 15
  },
  {
    name: "পৌষ পার্বণ",
    englishName: "Poush Parbon",
    description: "Harvest Festival of Poush",
    month: 8, // Poush
    day: 15
  },
  {
    name: "সরস্বতী পূজা",
    englishName: "Saraswati Puja",
    description: "Worship of Goddess Saraswati",
    month: 9, // Magh
    day: 20
  },
  {
    name: "বসন্ত উৎসব",
    englishName: "Basanta Utsab",
    description: "Spring Festival",
    month: 10, // Falgun
    day: 15
  },
  {
    name: "দোল পূর্ণিমা",
    englishName: "Dol Purnima",
    description: "Festival of Colors",
    month: 10, // Falgun
    day: 30
  },
  {
    name: "চৈত্র সংক্রান্তি",
    englishName: "Choitro Songkranti",
    description: "Last day of Bengali year",
    month: 11, // Choitro
    day: 30
  }
];
