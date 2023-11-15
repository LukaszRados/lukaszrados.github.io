<template>
  <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
    <PhotographyCategory :category="(data as unknown as PhotographyCategory)" />
  </ContentQuery>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from "@/types/photography";
</script>
