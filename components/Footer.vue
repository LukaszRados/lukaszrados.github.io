<template>
  <footer class="p-4 max-w-4xl mx-auto mt-8 mb-4 md:flex md:items-end lg:p-8">
    <div class="md:mr-8 lg:mr-16">
        <p>
            &copy; {{ new Date().getFullYear() }} Łukasz Rados<br>
            <span v-html="$t('footer.love')"></span>
        </p>
    </div>
    <ul class="flex items-center mt-4 md:mt-0 md:mb-1">
        <li class="mr-5"><a href="https://instagram.com/lukaszrados" target="_blank" rel="noopener" aria-label="Instagram"><instagram-icon class="h-5 w-5" /></a></li>
        <li class="mr-5"><a href="https://linkedin.com/in/lukaszrados/" target="_blank" rel="noopener" aria-label="LinkedIn"><linkedin-icon class="h-5 w-5" /></a></li>
        <li class="mr-5"><a href="https://github.com/lukaszrados" target="_blank" rel="noopener" aria-label="Github"><github-icon class="h-5 w-5" /></a></li>
    </ul>
  </footer>
</template>

<script>
import GithubIcon from '@/assets/icons/github.svg?inline'
import InstagramIcon from '@/assets/icons/instagram.svg?inline'
import LinkedinIcon from '@/assets/icons/linkedin.svg?inline'

export default {
    components: {
        GithubIcon,
        InstagramIcon,
        LinkedinIcon
    }    
}
</script>

<style lang="postcss" scoped>
</style>
