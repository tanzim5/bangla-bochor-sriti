
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BengaliDate from "@/components/BengaliDate";
import YearProgress from "@/components/YearProgress";
import { Settings, Palette } from "lucide-react";
import { bengaliMonths } from "@/utils/bengaliCalendar";

const Index = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentMonthIndex((prev) => (prev + 1) % 12);
    } else {
      setCurrentMonthIndex((prev) => (prev - 1 + 12) % 12);
    }
  };

  return (
    <div className="min-h-screen bengali-pattern flex flex-col">
      {/* Header */}
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold text-bengali-red font-baloo">এক বছর</h1>
        <div className="mt-2">
          <BengaliDate size="large" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 space-y-6">
        {/* Year Progress */}
        <YearProgress />

        {/* Month Timeline */}
        <Card className="p-4 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-0">
            <h2 className="text-center font-medium mb-4 text-bengali-teal">বাংলা বছরের সময়রেখা</h2>
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentMonthIndex * 100 / 3}%)` }}
              >
                {bengaliMonths.map((month, index) => (
                  <div key={index} className="min-w-[33.333%] px-2 flex-shrink-0">
                    <div className="bg-secondary/50 rounded-lg p-3 text-center h-20 flex items-center justify-center">
                      <p className="font-bold">{month}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between mt-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleSwipe("right")}
              >
                ◀ আগে
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                {currentMonthIndex + 1}/১২
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleSwipe("left")}
              >
                পরে ▶
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Link to="/themes">
            <Button className="bg-bengali-orange hover:bg-bengali-orange/80">
              <Palette className="mr-2 h-4 w-4" />
              থিম বেছে নিন
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              সেটিংস
            </Button>
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="text-center p-4 text-sm text-muted-foreground">
        <p>বাংলা বর্ষপঞ্জি © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
