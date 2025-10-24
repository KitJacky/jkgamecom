import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SamsungHelloEnglishEffect } from "@/components/ui/hello-vietnamese-effect";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, hsl(var(--background)) 50%, hsl(var(--primary) / 0.1) 100%)",
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4 text-center">
        {/* Animated hello effect */}
        <div className="mb-8">
          <SamsungHelloEnglishEffect speed={1.2} className="text-primary" />
        </div>

        {/* 404 Error content */}
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-foreground animate-fade-in">404</h1>
          <p className="text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Oops! Page not found
          </p>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Return home button */}
        <Button 
          asChild 
          size="lg"
          className="animate-fade-in mt-8 group"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="/" className="flex items-center gap-2">
            <Home className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Return to JKGAME.com
          </a>
        </Button>

        {/* Tech accent elements */}
        <div className="absolute top-10 left-10 h-20 w-20 border-l-2 border-t-2 border-primary/20 animate-fade-in" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-10 right-10 h-20 w-20 border-r-2 border-b-2 border-primary/20 animate-fade-in" style={{ animationDelay: "0.5s" }} />
      </div>
    </div>
  );
};

export default NotFound;
