import { type MetadataRoute } from "next";

const createSiteUrl = (path: string): string => {
  return process.env.NEXT_PUBLIC_HOST_URL + path;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: createSiteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
