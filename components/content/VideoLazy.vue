<template>
  <picture class="video" ref="element">
    <div class="spacing"></div>
    <iframe
      :src="`https://www.youtube-nocookie.com/embed/${id}`"
      frameborder="0"
      allowfullscreen
      v-if="isLoaded"
    ></iframe>
  </picture>
</template>

<script lang="ts" setup>
type Props = {
  id: string;
};

const props = defineProps<Props>();
const { id } = toRefs(props);

const isLoaded = ref(false);
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
.video {
  background-color: var(--image-background-color);
  display: block;
  margin: 16px auto;
  max-width: 1200px;
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
    padding-bottom: 56.25%; /* 16/9 */
  }

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
