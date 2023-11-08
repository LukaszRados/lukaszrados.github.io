<template>
  List of blog posts
  <BlogListItem v-for="article in articles" :key="article._path" :post="article" />
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types/blog";

type Props = {
  data: BlogPost[];
};

const props = defineProps<Props>();
const articles = computed(() => props.data);
</script>
