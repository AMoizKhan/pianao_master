import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  Keyboard,
  Volume2,
  Headphones,
  BookOpen,
  Settings,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Music,
      title: "Interactive Piano",
      description:
        "Play beautiful music with your computer keyboard or mouse clicks",
    },
    {
      icon: Keyboard,
      title: "Keyboard Support",
      description:
        "Use your physical keyboard to play notes naturally and intuitively",
    },
    {
      icon: Volume2,
      title: "High-Quality Audio",
      description:
        "Experience rich, realistic piano sounds with our audio engine",
    },
    {
      icon: BookOpen,
      title: "Piano Lessons",
      description: "Learn to play with our interactive lessons and tutorials",
    },
    {
      icon: Settings,
      title: "Customizable",
      description:
        "Adjust settings, key mappings, and audio preferences to your liking",
    },
    {
      icon: Headphones,
      title: "Studio Experience",
      description: "Professional-grade audio experience right in your browser",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge
              variant="secondary"
              className="text-primary bg-primary/10 border-primary/20"
            >
              🎹 Musical Instrument
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Create an <span className="text-primary">Interactive Piano</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Create an interactive piano that you can use to play music{" "}
            <strong>with your keyboard</strong>. Experience the joy of making
            music with our beautifully crafted virtual piano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/piano">
              <Button size="lg" className="text-lg px-8 py-6">
                <Music className="mr-2 h-5 w-5" />
                Start Playing
              </Button>
            </Link>
            <Link to="/lessons">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <BookOpen className="mr-2 h-5 w-5" />
                Learn Piano
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Make Music
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our interactive piano comes with all the features you need to
              start your musical journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary to-blue-600 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Playing?
              </h3>
              <p className="text-xl opacity-90 mb-8">
                Jump into our interactive piano and start making beautiful music
                today!
              </p>
              <Link to="/piano">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  <Music className="mr-2 h-5 w-5" />
                  Launch Piano
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
