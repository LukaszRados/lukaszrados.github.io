<template>
  <div>
    <div class="photo" :class="{ horizontal: isVertical }">
      <a :href="photoUrl" class="wrapper" :style="paddingBottom">
        <img :src="thumbnailUrl" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PhotographyItem } from "@/types/photography";
import { buildImageUrl } from "@/helpers/image-url";

type Props = {
  photo: PhotographyItem;
};

const props = defineProps<Props>();
const { photo } = toRefs(props);

const isVertical = computed(() => photo.value.width < photo.value.height);
const thumbnailUrl = computed(() =>
  buildImageUrl(photo.value.url, "c_limit,h_410,w_410")
);
const photoUrl = computed(() => buildImageUrl(photo.value.url));
const paddingBottom = computed(
  () =>
    `padding-bottom: ${Math.round(
      (photo.value.height / photo.value.width) * 100
    )}%`
);
</script>

<style lang="postcss" scoped>
.photo {
  &.horizontal {
    margin: 0 auto;
    width: 66%;
  }
}

.wrapper {
  background: var(--image-background-color);
  display: block;
  height: 0;
  position: relative;

  img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
