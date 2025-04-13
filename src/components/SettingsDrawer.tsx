
import { useState } from "react";
import { 
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter
} from "@/components/ui/drawer";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SettingsDrawerProps {
  theme: string;
  setTheme: (theme: string) => void;
  font: string;
  setFont: (font: string) => void;
  showGregorian: boolean;
  setShowGregorian: (show: boolean) => void;
}

export const SettingsDrawer = ({
  theme,
  setTheme,
  font,
  setFont,
  showGregorian,
  setShowGregorian
}: SettingsDrawerProps) => {
  const { toast } = useToast();
  
  const handleExport = () => {
    toast({
      title: "এক্সপোর্ট করা হচ্ছে",
      description: "আপনার ইমেজ ডাউনলোড হয়ে যাবে কয়েক সেকেন্ডের মধ্যে।",
      duration: 3000,
    });
  };
  
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-10">
          <Settings className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-4">
          <DrawerHeader>
            <DrawerTitle className="text-center font-baloo">সেটিংস</DrawerTitle>
          </DrawerHeader>
          
          <div className="space-y-6 py-4">
            {/* Theme Selector */}
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-base">থিম বাছাই করুন</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger id="theme">
                  <SelectValue placeholder="থিম বাছাই করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="পল্লী">পল্লী</SelectItem>
                  <SelectItem value="নগর">নগর</SelectItem>
                  <SelectItem value="রূপকথা">রূপকথা</SelectItem>
                  <SelectItem value="ঋতু">ঋতু</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Font Selector */}
            <div className="space-y-2">
              <Label htmlFor="font" className="text-base">ফন্ট বাছাই করুন</Label>
              <Select value={font} onValueChange={setFont}>
                <SelectTrigger id="font">
                  <SelectValue placeholder="ফন্ট বাছাই করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hind" className="font-hind">হিন্দ সিলিগুড়ি</SelectItem>
                  <SelectItem value="baloo" className="font-baloo">বালু দা ২</SelectItem>
                  <SelectItem value="tiro" className="font-tiro">তিরো বাংলা</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Gregorian Date Toggle */}
            <div className="flex items-center justify-between">
              <Label htmlFor="gregorian" className="text-base">গ্রেগরিয়ান তারিখ দেখান</Label>
              <Switch 
                id="gregorian"
                checked={showGregorian}
                onCheckedChange={setShowGregorian}
              />
            </div>
            
            {/* Export Button */}
            <Button 
              className="w-full bg-bengali-orange hover:bg-bengali-orange/90"
              onClick={handleExport}
            >
              <Download className="mr-2 h-4 w-4" />
              ইমেজ এক্সপোর্ট করুন
            </Button>
          </div>
          
          <DrawerFooter className="pt-2">
            <p className="text-center text-sm text-muted-foreground">
              সমস্ত সেটিংস আপনার ডিভাইসে সংরক্ষিত থাকবে।
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
