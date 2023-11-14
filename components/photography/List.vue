<template>
  <div class="list">
    <PhotographyListItem v-for="category in categories" :key="category.title_en" :category="category" />
  </div>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "@/types/photography";

type Props = {
  categories: PhotographyCategory[];
};

const props = defineProps<Props>();
</script>

<style lang="postcss" scoped>
.list {
  margin: 0 auto;
  max-width: 1440px;
}
</style>
