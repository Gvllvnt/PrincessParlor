import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dezmakgroup.vercel.app",
      lastModified: new Date(),
    },
  ];
}