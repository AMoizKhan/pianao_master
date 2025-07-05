import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, Code, Heart, Github, Mail, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      title: "Interactive Piano Interface",
      description:
        "Beautiful, responsive piano interface that works with mouse and keyboard input",
      icon: "🎹",
    },
    {
      title: "Keyboard Support",
      description:
        "Play piano using your computer keyboard with intuitive key mappings",
      icon: "⌨️",
    },
    {
      title: "Real-time Audio",
      description:
        "High-quality audio synthesis using Web Audio API for realistic piano sounds",
      icon: "🔊",
    },
    {
      title: "Educational Content",
      description: "Comprehensive lessons for beginners to advanced players",
      icon: "📚",
    },
    {
      title: "Customizable Settings",
      description:
        "Personalize your experience with audio, keyboard, and display preferences",
      icon: "⚙️",
    },
    {
      title: "Progressive Web App",
      description:
        "Works offline and can be installed on your device like a native app",
      icon: "📱",
    },
  ];

  const technologies = [
    "React 18",
    "TypeScript",
    "Vite",
    "TailwindCSS",
    "Web Audio API",
    "React Router",
    "React Hotkeys Hook",
    "Radix UI",
    "Express.js",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About PianoMaster
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern, interactive piano application built for music lovers,
            students, and educators
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Mission Statement */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Music className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                PianoMaster aims to make music education accessible to everyone.
                Whether you're a complete beginner or an experienced musician,
                our interactive piano provides a platform for learning,
                practicing, and creating beautiful music right in your browser.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Built With Modern Technology
              </CardTitle>
              <CardDescription>
                PianoMaster is built using cutting-edge web technologies for
                optimal performance and user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>
                Understanding the technology behind PianoMaster
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Audio Synthesis</h3>
                  <p className="text-muted-foreground">
                    We use the Web Audio API to generate realistic piano sounds
                    in real-time. Each note is synthesized using oscillators
                    with carefully tuned frequencies that match traditional
                    piano tuning.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Keyboard Input</h3>
                  <p className="text-muted-foreground">
                    The React Hotkeys Hook library enables seamless keyboard
                    input handling, allowing you to play piano using your
                    computer keyboard with minimal latency.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Responsive Design</h3>
                  <p className="text-muted-foreground">
                    Built with TailwindCSS and responsive design principles,
                    PianoMaster works perfectly on desktop, tablet, and mobile
                    devices.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Performance</h3>
                  <p className="text-muted-foreground">
                    Optimized with React 18, Vite, and modern JavaScript for
                    fast loading times and smooth interactions even on lower-end
                    devices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Open Source */}
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Made with ❤️ for the Music Community
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                PianoMaster is created with passion for music education and
                technology. We believe in making music accessible to everyone,
                regardless of their background or resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/piano">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-3"
                  >
                    <Music className="mr-2 h-5 w-5" />
                    Try It Now
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Share with Friends
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-6">
              Have feedback, suggestions, or questions? We'd love to hear from
              you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                View on GitHub
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send Feedback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
