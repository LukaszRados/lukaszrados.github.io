<template>
  <nav class="navigation">
    <ul>
      <li class="item">
        <NuxtLink to="/" class="link">photography</NuxtLink>
      </li>
      <li class="item"><NuxtLink to="/blog" class="link">blog</NuxtLink></li>
      <li class="item">
        <NuxtLink to="/contact" class="link">info</NuxtLink>
      </li>
      <li class="item">
        <NuxtLink to="/todo" class="link">polski</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
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
