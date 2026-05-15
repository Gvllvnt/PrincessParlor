import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://princess-parlor.vercel.app",
      lastModified: new Date(),
    },
  ];
}