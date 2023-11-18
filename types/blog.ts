export type BlogPost = {
  readonly title: string;
  readonly content: string;
  readonly intro: string;
  readonly background: string;
  readonly published_at: string;
  readonly category: string;
  readonly _path: string;
};

export type BlogPostItem = Pick<
  BlogPost,
  "title" | "intro" | "published_at" | "background" | "_path"
>;
