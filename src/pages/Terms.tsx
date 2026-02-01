import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <SEO 
        title="Terms of Use – FitShark"
        description="Terms of Use for FitShark iOS fitness app. Read about license, user responsibilities, and limitations."
        path="/terms"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <FileText size={32} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Terms of Use
              </h1>
              <p className="text-muted-foreground">
                Effective Date: February 1, 2026
              </p>
            </div>

            {/* Content */}
            <div className="glass-card p-8 md:p-10 space-y-8">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Please read these Terms of Use ("Terms") carefully before using FitShark 
                  ("the app", "we", "our"). By downloading, installing, or using FitShark, 
                  you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  1. License to Use
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable, revocable license 
                  to use FitShark for your personal, non-commercial fitness tracking purposes, 
                  subject to these Terms. You may not copy, modify, distribute, sell, or lease 
                  any part of the app or its content.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  2. User Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using FitShark, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Use the app only for lawful purposes</li>
                  <li>Provide accurate information when using app features</li>
                  <li>Not attempt to interfere with or disrupt the app's functionality</li>
                  <li>Not reverse engineer, decompile, or disassemble any part of the app</li>
                  <li>Take responsibility for backing up your own device data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  3. Fitness Disclaimer
                </h2>
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl mb-4">
                  <p className="text-foreground font-medium">
                    FitShark is not a medical device and does not provide medical advice.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided in FitShark, including exercise descriptions and 
                  tracking features, is for general fitness information purposes only. It is 
                  not intended to be a substitute for professional medical advice, diagnosis, 
                  or treatment. Always consult with a qualified healthcare provider before 
                  beginning any exercise program or if you have any concerns about your health.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  4. No Guarantees
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We make no guarantees about specific fitness results from using FitShark. 
                  Individual results depend on many factors including your effort, consistency, 
                  nutrition, rest, and individual physiology. FitShark is a tool to help you 
                  track your activities, not a guarantee of any particular outcome.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  5. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by applicable law, FitShark and its developer 
                  shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages, including but not limited to loss of data, personal injury, 
                  or damages arising from your use of or inability to use the app. Our total 
                  liability shall not exceed the amount you paid for the app (if any).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  6. Changes to the App
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of FitShark 
                  at any time without prior notice. We may also update these Terms from time 
                  to time. Continued use of the app after changes constitutes acceptance of 
                  the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  7. Paid Features
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Paid features may be added to FitShark in future updates. Any pricing will 
                  be clearly displayed within the app before purchase, and all purchases will 
                  be processed through the Apple App Store according to their terms and 
                  conditions. We will update these Terms accordingly when paid features 
                  become available.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  8. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  FitShark and all its content, features, and functionality are owned by 
                  Antonio Moya Valls and are protected by international copyright, trademark, 
                  and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  9. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to FitShark immediately, without 
                  prior notice, for any reason, including breach of these Terms. Upon 
                  termination, your right to use the app will cease immediately.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  10. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws 
                  of Ireland, without regard to its conflict of law provisions. Any disputes 
                  arising from these Terms or your use of FitShark shall be subject to the 
                  exclusive jurisdiction of the courts of Ireland.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  11. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact:
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
