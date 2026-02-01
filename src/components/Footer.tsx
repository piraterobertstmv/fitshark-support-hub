import { Link } from "react-router-dom";
import { Mail, Shield, FileText } from "lucide-react";
import fitsharkLogo from "@/assets/fitshark-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={fitsharkLogo} alt="FitShark" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold text-foreground">FitShark</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A lightweight workout and cardio tracker with a free exercise library. Your data stays on your device.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <Mail size={14} />
                Support
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <Shield size={14} />
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <FileText size={14} />
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <a
              href="mailto:a.moya.valls@icloud.com"
              className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
            >
              <Mail size={14} />
              a.moya.valls@icloud.com
            </a>
            <p className="text-muted-foreground text-sm">
              We typically respond within 24–48 hours.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Antonio Moya Valls. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
