<template>
  <article class="info">
    <p>{{ $t("info.text_1") }}</p>
    <p>{{ $t("info.text_2") }}</p>
    <p
      v-html="
        $t('info.text_3', {
          start_tag: `<a href='https://youtube.com/c/SailingMoonshine' target='_blank' rel='noopener'>`,
          end_tag: '</a>',
        })
      "
    />
  </article>

  <div class="photos">
    <div class="photo">
      <img src="https://www.lukaszrados.pl/info/photography.jpg" alt="" />
    </div>
    <div class="photo">
      <img src="https://www.lukaszrados.pl/info/sailing.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.info {
  margin: 0 auto;
  max-width: 780px;
  padding: 0 32px;

  @media (min-width: 900px) {
    padding: 32px;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    margin: 32px 0;

    @media (min-width: 900px) {
      font-size: 1.5rem;
    }
  }

  :deep(a) {
    color: inherit;
    
    &:hover {
      text-decoration: none;
    }
  }
}

.photos {
  display: grid;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 900px) {
    gap: 32px;
  }

  .photo {
    background-color: var(--image-background-color);
    height: 0;
    overflow: hidden;
    padding-bottom: 133%;
    position: relative;

    img {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  
    @media (min-width: 600px) {
      &:first-child {
        margin-top: 32px;
      }
    }
    
    @media (min-width: 600px) {
      &:first-child {
        margin-top: 48px;
      }
    }
  }
}
</style>
