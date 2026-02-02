import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy – FitShark iOS App"
        description="Learn how FitShark protects your privacy. Your workout and cardio data stays on your device and is never sold or shared."
        path="/privacy"
        keywords="fitshark privacy, privacy policy, data protection, fitness app privacy, local storage, no data sharing"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-success" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Effective Date: February 1, 2026
              </p>
            </div>

            {/* Content */}
            <div className="glass-card p-8 md:p-10 space-y-8">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  FitShark ("we", "our", or "the app") is committed to protecting your privacy. 
                  This Privacy Policy explains how we handle information in connection with our 
                  iOS fitness tracking application.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Information We Store
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  FitShark stores the following information locally on your device:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Workout logs (exercises, sets, reps, weights)</li>
                  <li>Cardio session logs (type, duration, distance, calories, heart rate, notes)</li>
                  <li>App preferences and settings</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong className="text-foreground">This data is stored locally on your device and never leaves your phone.</strong>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  How We Use Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information stored on your device is used solely to provide app functionality, 
                  including displaying your workout history, calculating statistics, and showing 
                  your progress in the Insights screen. We do not access, collect, or process 
                  this data on any external servers.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Data Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  FitShark does not share, sell, rent, or trade your personal information with 
                  third parties. Your workout and cardio data remains exclusively on your device.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Analytics
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not collect analytics or usage data. We do not use any third-party 
                  analytics services to track your behavior within the app.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your data remains on your device until you choose to delete it by removing 
                  individual entries, clearing app data, or uninstalling the app. Since we 
                  do not store your data on external servers, we cannot recover it after deletion.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement reasonable technical measures to protect the data stored within 
                  the app. However, as your data is stored locally on your device, its security 
                  also depends on your device's own security settings (passcode, Face ID, etc.).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Future Account Features
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you choose to create an account in a future version of FitShark, we will 
                  update this Privacy Policy to reflect any additional data collection or 
                  processing that may be required for account-based features such as cloud 
                  sync or backup.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  FitShark is not directed at children under the age of 13. We do not knowingly 
                  collect personal information from children. If you believe we have inadvertently 
                  collected information from a child, please contact us so we can address the matter.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be 
                  posted within the app and on our website. Your continued use of FitShark 
                  after changes are posted constitutes your acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or your data, please contact:
                </p>
                <div className="mt-4 p-4 bg-card/50 rounded-xl">
                  <p className="text-foreground font-medium">Antonio Moya Valls</p>
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <a href="mailto:a.moya.valls@icloud.com" className="text-primary hover:underline">
                      a.moya.valls@icloud.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
