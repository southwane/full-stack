export default function manifest() {
  return {
    name: "BLOG DEV",
    short_name: "Developing the web.",
    description: "Web development learning resources.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
