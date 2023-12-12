<template>
  <Post :post="(article as unknown as BlogPost)" />
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/blog';
import { getSlugFromPath } from '@/helpers/get-slug';
import { buildImageUrl } from '~/helpers/image-url';

const route = useRoute()
const { locale } = useI18n()
const slug = getSlugFromPath(route.path)

const article = await queryContent<BlogPost>("blog")
  .where({ _path: `/blog/${locale.value}/${slug}` })
  .findOne();

const { t } = useI18n();

useSeoMeta({
  title: `${article.title} - ${t("common.title")}`,
  ogTitle: `${article.title} - ${t("common.title")}`,
  description: article.intro,
  ogDescription: article.intro,
  ogImage: buildImageUrl(article.background, "c_fill,h_630,w_1200"),
});
</script>
