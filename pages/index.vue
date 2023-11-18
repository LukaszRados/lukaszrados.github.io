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

const categories = await queryContent<PhotographyCategory>("photography")
  .sort({ order: 1 })
  .find();

const { t } = useI18n();

useSeoMeta({
  title: t("common.title"),
  ogTitle: t("common.title"),
  description: t("common.description"),
  ogDescription: t("common.description"),
  // ogImage: post.value.background,
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
    gap: 48px;
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
    gap: 96px;
  }
}
</style>
