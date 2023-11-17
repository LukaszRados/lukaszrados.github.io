<template>
  <nav class="navigation">
    <ul>
      <li class="item">
        <NuxtLink :to="localePath('/')" class="link">
          {{ $t("navigation.photography") }}
        </NuxtLink>
      </li>
      <li class="item">
        <NuxtLink :to="localePath('/blog')" class="link">
          {{ $t("navigation.blog") }}
        </NuxtLink>
      </li>
      <li class="item">
        <NuxtLink :to="localePath('/contact')" class="link">
          {{ $t("navigation.info") }}
        </NuxtLink>
      </li>
      <li class="item">
        <NuxtLink :to="switchLocalePath('en')" class="link">
          {{ $t("navigation.next_language") }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="postcss" scoped>
.navigation {
  font-size: 1.125rem;

  ul {
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding: 24px 0;

    @media (min-width: 900px) {
      gap: 24px;
    }
  }
}

@media (min-width: 900px) {
  .item:not(:last-child):after {
    content: "/";
    display: inline-block;
    margin-left: 24px;
    opacity: 0.5;
    transform: scale(0.8);
  }
}

.link {
  color: var(--font-color);
  text-decoration: none;

  &:hover,
  &.router-link-active {
    text-decoration: underline;
  }

  @media (min-width: 900px) {
    font-size: 1.25rem;
  }
}
</style>
