<template>
  <ContentQuery :path="filename" find="one" v-slot="{ data }">
    <Post :post="(data as unknown as BlogPost)" />
  </ContentQuery>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/blog';
import { getSlugFromPath } from '@/helpers/get-slug';

const route = useRoute()
const { locale } = useI18n()
const slug = getSlugFromPath(route.path)
const filename = `blog/${locale.value}/${slug}`
</script>
