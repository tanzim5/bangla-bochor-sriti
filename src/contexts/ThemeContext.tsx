
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

type ThemeType = "palli" | "nagar" | "rupkotha" | "ritu";

type ThemeContextType = {
  theme: ThemeType;
  themeDisplayName: "পল্লী" | "নগর" | "রূপকথা" | "ঋতু";
  setTheme: (theme: ThemeType) => void;
};

const defaultTheme: ThemeType = "palli";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    // Get theme from localStorage if available
    const savedTheme = localStorage.getItem("bengali-calendar-theme");
    return (savedTheme as ThemeType) || defaultTheme;
  });
  
  const { toast } = useToast();

  const getThemeDisplayName = (themeId: ThemeType): "পল্লী" | "নগর" | "রূপকথা" | "ঋতু" => {
    switch(themeId) {
      case "palli": return "পল্লী";
      case "nagar": return "নগর";
      case "rupkotha": return "রূপকথা";
      case "ritu": return "ঋতু";
      default: return "পল্লী";
    }
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("bengali-calendar-theme", newTheme);
    
    toast({
      title: "থিম আপডেট হয়েছে",
      description: `${getThemeDisplayName(newTheme)} থিম সফলভাবে সেট করা হয়েছে`,
      duration: 2000,
    });
  };

  useEffect(() => {
    // Apply theme-specific settings when theme changes
    // This can be extended later for more theme-specific changes
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      themeDisplayName: getThemeDisplayName(theme),
      setTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
