import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Play, Clock, Star, Trophy, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Lessons = () => {
  const lessonCategories = [
    {
      title: "Beginner Lessons",
      description: "Start your piano journey with basic fundamentals",
      icon: BookOpen,
      color: "bg-green-100 text-green-800",
      lessons: [
        {
          title: "Piano Basics",
          duration: "10 min",
          difficulty: "Beginner",
          completed: true,
        },
        {
          title: "Hand Position",
          duration: "8 min",
          difficulty: "Beginner",
          completed: true,
        },
        {
          title: "Basic Scales",
          duration: "15 min",
          difficulty: "Beginner",
          completed: false,
        },
        {
          title: "Simple Melodies",
          duration: "12 min",
          difficulty: "Beginner",
          completed: false,
        },
      ],
    },
    {
      title: "Intermediate Skills",
      description: "Build upon your foundation with more complex techniques",
      icon: Music,
      color: "bg-blue-100 text-blue-800",
      lessons: [
        {
          title: "Chord Progressions",
          duration: "20 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          title: "Rhythm Patterns",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          title: "Major & Minor Scales",
          duration: "25 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          title: "Popular Songs",
          duration: "30 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },
    {
      title: "Advanced Techniques",
      description: "Master advanced piano skills and techniques",
      icon: Trophy,
      color: "bg-purple-100 text-purple-800",
      lessons: [
        {
          title: "Jazz Improvisation",
          duration: "35 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          title: "Classical Pieces",
          duration: "45 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          title: "Advanced Chords",
          duration: "30 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          title: "Performance Tips",
          duration: "25 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const totalLessons = lessonCategories.reduce(
    (acc, cat) => acc + cat.lessons.length,
    0,
  );
  const completedLessons = lessonCategories.reduce(
    (acc, cat) => acc + cat.lessons.filter((lesson) => lesson.completed).length,
    0,
  );
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Piano Lessons
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn to play piano with our comprehensive lessons designed for all
            skill levels
          </p>

          {/* Progress Overview */}
          <Card className="max-w-md mx-auto border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Lessons Completed</span>
                  <span className="font-semibold">
                    {completedLessons}/{totalLessons}
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">
                  {Math.round(progressPercentage)}% Complete
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lesson Categories */}
        <div className="space-y-12">
          {lessonCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {category.lessons.map((lesson, lessonIndex) => (
                    <Card
                      key={lessonIndex}
                      className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                        lesson.completed ? "ring-2 ring-green-200" : ""
                      }`}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <CardTitle className="text-lg flex items-center gap-2">
                              {lesson.completed && (
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              )}
                              {lesson.title}
                            </CardTitle>
                            <CardDescription className="mt-2">
                              Practice {lesson.title.toLowerCase()} techniques
                              and improve your skills
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {lesson.duration}
                            </div>
                          </div>
                          <Badge
                            className={getDifficultyColor(lesson.difficulty)}
                          >
                            {lesson.difficulty}
                          </Badge>
                        </div>

                        <div className="flex gap-2">
                          {lesson.completed ? (
                            <Button
                              variant="outline"
                              className="flex-1"
                              disabled
                            >
                              <Star className="mr-2 h-4 w-4" />
                              Completed
                            </Button>
                          ) : (
                            <Link to="/piano" className="flex-1">
                              <Button className="w-full">
                                <Play className="mr-2 h-4 w-4" />
                                Start Lesson
                              </Button>
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-gradient-to-r from-primary to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
              <p className="text-lg opacity-90 mb-6">
                Head over to the piano and practice what you've learned!
              </p>
              <Link to="/piano">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-3"
                >
                  <Music className="mr-2 h-5 w-5" />
                  Open Piano
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
