<template>
   <ContentQuery
    path="/photography"
    :only="['title', 'intro', 'published_at', 'background', '_path']"
    :sort="{ order: 1 }"
    v-slot="{ data }"
  >
    <PhotographyList :categories="data" />
  </ContentQuery>
</template>
