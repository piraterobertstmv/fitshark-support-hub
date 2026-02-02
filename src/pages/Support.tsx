import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, HelpCircle, Database, AlertTriangle, Sparkles } from "lucide-react";

const faqSections = [
  {
    title: "Getting Started",
    icon: HelpCircle,
    questions: [
      {
        q: "How do I start a workout?",
        a: "Open the app and tap the \"Workouts\" tab. Tap the \"+\" button to create a new workout. You can add exercises from our free library and start logging your sets and reps immediately.",
      },
      {
        q: "How do I add exercises to a workout?",
        a: "While creating or editing a workout, tap \"Add Exercise\" to browse our searchable exercise library. Find the exercise you want and tap it to add it to your workout.",
      },
      {
        q: "How do I log cardio?",
        a: "Navigate to the cardio section in the app. Tap the \"+\" button to log a new cardio session. Enter the type of activity, duration (in minutes), distance (in km), calories burned, average heart rate (in bpm), and any notes.",
      },
      {
        q: "What does Insights show?",
        a: "The Insights screen displays your workout streak, weekly totals, and recent activity. It helps you stay motivated by visualizing your consistency and progress over time.",
      },
    ],
  },
  {
    title: "Data & Storage",
    icon: Database,
    questions: [
      {
        q: "Where is my data stored?",
        a: "All your workout and cardio logs are stored locally on your device. Your data never leaves your phone and is not uploaded to any server.",
      },
      {
        q: "Will my data sync across devices?",
        a: "Not currently. Cross-device sync is a feature we're planning for future updates. For now, your data stays on the device where you created it.",
      },
      {
        q: "Can I export my data?",
        a: "Data export is not available in the current version but is planned for a future update. We understand how important your workout history is to you.",
      },
      {
        q: "I deleted the app—can I recover my data?",
        a: "Since data is stored locally on your device, deleting the app will remove your workout logs unless you have an iOS device backup. If you backed up your iPhone before deleting the app, restoring from that backup may recover your data.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    icon: AlertTriangle,
    questions: [
      {
        q: "The exercise list isn't loading or looks empty",
        a: "Try these steps: (1) Force close and restart the app, (2) Check for app updates in the App Store, (3) Verify your device has enough storage space, (4) As a last resort, reinstall the app—but note this will remove all locally stored workout data.",
      },
      {
        q: "Search isn't returning expected results",
        a: "Try using shorter keywords or check your spelling. If you've applied any filters, try clearing them. Exercise names may be listed differently than expected—try alternative terms (e.g., \"bench\" instead of \"bench press\").",
      },
      {
        q: "I can't save a workout or cardio session",
        a: "Ensure all required fields are filled in correctly. Try restarting the app and attempting to save again. If the issue persists, check for app updates in the App Store.",
      },
      {
        q: "The app crashes unexpectedly",
        a: "Try these steps: (1) Restart your iPhone, (2) Update FitShark to the latest version from the App Store, (3) Make sure your iOS is up to date, (4) If the problem continues, contact support with your device model and iOS version.",
      },
    ],
  },
  {
    title: "Pro & Subscription",
    icon: Sparkles,
    questions: [
      {
        q: "Is FitShark paid?",
        a: "FitShark's core features are completely free, including the exercise library, workout logging, cardio tracking, and insights. Pro features with advanced analytics are coming in a future update.",
      },
      {
        q: "When will Pro be available?",
        a: "Pro features are coming in a future update. We don't have an exact release date yet, but we're working hard to bring you advanced analytics and more. Any pricing will be clearly shown in the app before purchase.",
      },
    ],
  },
];

export default function Support() {
  return (
    <Layout>
      <SEO 
        title="Support & FAQ – FitShark Fitness Tracker Help"
        description="Get help with FitShark. Find answers to FAQs about workout logging, cardio tracking, data storage, troubleshooting, and privacy."
        path="/support"
        keywords="fitshark support, fitshark faq, workout tracker help, fitness app support, cardio logging, workout logging"
      />
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Support & FAQ
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions or contact us for personalized help.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="max-w-3xl mx-auto space-y-8">
            {faqSections.map((section) => (
              <div key={section.title} className="glass-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <section.icon size={20} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.title}-${index}`}
                      className="border border-border/30 rounded-xl px-4 bg-card/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4 text-foreground">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card-elevated p-8 md:p-12">
              <div className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mx-auto mb-6 shadow-glow-orange">
                <Mail size={28} className="text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need more help?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Email us and we'll get back to you within 24–48 hours.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:a.moya.valls@icloud.com">
                  <Mail size={18} />
                  Email Support
                </a>
              </Button>
              <p className="mt-6 text-sm text-muted-foreground">
                <a
                  href="mailto:a.moya.valls@icloud.com"
                  className="text-primary hover:underline"
                >
                  a.moya.valls@icloud.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
