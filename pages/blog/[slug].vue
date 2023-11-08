<template>
  <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
    <BlogPost :post="(data as unknown as BlogPost)" />
  </ContentQuery>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/blog';
</script>
