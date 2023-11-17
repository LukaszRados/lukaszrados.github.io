<template>
  <ContentQuery :path="`/photography/${slug}`" find="one" v-slot="{ data }">
    <PhotographyCategory :category="(data as unknown as PhotographyCategory)" />
  </ContentQuery>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "@/types/photography";
import { getSlugFromPath } from "~/helpers/get-slug";

const route = useRoute()
const slug = getSlugFromPath(route.path)
</script>
