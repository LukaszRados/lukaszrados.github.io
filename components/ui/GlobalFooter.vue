<template>
  <footer class="footer">
    <p class="copyright">&copy; {{ (new Date()).getFullYear() }} Łukasz Rados</p>
    <ul class="links">
      <li><a href="https://instagram.com/lukaszrados" target="_blank" rel="noopener">instagram</a></li>
      <li><a href="https://linkedin.com/in/lukaszrados/" target="_blank" rel="noopener">linkedin</a></li>
      <li><a href="https://github.com/lukaszrados" target="_blank" rel="noopener">github</a></li>
    </ul>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.footer {
  max-width: var(--max-width-large);
  margin: 32px auto;
  padding: 0 16px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 64px;
    padding: 0 32px;
  }

  @media (min-width: 1200px) {
    margin: 96px auto 32px;
  }

  .copyright {
    margin: 0 0 16px;
    text-align: center;

    @media (min-width: 900px) {
      margin: 0;
      text-align: left;
    }
  }

  .links {
    display: flex;
    gap: 16px;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 900px) {
      justify-content: flex-end;
    }

    a {
      color: var(--text-color);

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
