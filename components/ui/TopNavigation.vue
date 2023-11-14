<template>
  <header class="header" :class="{ hidden: !showNavigation }">
    <NuxtLink to="/" class="logo">
      Łukasz Rados
      <transition name="sub">
        <div v-show="showSubheader">
          <div class="sub-content">
            Frontend Engineer<br />
            Landscape Photographer
          </div>
        </div>
      </transition>
    </NuxtLink>
    <UiTopNavigationItems />
  </header>
</template>

<script lang="ts" setup>
const ALWAYS_VISIBLE_PX = 50;
const MIN_CHANGE_PX = 80;

const currentPosition = ref(0);
const previousPosition = ref(0);
const showNavigation = ref(true);

const route = useRoute();
const showSubheader = computed(
  () => currentPosition.value < ALWAYS_VISIBLE_PX && route.name === "index"
);

const onScroll = () => {
  currentPosition.value = window.scrollY;

  if (Math.abs(window.scrollY - previousPosition.value) > MIN_CHANGE_PX) {
    showNavigation.value =
      (window.scrollY > 0 && window.scrollY < previousPosition.value) ||
      currentPosition.value < ALWAYS_VISIBLE_PX;
    previousPosition.value = window.scrollY;
  }
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="postcss" scoped>
.header {
  padding: 16px;
  position: sticky;
  transition: opacity 200ms var(--transition-timing),
    transform 200ms var(--transition-timing);
  top: 0;
  z-index: 1;

  @media (min-width: 900px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 32px;
  }

  &.hidden {
    opacity: 0;
    transform: translateY(-100px);
  }
}

.logo {
  color: var(--font-color);
  font-size: 1.5rem;
  line-height: 1;
  text-decoration: none;

  @media (min-width: 900px) {
    font-size: 2.25rem;
  }
}

.sub-enter-active,
.sub-leave-active {
  transition: all 300ms var(--transition-timing);
}

.sub-enter-from,
.sub-leave-to {
  height: 0;
  opacity: 0;
  overflow: hidden;
}

.sub-enter-to,
.sub-leave-from {
  height: 3rem;
}

.sub-content {
  height: 3rem;

  @media (min-width: 900px) {
    height: 4.5rem;
  }
}
</style>
