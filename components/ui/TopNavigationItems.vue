<template>
  <nav class="navigation">
    <ul>
      <li class="item">
        <NuxtLink
          :to="localePath('/')"
          class="link"
          :class="{ 'router-link-active': isPhotographyPage }"
        >
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
        <NuxtLink :to="switchLocalePath(nextLanguage)" class="link">
          {{ $t("navigation.next_language") }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();

const nextLanguage = computed(() => (locale.value === "pl" ? "en" : "pl"));

// Due to project structure, I haven't figured out a way to make photography item highlighted
// So this is a small hack
const route = useRoute();
const isPhotographyPage = computed(() =>
  route.name?.toString().startsWith("photography")
);
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
