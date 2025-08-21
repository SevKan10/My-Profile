import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  publishDate: string;
  readTime: string;
  url?: string;
  category?: string;
}

export const ArticleCard = ({ title, excerpt, image, publishDate, readTime, url, category }: ArticleCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border/50 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        {category && (
          <span className="inline-block px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md mb-2">
            {category}
          </span>
        )}
        
        <h3 className="text-xl font-semibold mb-2 text-foreground line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        
        {url && (
          <Button size="sm" variant="outline" className="w-full" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Read Article
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
