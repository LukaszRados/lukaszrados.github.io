<template>
  <PhotographyCategory :category="category" />
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "@/types/photography";
import { getSlugFromPath } from "~/helpers/get-slug";
import { buildImageUrl } from "~/helpers/image-url";

const route = useRoute();
const slug = getSlugFromPath(route.path);

const category = await queryContent<PhotographyCategory>("photography")
  .where({ _path: `/photography/${slug}` })
  .findOne();

const { t } = useI18n();

const { locale } = useI18n();
const title = computed(() =>
  locale.value === "en" ? category.title_en : category.title_pl
);

useSeoMeta({
  title: `${title.value} - ${t("common.title")}`,
  ogTitle: `${title.value} - ${t("common.title")}`,
  ogImage: buildImageUrl(category.background, "c_fill,h_630,w_1200"),
});
</script>
