<template>
  <article>
    <section class="intro">
      <p class="date">{{ post.published_at }}</p>
      <h1 class="title">{{ post.title }}</h1>
      <p class="excerpt">{{ post.intro }}</p>
    </section>

    <section class="content">
      <ContentRenderer :value="post" />
    </section>
  </article>
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types/blog";

type Props = {
  post: BlogPost;
};

const props = defineProps<Props>();
const { post } = toRefs(props);

const localePath = useLocalePath();
</script>

<style scoped lang="postcss">
.back {
  font-size: 0;
}

.intro {
  margin: 0 auto 32px;
  max-width: 900px;
  padding: 0 16px;
  text-align: center;

  .title {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.375;
    margin: 16px 0;
  }

  .date {
    color: var(--font-color-gray);
    font-size: 1rem;
  }

  .excerpt {
    font-size: 1.25rem;
    line-height: 1.375;
    margin: 0;
  }
}

@media (min-width: 900px) {
  .intro {
    margin: 32px auto;

    .title {
      font-size: 3rem;
      margin: 24px 0;
    }

    .date {
      font-size: 1.25rem;
    }

    .excerpt {
      font-size: 1.875rem;
    }
  }
}

@media screen and (min-width: 1200px) {
  .intro {
    margin: 64px auto;
  }
}

:deep(.content) {
  line-height: 1.5;

  h2,
  h3,
  p,
  ul {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 16px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.125rem;
    margin: 16px 0;
  }

  ul {
    list-style: disc;
    margin: 16px auto;
    padding: 0 16px 0 32px;
  }

  li {
    font-size: 1.125rem;
    margin: 8px 0;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }

  h2 a {
    text-decoration: none;
  }
}

@media screen and (min-width: 900px) {
  :deep(.content) {
    h2,
    h3,
    p,
    ul {
      padding: 0 32px;
    }

    p {
      font-size: 1.25rem;
      margin: 32px auto;
    }

    li {
      font-size: 1.25rem;
    }

    h2 {
      margin-top: 48px;
      margin-bottom: 24px;
      font-size: 1.875rem;
    }

    h3 {
      margin-top: 32px;
      margin-bottom: 20px;
      font-size: 1.5rem;
    }
  }
}
</style>
