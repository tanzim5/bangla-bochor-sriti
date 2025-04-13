
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const [showGregorianDates, setShowGregorianDates] = useState(true);
  const [selectedFont, setSelectedFont] = useState("hind");
  const { toast } = useToast();
  
  const handleSaveSettings = () => {
    // Here we would save settings to localStorage or a backend
    // For now we just show a toast notification
    toast({
      title: "সেটিংস সংরক্ষিত হয়েছে",
      description: "আপনার পছন্দগুলি সফলভাবে সংরক্ষিত করা হয়েছে",
      duration: 2000,
    });
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
        <h1 className="text-2xl font-bold font-baloo flex-1 text-center mr-10">সেটিংস</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="max-w-md mx-auto space-y-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          {/* Date Format Settings */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">তারিখ ফরম্যাট</h2>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="show-gregorian" className="text-base">
                গ্রেগরিয়ান তারিখ দেখান
              </Label>
              <Switch
                id="show-gregorian"
                checked={showGregorianDates}
                onCheckedChange={setShowGregorianDates}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">ফন্ট বাছাই</h2>
            
            <RadioGroup value={selectedFont} onValueChange={setSelectedFont}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hind" id="hind" />
                <Label htmlFor="hind" className="font-hind text-lg">হিন্দ সিলিগুড়ি</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="baloo" id="baloo" />
                <Label htmlFor="baloo" className="font-baloo text-lg">বালু দা ২</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tiro" id="tiro" />
                <Label htmlFor="tiro" className="font-tiro text-lg">তিরো বাংলা</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* App Icon Settings */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">অ্যাপ আইকন</h2>
            
            <Select defaultValue="default">
              <SelectTrigger>
                <SelectValue placeholder="অ্যাপ আইকন বাছাই করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">ডিফল্ট</SelectItem>
                <SelectItem value="palli">পল্লী</SelectItem>
                <SelectItem value="nagar">নগর</SelectItem>
                <SelectItem value="rupkotha">রূপকথা</SelectItem>
                <SelectItem value="ritu">ঋতু</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Save Button */}
          <Button 
            className="w-full bg-bengali-red hover:bg-bengali-red/90"
            onClick={handleSaveSettings}
          >
            <Save className="mr-2 h-4 w-4" />
            সংরক্ষণ করুন
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
