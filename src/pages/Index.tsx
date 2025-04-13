
import { useState } from "react";
import { Link } from "react-router-dom";
import BengaliDate from "@/components/BengaliDate";
import { DotGrid } from "@/components/DotGrid";
import { SettingsDrawer } from "@/components/SettingsDrawer";
import DailyQuote from "@/components/DailyQuote";
import { numberToBengali } from "@/utils/bengaliCalendar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [theme, setTheme] = useState<"পল্লী" | "নগর" | "রূপকথা" | "ঋতু">("পল্লী");
  const [font, setFont] = useState("hind");
  const [showGregorian, setShowGregorian] = useState(true);
  const isMobile = useIsMobile();

  return (
    <div className={`min-h-screen flex flex-col bengali-pattern font-${font} p-4 md:p-8`}>
      {/* Settings Drawer */}
      <SettingsDrawer 
        theme={theme}
        setTheme={(t) => setTheme(t as "পল্লী" | "নগর" | "রূপকথা" | "ঋতু")}
        font={font}
        setFont={setFont}
        showGregorian={showGregorian}
        setShowGregorian={setShowGregorian}
      />
      
      {/* Header */}
      <header className="text-center mt-8 md:mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-bengali-red font-baloo">দিনগুলি</h1>
        <p className="mt-2 text-bengali-earth text-lg md:text-xl">
          এই বছরের দিনগুলি
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center my-4">
        {/* Bengali Date Display */}
        <BengaliDate 
          showGregorian={showGregorian}
          size="large" 
        />
        
        {/* Dot Grid */}
        <DotGrid theme={theme} />
        
        {/* Emotional Hook */}
        <div className="mt-6 md:mt-10 text-center text-bengali-teal">
          <p className="text-lg italic">আজকের দিন, একটা গল্প</p>
          <DailyQuote />
        </div>
      </main>
      
      {/* Navigation */}
      <div className="mt-4 flex justify-center gap-4">
        <Link to="/themes">
          <Button className="bg-bengali-orange hover:bg-bengali-orange/80">
            <Palette className="mr-2 h-4 w-4" />
            থিম বেছে নিন
          </Button>
        </Link>
      </div>
      
      {/* Footer */}
      <footer className="text-center p-4 mt-4 text-sm text-muted-foreground">
        <p>বাংলা বর্ষপঞ্জি © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
