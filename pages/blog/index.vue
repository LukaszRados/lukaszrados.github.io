<template>
  <ContentQuery
    path="/blog"
    :only="['title', 'intro', 'published_at', 'background', '_path']"
    :sort="{ published_at: -1 }"
    v-slot="{ data }"
  >
    <BlogList :data="(data as unknown as BlogPost[])" />
  </ContentQuery>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog';
</script>
