<template>
  <div class="list">
    <PhotographyListItem
      v-for="category in categories"
      :key="category.title_en"
      :category="category"
    />
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
  display: grid;
  gap: 32px;
  margin: 0 auto;
  max-width: var(--max-width-large);
  padding: 0 16px;
}

@media (min-width: 700px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
}

@media (min-width: 900px) {
  .list {
    padding: 0 32px;
  }
}

@media (min-width: 1200px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
    margin: 48px auto;
    gap: 96px;
  }
}
</style>
