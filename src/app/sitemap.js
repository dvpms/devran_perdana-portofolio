export default function sitemap() {
  const baseUrl = "https://devranperdana.my.id";

  const routes = ["", "/about", "/projects", "/resume"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
