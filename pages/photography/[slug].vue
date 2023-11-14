<template>
  <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
    {{ data }}
  </ContentQuery>
</template>

<script setup lang="ts">
import type { PhotographyCategory } from '@/types/photography';
</script>
