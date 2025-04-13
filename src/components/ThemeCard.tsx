
import { Card, CardContent } from "@/components/ui/card";

interface ThemeCardProps {
  id: string;
  name: string;
  englishName: string;
  description: string;
  colorClass: string;
  iconClass: string;
  onSelect: (id: string) => void;
  isSelected?: boolean;
}

const ThemeCard = ({ 
  id, 
  name, 
  englishName, 
  description, 
  colorClass, 
  iconClass,
  onSelect,
  isSelected = false
}: ThemeCardProps) => {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer ${
        isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
      }`}
      onClick={() => onSelect(id)}
    >
      <div className={`h-36 ${colorClass} flex items-center justify-center`}>
        <span className={`text-4xl ${iconClass}`}>{iconClass}</span>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{englishName}</p>
        <p className="mt-2 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ThemeCard;
