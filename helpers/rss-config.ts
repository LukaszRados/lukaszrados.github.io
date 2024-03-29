// any because nuxt-feedme doesn't export types
export const rssConfigEnglish: any = {
  content: true,
  feed: {
    defaults: {
      link: "https://www.lukaszrados.pl/en/blog",
      title: "Łukasz Rados - Blog (in English)",
      description:
        "Blog about landscape photography, travelling and frontend development",
    },
  },
  item: {
    query: { where: { _dir: "en" }, sort: { published_at: -1 } },
    mapping: [
      [
        "link",
        "_path",
        (path: string) => {
          const parts = path.split('/')
          return `https://www.lukaszrados.pl/en/blog/${parts[parts.length - 1]}`;
        },
      ],
      ["description", "intro"],
      [
        "published",
        "published_at",
        (value: string) => (value ? new Date(value) : value),
      ],
      ["enclosure", "background", (path: string) => `https://res.cloudinary.com/lukaszrados/image/upload/c_fill,h_630,w_1200/${path}`]
    ],
  },
};

export const rssConfigPolish: any = {
  content: true,
  feed: {
    defaults: {
      link: "https://www.lukaszrados.pl/blog",
      title: "Łukasz Rados - Blog (po polsku)",
      description: "Blog o fotografii krajobrazowej, podróżach i programowaniu",
    },
  },
  item: {
    query: { where: { _dir: "pl" }, sort: { published_at: -1 } },
    mapping: [
      [
        "link",
        "_path",
        (path: string) => {
          const parts = path.split('/')
          return `https://www.lukaszrados.pl/blog/${parts[parts.length - 1]}`;
        },
      ],
      ["description", "intro"],
      [
        "published",
        "published_at",
        (value: string) => (value ? new Date(value) : value),
      ],
      ["enclosure", "background", (path: string) => `https://res.cloudinary.com/lukaszrados/image/upload/c_fill,h_630,w_1200/${path}`]
    ],
  },
};
