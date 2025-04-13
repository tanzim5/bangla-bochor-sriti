
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeCard from "@/components/ThemeCard";
import { ArrowLeft, Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeSelection = () => {
  const { theme: currentTheme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(currentTheme);
  const navigate = useNavigate();

  const themes = [
    {
      id: "palli",
      name: "পল্লী",
      englishName: "Palli",
      description: "গ্রাম বাংলার প্রাকৃতিক দৃশ্য",
      colorClass: "bg-gradient-to-br from-bengali-leaf to-bengali-teal",
      iconClass: "🏞️"
    },
    {
      id: "nagar",
      name: "নগর",
      englishName: "Nagar",
      description: "আধুনিক শহুরে বাংলা ডিজাইন",
      colorClass: "bg-gradient-to-br from-bengali-blue to-bengali-blue/70",
      iconClass: "🏙️"
    },
    {
      id: "rupkotha",
      name: "রূপকথা",
      englishName: "Rupkotha",
      description: "বাংলার লোক সংস্কৃতি এবং কাহিনী",
      colorClass: "bg-gradient-to-br from-bengali-orange to-bengali-red",
      iconClass: "🎭"
    },
    {
      id: "ritu",
      name: "ঋতু",
      englishName: "Ritu",
      description: "বাংলার ছয় ঋতুর পরিবর্তনশীল মুড",
      colorClass: "bg-gradient-to-br from-bengali-yellow to-bengali-orange",
      iconClass: "🍂"
    }
  ];

  const handleSelectTheme = (id: string) => {
    setSelectedTheme(id);
  };

  const handleApplyTheme = () => {
    if (!selectedTheme) return;
    
    // Apply the selected theme using our context
    setTheme(selectedTheme as "palli" | "nagar" | "rupkotha" | "ritu");
    
    // Navigate back to home page after applying theme
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bengali-pattern flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-1" /> ফিরে যান
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-baloo flex-1 text-center mr-10">থিম বেছে নিন</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.id}
              {...theme}
              onSelect={handleSelectTheme}
              isSelected={selectedTheme === theme.id}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 min-w-[200px]"
            disabled={!selectedTheme}
            onClick={handleApplyTheme}
          >
            <Check className="mr-2 h-4 w-4" />
            থিম প্রয়োগ করুন
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ThemeSelection;
