<template>
  <picture
    class="photo"
    :class="isHorizontal ? 'horizontal' : 'vertical'"
    ref="element"
  >
    <div class="spacing" :style="`padding-bottom: ${padding}%`"></div>
    <img v-if="isLoaded" :src="photoUrl" alt="" />
  </picture>
</template>

<script lang="ts" setup>
import { buildImageUrl } from "@/helpers/image-url";

type Props = {
  src: string;
  padding: string;
};

const props = defineProps<Props>();
const { padding, src } = toRefs(props);

const isLoaded = ref(false);
const isHorizontal = computed(() => Number(padding.value) < 100);
const resizeParams = computed(() =>
  isHorizontal.value ? "f_auto,w_1500" : "f_auto,h_1200"
);
const photoUrl = computed(() =>
  src.value.startsWith("https://")
    ? src.value
    : buildImageUrl(src.value, resizeParams.value)
);

const element = ref<HTMLDivElement>();

function onScroll() {
  if (!element.value) return;

  const distanceFromEdge =
    element.value.getBoundingClientRect().top - window.innerHeight;
  if (distanceFromEdge < 500) {
    isLoaded.value = true;
    window.removeEventListener("scroll", onScroll);
  }
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="postcss" scoped>
.photo {
  background-color: var(--image-background-color);
  display: block;
  margin: 16px auto;
  position: relative;
  width: 100%;

  @media screen and (min-width: 900px) {
    margin: 32px auto;
  }

  @media screen and (min-width: 1200px) {
    margin: 48px auto;
  }

  .spacing {
    height: 0;
  }

  &.horizontal {
    max-width: 1500px;
  }

  &.vertical {
    max-width: 1000px;
  }

  img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
