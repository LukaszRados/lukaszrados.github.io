<template>
  <div class="list">
    <PostListItem
      v-for="article in articles"
      :key="article._path"
      :post="article"
    />
  </div>
</template>

<script setup lang="ts">
import type { BlogPostItem } from "~/types/blog";
import { buildImageUrl } from "~/helpers/image-url";

const { locale } = useI18n();

const articles = await queryContent<BlogPostItem>(`blog/${locale.value}`)
  .sort({ published_at: -1 })
  .find();

const { t } = useI18n();

useSeoMeta({
  title: `${t("blog.title")} - ${t("common.title")}`,
  ogTitle: `${t("blog.title")} - ${t("common.title")}`,
  description: t("blog.description"),
  ogDescription: t("blog.description"),
  ogImage: buildImageUrl(t("common.og_image"), "c_fill,h_630,w_1200"),
});
</script>

<style lang="postcss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin: 0 16px;
}

@media (min-width: 700px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1000px;
    margin: 32px auto;
    padding: 0 16px;
  }
}

@media (min-width: 900px) {
  .list {
    padding: 0 32px;
  }
}

@media (min-width: 1200px) {
  .list {
    gap: 120px 48px;
    margin: 48px auto;
    padding: 0 32px;
  }
}
</style>
