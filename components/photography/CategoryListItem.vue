<template>
  <div class="item">
    <NuxtLink :to="localePath(path)" class="image">
      <img :src="imageUrl" :alt="title" />
    </NuxtLink>
    <h2 class="title">
      <NuxtLink :to="localePath(path)" class="link">
        <span>{{ title }}</span>
        <Arrow direction="right" :animate="true" />
      </NuxtLink>
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "@/types/photography";
import { buildImageUrl } from "@/helpers/image-url";
import { getSlugFromPath } from "~/helpers/get-slug";

type Props = {
  category: PhotographyCategory;
};

const props = defineProps<Props>();
const imageUrl = computed(() =>
  buildImageUrl(props.category.background, "c_fill,h_300,w_600")
);

const { locale } = useI18n();
const localePath = useLocalePath();
const slug = getSlugFromPath(props.category._path);
const path = `/photography/${slug}`;

const title = computed(() =>
  locale.value === "en" ? props.category.title_en : props.category.title_pl
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
