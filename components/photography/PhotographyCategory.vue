<template>
  <div class="wrapper">
    <header class="header">
      <NuxtLink :to="localePath('/')" class="back">
        <Arrow direction="left" />
        {{ $t("common.back") }}
      </NuxtLink>
      <h1 class="title">{{ title }}</h1>
    </header>

    <div class="photos">
      <PhotoItem
        v-for="photo in category.photos"
        :key="photo.url"
        :photo="photo"
        @click="open(photo)"
      />
    </div>

    <Lightbox
      v-if="currentPhoto && isLightboxOpen"
      :photo="currentPhoto"
      :photos="category.photos"
      @close="close"
    />
  </div>
</template>

<script setup lang="ts">
import type { PhotographyItem, PhotographyCategory } from "@/types/photography";

type Props = {
  category: PhotographyCategory;
};

const props = defineProps<Props>();

const localePath = useLocalePath();
const { locale } = useI18n();
const title = computed(() =>
  locale.value === "en" ? props.category.title_en : props.category.title_pl
);

const isLightboxOpen = ref(false);
const currentPhoto = ref<PhotographyItem | undefined>(undefined);

function open(photo: PhotographyItem) {
  currentPhoto.value = photo;
  isLightboxOpen.value = true;
}

function close() {
  isLightboxOpen.value = false;
}
</script>

<style lang="postcss" scoped>
.wrapper {
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 900px) {
  .wrapper {
    max-width: 800px;
    padding: 0 32px;
  }
}

@media (min-width: 1200px) {
  .wrapper {
    margin: 48px auto;
    max-width: 1700px;
  }
}

.title {
  font-size: 1.5rem;
  font-weight: normal;
  margin: 16px 0 32px;
}

.header {
  text-align: center;
}

@media screen and (min-width: 900px) {
  .title {
    font-size: 3rem;
    margin-bottom: 64px;
  }
}

.photos {
  align-items: center;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
}

.back {
  font-size: 0;
}

@media (min-width: 500px) {
  .photos {
    gap: 48px;
  }
}

@media (min-width: 900px) {
  .photos {
    gap: 64px;
    margin: 48px 0;
  }
}

@media (min-width: 1200px) {
  .photos {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
