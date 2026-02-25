import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: "https://gojed.pl",
    sitemap: "https://gojed.pl/sitemap.xml",
  };
}
