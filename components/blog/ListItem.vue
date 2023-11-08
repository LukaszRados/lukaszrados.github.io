<template>
  <div>
    <NuxtLink :to="post._path" class="image">
      <img :src="imageUrl" :alt="post.title" />
    </NuxtLink>
    <h2 class="title">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </h2>
    <p class="date">{{ post.published_at }}</p>
    <p class="intro">{{ post.intro }}</p>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types/blog";
import { buildImageUrl } from "@/helpers/image-url"

type Props = {
  post: BlogPost;
};

const props = defineProps<Props>();

const imageUrl = computed(() => buildImageUrl(props.post.background, 'c_fill,h_330,w_500'))
</script>

<style scoped>
.image {
  display: block;
  margin-bottom: 24px;
  overflow: hidden;
  padding-bottom: 66%;
  position: relative;

  img {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.title {
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;

  @media (min-width: 700px) {
    font-size: 1.825rem;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.date {
  color: var(--font-color-gray);
  margin: 24px 0;
}

.intro {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}
</style>
