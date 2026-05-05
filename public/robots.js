export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://iq-digital-services.vercel.app/sitemap.js",
  };
}
