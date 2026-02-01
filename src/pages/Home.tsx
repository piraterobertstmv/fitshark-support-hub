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
  Heart
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
              Train consistently.{" "}
              <span className="text-gradient-orange">Track it simply.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in animation-delay-100 max-w-2xl mx-auto">
              FitShark is a lightweight workout + cardio tracker with a free exercise library. 
              Your data stays on your device.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-200">
              <Button variant="hero" size="xl" asChild>
                <Link to="/support">Get Support</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/privacy">
                  <Shield size={20} />
                  Privacy & Data
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What you can do
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Simple tools to keep your fitness on track
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
      <section className="py-20 md:py-28 bg-card/30">
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
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card-elevated p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-success" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Your data stays on your phone
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                FitShark stores workout and cardio logs locally on your device. 
                Your data is not sold or shared with anyone.
              </p>
              <Button variant="outline" asChild>
                <Link to="/privacy">Read Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Teaser */}
      <section className="py-20 md:py-28 bg-card/30">
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
              Advanced analytics and more are coming in a future update. 
              Stay tuned for exciting new features.
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
