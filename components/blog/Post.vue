<template>
  <div>
    <pre>{{ post }}</pre>
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types/blog";

type Props = {
  post: BlogPost;
};

defineProps<Props>();
</script>
