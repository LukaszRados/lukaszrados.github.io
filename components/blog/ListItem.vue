<template>
  <div>
    <h1>
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </h1>
    <p>{{ post.date }}</p>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types/blog";

type Props = {
  post: BlogPost;
};

defineProps<Props>();
</script>
