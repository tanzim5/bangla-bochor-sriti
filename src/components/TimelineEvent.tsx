
import { Card, CardContent } from "@/components/ui/card";

interface TimelineEventProps {
  name: string;
  englishName: string;
  description: string;
  month: number; 
  day: number;
  duration?: number;
  isUpcoming?: boolean;
}

const TimelineEvent = ({ 
  name, 
  englishName, 
  description, 
  month, 
  day,
  duration = 1,
  isUpcoming = false
}: TimelineEventProps) => {
  return (
    <div className="relative mb-8 ml-6">
      {/* Timeline dot */}
      <div className={`absolute -left-6 mt-1.5 h-4 w-4 rounded-full border border-bengali-orange ${
        isUpcoming ? 'bg-white' : 'bg-bengali-orange'
      }`}></div>
      
      {/* Timeline line */}
      <div className="absolute -left-4 mt-1.5 h-full border-l border-dashed border-muted"></div>
      
      <Card className={`overflow-hidden transition-all ${
        isUpcoming ? 'opacity-70' : 'shadow-md'
      }`}>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{englishName}</p>
          <p className="mt-1 text-sm">{description}</p>
          {duration > 1 && (
            <p className="mt-1 text-xs text-bengali-teal">
              {duration} দিনের উৎসব
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineEvent;
