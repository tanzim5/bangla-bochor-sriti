
import { getDailyQuote } from "@/utils/bengaliQuotes";

const DailyQuote = () => {
  const { quote, author } = getDailyQuote();
  
  return (
    <div className="text-center text-sm italic text-bengali-teal/80 mt-2">
      <p>"{quote}"</p>
      <p className="text-xs mt-1">— {author}</p>
    </div>
  );
};

export default DailyQuote;
