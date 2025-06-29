<template>
  <div class="list">
    <CategoryListItem
      v-for="category in categories"
      :key="category.title_en"
      :category="category"
    />
  </div>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "~/types/photography";
import { buildImageUrl } from "~/helpers/image-url";

const categories = await queryContent<PhotographyCategory>("photography")
  .sort({ order: 1 })
  .find();

const { t } = useI18n();

useSeoMeta({
  title: `${t("home.title")} - ${t("common.title")}`,
  ogTitle: `${t("home.title")} - ${t("common.title")}`,
  description: t("home.description"),
  ogDescription: t("home.description"),
  ogImage: buildImageUrl(t("common.og_image"), "c_fill,h_630,w_1200"),
});
</script>

<style lang="postcss" scoped>
.list {
  display: grid;
  gap: 32px;
  margin: 0 auto;
  max-width: var(--max-width-large);
  padding: 0 16px;
}

@media (min-width: 700px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 16px;
  }
}

@media (min-width: 900px) {
  .list {
    padding: 0 32px;
  }
}

@media (min-width: 1200px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
    margin: 48px auto;
    gap: 48px 24px;
  }
}
</style>
