
import { convertToBengaliDate } from "../utils/bengaliCalendar";

interface BengaliDateProps {
  showGregorian?: boolean;
  size?: "small" | "medium" | "large";
}

const BengaliDate = ({ showGregorian = true, size = "medium" }: BengaliDateProps) => {
  const bengaliDate = convertToBengaliDate();
  const today = new Date();
  
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
    </div>
  );
};

export default BengaliDate;
