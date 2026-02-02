import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string;
}

export function SEO({ 
  title = "FitShark – Lightweight Workout & Cardio Tracker",
  description = "FitShark is a simple iOS workout and cardio tracker with a free exercise library. Your data stays on your device.",
  path = "/",
  keywords = "FitShark, workout tracker, cardio tracker, fitness app, iOS fitness, exercise library, local storage fitness"
}: SEOProps) {
  const siteUrl = "https://fitshark.app";
  const fullUrl = `${siteUrl}${path}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FitShark",
    "description": description,
    "url": siteUrl,
    "applicationCategory": "HealthAndFitnessApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Antonio Moya Valls"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="google-site-verification" content="b00rmJ7XFjUxJcLP9svgTvi_zuFidgDIsTQAia4vu6M" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FF6B35" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="canonical" href={fullUrl} />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="FitShark" />
      <meta property="og:image" content={`${siteUrl}/favicon.png`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/favicon.png`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
