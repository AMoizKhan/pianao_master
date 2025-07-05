import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Music, Home, BookOpen, Settings, Info } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/piano", label: "Piano", icon: Music },
    { href: "/lessons", label: "Lessons", icon: BookOpen },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/about", label: "About", icon: Info },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              PianoMaster
            </span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex space-x-2">
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <Link key={item.href} to={item.href}>
                  <Button variant={isActive ? "default" : "ghost"} size="sm">
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
