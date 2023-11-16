<template>
  <ContentList :query="query" v-slot="{ list }">
    <CategoriesList :categories="(list as unknown as PhotographyCategory[])" />
  </ContentList>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "~/types/photography";
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = {
  path: "/photography",
  sort: [{ order: 1 }],
  only: ["title_en", "title_pl", "background", "order", "_path"],
};
</script>
