<template>
  <div class="item">
    <NuxtLink :to="category._path" class="image">
      <img :src="imageUrl" :alt="category.title_en" />
    </NuxtLink>
    <h2 class="title">
      <NuxtLink :to="category._path" class="link">
        <span>{{ category.title_en }}</span>
        <UiArrow direction="right" />
      </NuxtLink>
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "@/types/photography";
import { buildImageUrl } from "@/helpers/image-url";

type Props = {
  category: PhotographyCategory;
};

const props = defineProps<Props>();
const imageUrl = computed(() =>
  buildImageUrl(props.category.background, "c_fill,h_300,w_600")
);
</script>

<style lang="postcss" scoped>
.image {
  background: var(--image-background-color);
  display: block;
  margin-bottom: 12px;
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;

  img {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.title {
  font-size: 1.25rem;
  font-weight: normal;
  margin: 0;
}

.link {
  align-items: center;
  color: inherit;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  text-decoration: none;
}
</style>
