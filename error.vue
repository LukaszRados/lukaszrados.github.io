<template>
  <div>
    <TopNavigation />
    <div class="error">
      <h1>{{ $t("error.title") }}</h1>
      <p>{{ $t("error.description") }}</p>
      <p>
        <NuxtLink :to="localePath('/')">{{ $t("error.button") }}</NuxtLink>
      </p>
    </div>
    <GlobalFooter />
  </div>
</template>

<script setup lang="ts">
import { buildImageUrl } from "~/helpers/image-url";

const localePath = useLocalePath();
const { t } = useI18n();

useSeoMeta({
  title: `${t("common.title")}`,
  ogImage: buildImageUrl(t("common.og_image"), "c_fill,h_630,w_1200"),
});
</script>

<style lang="postcss" scoped>
.error {
  max-width: 600px;
  margin: 0 auto;
  padding: 64px 32px;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0;
  }

  p {
    line-height: 1.5;
    margin: 24px 0;
  }

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
      margin: 32px 0;
    }
  }
}
</style>
