<template>
  <header class="header" :class="{ hidden: !showNavigation }">
    <NuxtLink :to="localePath('/')" class="logo">Łukasz Rados</NuxtLink>
    <TopNavigationItems />
  </header>
</template>

<script lang="ts" setup>
const ALWAYS_VISIBLE_PX = 50;
const MIN_CHANGE_PX = 80;

const currentPosition = ref(0);
const previousPosition = ref(0);
const showNavigation = ref(true);

const localePath = useLocalePath();

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
</style>
