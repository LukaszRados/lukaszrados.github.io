// any because nuxt-feedme doesn't export types
export const rssConfigEnglish: any = {
  content: true,
  feed: {
    defaults: {
      link: "https://www.lukaszrados.pl/en/blog",
      title: "Łukasz Rados - Blog",
      description:
        "Blog about landscape photography, travelling and frontend development",
    },
  },
  item: {
    query: { where: { _dir: "en" } },
    mapping: [
      ["link", "_path"],
      ["description", "intro"],
    ],
  },
};

export const rssConfigPolish: any = {
  content: true,
  feed: {
    defaults: {
      link: "https://www.lukaszrados.pl/blog",
      title: "Łukasz Rados - Blog",
      description: "Blog o fotografii krajobrazowej, podróżach i programowaniu",
    },
  },
  item: {
    query: { where: { _dir: "pl" } },
    mapping: [
      ["link", "_path"],
      ["description", "intro"],
    ],
  },
};
