
import { useState } from "react";
import { convertToBengaliDate, calculateYearProgress, calculateRemainingDays, numberToBengali, bengaliMonths } from "../utils/bengaliCalendar";
import { useIsMobile } from "@/hooks/use-mobile";
import { DotGrid } from "./DotGrid";

interface BengaliDateProps {
  showGregorian?: boolean;
  size?: "small" | "medium" | "large";
}

const BengaliDate = ({ showGregorian = true, size = "medium" }: BengaliDateProps) => {
  const bengaliDate = convertToBengaliDate();
  const today = new Date();
  // Use bengaliDate.day directly for the day count since the new year
  const dayCount = bengaliDate.day;
  const remainingDays = calculateRemainingDays();
  const isMobile = useIsMobile();
  
  const formatGregorianDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };
  
  const sizeClasses = {
    small: "text-sm",
    medium: "text-xl",
    large: "text-3xl"
  };

  return (
    <div className="flex flex-col items-center animate-fade-in">
      <div className={`font-bold ${sizeClasses[size]}`}>
        {bengaliDate.date} {bengaliDate.month}, {bengaliDate.year}
      </div>
      {showGregorian && (
        <div className="text-muted-foreground mt-1 text-sm">
          {formatGregorianDate(today)}
        </div>
      )}
      <div className="mt-2 text-center text-bengali-orange">
        <span>আজ {bengaliDate.date} {bengaliDate.month}</span>
        <span className="mx-1">•</span>
        <span>{numberToBengali(remainingDays)} দিন বাকি</span>
      </div>
    </div>
  );
};

export default BengaliDate;
