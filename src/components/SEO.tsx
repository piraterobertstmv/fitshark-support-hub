import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export function SEO({ 
  title = "FitShark – Lightweight Workout & Cardio Tracker",
  description = "FitShark is a simple iOS workout and cardio tracker with a free exercise library. Your data stays on your device.",
  path = "/"
}: SEOProps) {
  const siteUrl = "https://fitshark.app";
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
