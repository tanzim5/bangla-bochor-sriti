
import { useState, useEffect } from "react";
import { calculateYearProgress, calculateRemainingDays, numberToBengali, convertToBengaliDate } from "../utils/bengaliCalendar";

const YearProgress = () => {
  const bengaliDate = convertToBengaliDate();
  // Base progress on bengali day in year
  const dayInYear = bengaliDate.day;
  const totalDaysInYear = 365;
  const progress = (dayInYear / totalDaysInYear) * 100;
  
  const [remainingDays, setRemainingDays] = useState(calculateRemainingDays());
  
  useEffect(() => {
    const updateProgress = () => {
      setRemainingDays(calculateRemainingDays());
    };
    
    // Update progress daily
    const timeUntilMidnight = new Date().setHours(24, 0, 0, 0) - new Date().getTime();
    const timer = setTimeout(() => {
      updateProgress();
    }, timeUntilMidnight);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
      <div className="mb-4 text-center">
        <p className="text-sm text-muted-foreground">বাংলা বছরের অগ্রগতি</p>
      </div>
      
      <div className="relative h-4 bg-secondary rounded-full overflow-hidden mb-2">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-bengali-orange to-bengali-red rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>০%</span>
        <span>১০০%</span>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-lg font-medium">
          আরও <span className="text-xl font-bold text-bengali-red">{numberToBengali(remainingDays)}</span> দিন বাকি
        </p>
        <p className="text-sm text-muted-foreground">
          মোট ৩৬৫ দিনের মধ্যে
        </p>
      </div>
    </div>
  );
};

export default YearProgress;
