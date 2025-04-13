import { useState, useEffect } from "react";
import { calculateYearProgress, convertToBengaliDate } from "@/utils/bengaliCalendar";

interface DotGridProps {
  theme?: "পল্লী" | "নগর" | "রূপকথা" | "ঋতু";
  totalDays?: number;
}

export const DotGrid = ({ 
  theme = "পল্লী",
  totalDays = 365 
}: DotGridProps) => {
  const [elapsedDays, setElapsedDays] = useState(0);
  const gridSize = Math.ceil(Math.sqrt(totalDays));
  const bengaliDate = convertToBengaliDate();
  const daysElapsed = bengaliDate.day;
  
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < daysElapsed) {
        count += 1;
        setElapsedDays(count);
      } else {
        clearInterval(interval);
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [daysElapsed, totalDays]);
  
  const getThemeColors = () => {
    switch (theme) {
      case "পল্লী": 
        return {
          activeDot: "bg-bengali-orange",
          todayDot: "bg-bengali-red ring-2 ring-bengali-red",
          inactiveDot: "bg-bengali-orange/20"
        };
      case "নগর":
        return {
          activeDot: "bg-bengali-blue",
          todayDot: "bg-bengali-blue ring-2 ring-bengali-blue",
          inactiveDot: "bg-bengali-blue/20"
        };
      case "রূপকথা":
        return {
          activeDot: "bg-bengali-red",
          todayDot: "bg-bengali-red ring-2 ring-bengali-red",
          inactiveDot: "bg-bengali-red/20"
        };
      case "ঋতু":
        return {
          activeDot: "bg-bengali-teal",
          todayDot: "bg-bengali-teal ring-2 ring-bengali-teal",
          inactiveDot: "bg-bengali-teal/20"
        };
      default:
        return {
          activeDot: "bg-bengali-orange",
          todayDot: "bg-bengali-red ring-2 ring-bengali-red",
          inactiveDot: "bg-bengali-orange/20"
        };
    }
  };
  
  const colors = getThemeColors();
  
  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <div 
        className="grid gap-1.5 md:gap-2"
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` 
        }}
      >
        {Array.from({ length: totalDays }).map((_, index) => {
          const isToday = index === elapsedDays - 1;
          const isActive = index < elapsedDays;
          
          return (
            <div
              key={index}
              className={`aspect-square rounded-full transition-all duration-300 ${
                isToday ? colors.todayDot : isActive ? colors.activeDot : colors.inactiveDot
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
