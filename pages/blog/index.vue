<template>
  <ContentQuery
    path="/blog"
    :only="['title', 'excerpt', 'date', '_path']"
    :sort="{ date: -1 }"
    v-slot="{ data }"
  >
    <BlogList :data="(data as unknown as BlogPost[])" />
  </ContentQuery>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog';
</script>
