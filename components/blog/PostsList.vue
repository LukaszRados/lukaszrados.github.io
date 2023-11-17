<template>
  <div class="list">
    <PostListItem v-for="article in articles" :key="article._path" :post="article" />
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types/blog";

type Props = {
  data: BlogPost[];
};

const props = defineProps<Props>();
const articles = computed(() => props.data);
</script>

<style lang="postcss" scoped>
.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  margin: 0 16px;
}

@media (min-width: 700px) {
  .list {
    gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1000px;
    margin: 32px auto;
    padding: 0 16px;
  }
}

@media (min-width: 900px) {
  .list {
    padding: 0 32px;
  }
}

@media (min-width: 1200px) {
  .list {
    gap: 120px;
    margin: 48px auto;
    padding: 0 32px;
  }
}
</style>
