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
  Target,
  ArrowRight,
  Check
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

const mainFeatures = [
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

const featureTabs = [
  {
    label: "Log Workouts",
    icon: Dumbbell,
    title: "Strength Training Simplified",
    description: "Create structured workout plans with exercises from our comprehensive library. Track sets, reps, and weights effortlessly.",
  },
  {
    label: "Track Cardio",
    icon: Activity,
    title: "Cardio Performance Tracking",
    description: "Log cardio sessions with duration, distance, calories burned, and heart rate. Monitor your endurance progress over time.",
  },
  {
    label: "View Insights",
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "See your weekly totals, current streaks, and recent activity. Visualize your fitness journey with powerful insights.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Layout>
      <SEO />
      
      {/* Hero Section with Background */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/5 to-background -z-10" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 text-sm font-medium border border-primary/20">
              <Sparkles size={16} />
              Fitness Tracking for Everyone
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
              Train <span className="text-gradient-orange">consistently.</span>
              <br />
              Track <span className="text-gradient-orange">simply.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
              FitShark is the lightweight iOS fitness tracker built for serious athletes. 
              Log workouts, track cardio, monitor progress—all with complete privacy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/support" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/privacy">
                  <Lock size={20} />
                  Learn About Privacy
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-border/30 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-muted-foreground">Local Storage</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">Free</p>
                <p className="text-muted-foreground">Core Features</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">iOS</p>
                <p className="text-muted-foreground">Native App</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 md:py-32 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Core Features</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Everything You Need to Train Better
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful tools for serious fitness enthusiasts who want simplicity, privacy, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-8 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6 shadow-glow-orange group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tabs Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">How It Works</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Simple, Powerful Tracking
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-12">
            {featureTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-glow-orange"
                    : "bg-card/50 text-muted-foreground hover:bg-card"
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  {React.createElement(featureTabs[activeTab].icon, { size: 16 })}
                  <span className="text-sm font-medium">{featureTabs[activeTab].label}</span>
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-6">
                  {featureTabs[activeTab].title}
                </h3>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {featureTabs[activeTab].description}
                </p>
                <ul className="space-y-4">
                  {["Quick setup", "Real-time tracking", "Instant insights"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:flex justify-center">
                <img 
                  src={screenshots[activeTab].src} 
                  alt={screenshots[activeTab].alt}
                  className="w-full max-w-sm rounded-3xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FitShark */}
      <section className="py-20 md:py-32 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Why FitShark</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Privacy. Speed. Simplicity.
            </h2>
            <p className="text-xl text-muted-foreground">
              Built by fitness enthusiasts, for fitness enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-8 hover-lift relative group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">App Interface</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Designed for Focus
            </h2>
            <p className="text-xl text-muted-foreground">
              Clean, intuitive interface that gets out of your way
            </p>
          </div>

          {/* Screenshots Gallery */}
          <div className="flex justify-center gap-6 overflow-x-auto pb-6 px-4 -mx-4 md:mx-0 scrollbar-hide snap-x snap-mandatory">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 md:w-56 lg:w-64 snap-center"
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

      {/* Privacy CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl mx-4 md:mx-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8">
              <Shield size={40} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Privacy is Sacred
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              All your workout and cardio data stays on your device. No servers, no tracking, 
              no data sharing. Your fitness journey is yours alone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/privacy" className="flex items-center gap-2">
                  Read Privacy Policy
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Features Teaser */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-8">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pro Features on the Horizon
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              We're building advanced analytics, custom reports, and more powerful insights. 
              Built on the same principles of privacy and simplicity you trust.
            </p>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Heart size={20} className="text-primary" />
              <span className="text-lg">Built with care by an indie developer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background rounded-3xl mx-4 md:mx-6 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Fitness Journey Today
            </h2>
            <p className="text-xl text-background/80 mb-12">
              Download FitShark from the App Store and begin tracking with privacy, simplicity, and power.
            </p>
            <Button size="xl" variant="hero" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/support" className="flex items-center gap-2">
                Download Now
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import React from 'react';
