<template>
  <picture
    class="photo"
    :class="isHorizontal ? 'horizontal' : 'vertical'"
    ref="element"
  >
    <div class="spacing" :style="`padding-bottom: ${padding}%`"></div>
    <img v-if="isLoaded" :src="src" alt="" />
  </picture>
</template>

<script lang="ts" setup>
type Props = {
  src: string;
  padding: string;
};

const props = defineProps<Props>();
const { padding, src } = toRefs(props);

const isLoaded = ref(false);
const isHorizontal = computed(() => Number(padding.value) < 100);

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
    max-width: 1200px;
  }

  &.vertical {
    max-width: 900px;
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
