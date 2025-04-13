
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import TimelineEvent from "@/components/TimelineEvent";
import { bengaliFestivals, bengaliMonths } from "@/utils/bengaliCalendar";
import { ArrowLeft, Calendar } from "lucide-react";

const Timeline = () => {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  
  const filteredFestivals = selectedMonth !== null
    ? bengaliFestivals.filter(festival => festival.month === selectedMonth)
    : bengaliFestivals;
  
  // Sort festivals by month and day
  const sortedFestivals = [...filteredFestivals].sort((a, b) => {
    if (a.month !== b.month) return a.month - b.month;
    return a.day - b.day;
  });

  return (
    <div className="min-h-screen bengali-pattern flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-1" /> ফিরে যান
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-baloo flex-1 text-center mr-10">
          বাৎসরিক উৎসব
        </h1>
      </header>

      {/* Filter by month */}
      <div className="px-4">
        <ScrollArea className="whitespace-nowrap pb-4">
          <div className="flex space-x-2">
            <Button
              variant={selectedMonth === null ? "default" : "outline"}
              className="flex-shrink-0"
              onClick={() => setSelectedMonth(null)}
            >
              <Calendar className="w-4 h-4 mr-2" />
              সব মাস
            </Button>
            {bengaliMonths.map((month, index) => (
              <Button
                key={index}
                variant={selectedMonth === index ? "default" : "outline"}
                className="flex-shrink-0"
                onClick={() => setSelectedMonth(index)}
              >
                {month}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="max-w-md mx-auto">
          {sortedFestivals.length > 0 ? (
            sortedFestivals.map((festival, index) => (
              <TimelineEvent
                key={index}
                name={festival.name}
                englishName={festival.englishName}
                description={festival.description}
                month={festival.month}
                day={festival.day}
                duration={festival.duration}
                isUpcoming={false} // This would be determined by comparing to current date
              />
            ))
          ) : (
            <div className="text-center p-8">
              <p>এই মাসে কোন উৎসব নেই</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Timeline;
