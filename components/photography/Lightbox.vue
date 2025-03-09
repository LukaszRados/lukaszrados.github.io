<template>
  <div class="lightbox">
    <div v-if="index >= 0" @click="onClick">
      <div
        class="photo"
        :class="{
          previous: index === 0,
          current: index === 1,
          next: index === 2,
          transition: needsTransition,
        }"
        :style="`transform: translateX(${translate})`"
        v-for="(photo, index) in surroundingPhotos"
        :key="photo.url"
      >
        <img :src="buildImageUrl(photo.url, 'c_limit,h_1400,w_1400')" />
      </div>
    </div>
    <button
      type="button"
      class="close"
      @click="$emit('close')"
      :aria-label="$t('lightbox.close')"
    >
      <span></span>
    </button>
    <button
      type="button"
      class="arrow previous"
      @click="navigate(-1)"
      :aria-label="$t('lightbox.prev')"
    >
      <Arrow direction="left" :animate="false" />
    </button>
    <button
      type="button"
      class="arrow next"
      @click="navigate(1)"
      :aria-label="$t('lightbox.next')"
    >
      <Arrow direction="right" :animate="false" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { buildImageUrl } from "@/helpers/image-url";
import type { PhotographyItem } from "@/types/photography";

type Props = {
  photo: PhotographyItem;
  photos: PhotographyItem[];
};

const props = defineProps<Props>();
const emit = defineEmits(["close"]);
const { photo, photos } = toRefs(props);

const index = ref(-1);
const needsTransition = ref(false);
const translate = ref("0");
const touchDelta = ref(0);
const touchInitial = ref<number | undefined>(undefined);
const loadedPhotoUrls = ref<string[]>([]);
const allPhotoUrls = computed(() => photos.value.map((photo) => photo.url));

const surroundingPhotos = computed(() => {
  return [
    photos.value[fixIndex(index.value - 1)],
    photos.value[fixIndex(index.value)],
    photos.value[fixIndex(index.value + 1)],
  ];
});

function fixIndex(value: number) {
  if (value < 0) return photos.value.length + value;
  if (value >= photos.value.length) value = value % photos.value.length;
  return value;
}

function handleKeyPressed(event: KeyboardEvent) {
  switch (event.key) {
    case "Escape":
      emit("close");
      break;
    case "ArrowRight":
      navigate(1);
      break;
    case "ArrowLeft":
      navigate(-1);
      break;
  }
}

function navigate(direction: number) {
  if (needsTransition.value) return;

  needsTransition.value = true;
  translate.value = `${direction * -100}vw`;

  new Promise((resolve) => {
    setTimeout(resolve, 150);
  }).then(() => {
    needsTransition.value = false;
    nextTick().then(() => {
      translate.value = `0`;
      index.value = fixIndex(index.value + direction);
    });
  });
}

function onClick() {
  if (touchInitial.value || needsTransition.value) return;
  navigate(1);
}

function onTouchStart(event: TouchEvent) {
  touchDelta.value = 0;
  touchInitial.value = event.touches[0].clientX;
}

function onTouchMove(event: TouchEvent) {
  if (touchInitial.value === undefined) return;

  touchDelta.value = touchInitial.value - event.touches[0].clientX;
  translate.value = `${-touchDelta.value}px`;
}

function onTouchEnd() {
  if (touchInitial.value === undefined) return;
  if (Math.abs(touchDelta.value) < 50) {
    translate.value = "0";
    touchDelta.value = 0;
    touchInitial.value = undefined;
    return;
  }
  navigate(touchDelta.value > 0 ? 1 : -1);
}

function preloadPhotos() {
  [-2, -1, 0, 1, 2].map((i) => {
    const indexToPreload = fixIndex(index.value + i);
    preloadPhoto(photos.value[indexToPreload]);
  });
}

function preloadPhoto(photo: PhotographyItem) {
  if (loadedPhotoUrls.value.find((url) => url === photo.url)) return;

  const image = new Image();
  image.addEventListener("load", () => {
    loadedPhotoUrls.value.push(photo.url);
  });
  image.src = buildImageUrl(photo.url, "c_limit,h_1400,w_1400");
}

onMounted(() => {
  document.addEventListener("keyup", handleKeyPressed);
  document.addEventListener("touchstart", onTouchStart, {
    passive: true,
  });
  document.addEventListener("touchmove", onTouchMove, { passive: true });
  document.addEventListener("touchend", onTouchEnd, { passive: true });
  document.body.classList.add("overflow-hidden");
  index.value = allPhotoUrls.value.indexOf(photo.value.url);
  preloadPhotos();
});

onUnmounted(() => {
  document.body.classList.remove("overflow-hidden");
  document.removeEventListener("keyup", handleKeyPressed);
  document.removeEventListener("touchstart", onTouchStart);
  document.removeEventListener("touchmove", onTouchMove);
  document.removeEventListener("touchend", onTouchEnd);
});
</script>

<style lang="postcss" scoped>
.lightbox {
  background: var(--background-color);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
}

.photo {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;

  &.transition {
    transition: all 150ms var(--transition-timing);
  }

  &.current {
    left: 0;
  }

  &.previous {
    left: -100vw;
  }

  &.next {
    left: 100vw;
  }

  img {
    max-width: 100vw;
    max-height: 100vh;
  }
}

.arrow {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: none;
  height: 35px;
  padding: 0;
  position: fixed;
  top: 50%;
  z-index: 31;
  text-align: left;
  width: 80px;

  @media (hover) {
    display: block;
  }

  &.previous {
    left: 16px;
  }

  &.next {
    right: 16px;
  }
}

.close {
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center;
  right: 0;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 31;
  width: 48px;

  span {
    display: block;
    height: 16px;
    position: relative;
    width: 16px;

    &:after,
    &:before {
      background: var(--font-color);
      content: "";
      display: block;
      height: 1px;
      left: 0;
      position: absolute;
      width: 22px; /* 16px * sqrt(2) */
      transform-origin: left center;
    }

    &:before {
      top: 0;
      transform: rotate(45deg);
    }

    &:after {
      bottom: 0;
      transform: rotate(-45deg);
    }
  }
}
</style>
