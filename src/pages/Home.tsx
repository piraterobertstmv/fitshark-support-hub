import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { 
  Dumbbell, 
  Activity, 
  TrendingUp, 
  Shield, 
  Sparkles,
  Search,
  Heart,
  Lock,
  Zap,
  Target
} from "lucide-react";

// App Screenshots
import screenshotHome from "@/assets/screenshots/screenshot-home.png";
import screenshotExercises from "@/assets/screenshots/screenshot-exercises.png";
import screenshotCardio from "@/assets/screenshots/screenshot-cardio.png";
import screenshotInsights from "@/assets/screenshots/screenshot-insights.png";
import screenshotProfile from "@/assets/screenshots/screenshot-profile.png";

const screenshots = [
  { src: screenshotHome, alt: "FitShark Home Screen with workout stats" },
  { src: screenshotExercises, alt: "Exercise library with search and filters" },
  { src: screenshotCardio, alt: "Cardio logging with duration and heart rate" },
  { src: screenshotInsights, alt: "Insights screen with streaks and progress" },
  { src: screenshotProfile, alt: "Profile with Pro coming soon and settings" },
];

const features = [
  {
    icon: Search,
    title: "Browse Exercises",
    description: "Free searchable exercise library with detailed movements",
  },
  {
    icon: Dumbbell,
    title: "Log Workouts",
    description: "Create and track your workout sessions quickly",
  },
  {
    icon: Activity,
    title: "Log Cardio",
    description: "Track duration, distance, calories, and heart rate",
  },
  {
    icon: TrendingUp,
    title: "See Your Progress",
    description: "Weekly totals, streaks, and recent activity insights",
  },
];

const benefits = [
  {
    icon: Lock,
    title: "Your Data, Your Device",
    description: "Everything stays on your iPhone. No cloud sync, no data sharing, complete privacy.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant access to your workout history and exercise library without waiting.",
  },
  {
    icon: Target,
    title: "Stay Consistent",
    description: "Weekly streaks and progress insights keep you motivated to train regularly.",
  },
];

export default function Home() {
  return (
    <Layout>
      <SEO />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium">
              <Zap size={16} />
              Fitness Tracking, Simplified
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Train consistently.{" "}
              <span className="text-gradient-orange">Track it simply.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              FitShark is a lightweight iOS workout and cardio tracker with a free exercise library. 
              Your data stays on your device—no accounts, no ads, just fitness tracking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/support">Get Support</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/privacy">
                  <Lock size={20} />
                  Privacy & Data
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why choose FitShark?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built for fitness enthusiasts who value privacy and simplicity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-8 hover-lift animate-fade-in relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center mb-4 shadow-glow-orange">
                    <benefit.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What you can do
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Everything you need to track workouts and cardio in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center mb-4 shadow-glow-orange">
                  <feature.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Designed for simplicity
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A clean, native iOS experience that gets out of your way
            </p>
          </div>

          {/* Screenshots Gallery */}
          <div className="flex justify-center gap-4 md:gap-6 overflow-x-auto pb-6 px-4 -mx-4 md:mx-0 scrollbar-hide snap-x snap-mandatory">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 md:w-52 lg:w-60 snap-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-card-elevated rounded-3xl p-2 hover-lift">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-auto rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Highlight */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card-elevated p-8 md:p-10 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center mx-auto mb-6">
                  <Shield size={32} className="text-success" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Your data stays on your phone
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  FitShark stores all workout and cardio logs locally on your device. 
                  Your data is never uploaded, sold, or shared with anyone. 
                  You have complete control and privacy.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/privacy">Read Privacy Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Teaser */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pro features on the way
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Advanced analytics, custom reports, and more are coming in a future update. 
              Stay tuned for exciting new features built on the solid foundation 
              of privacy and simplicity you trust.
            </p>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Heart size={18} className="text-primary" />
              <span className="text-sm">Built with care by an indie developer</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
