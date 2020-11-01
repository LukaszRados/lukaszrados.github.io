<template>
  <footer class="p-4 max-w-6xl mx-auto mt-8 mb-4 md:flex md:items-end lg:p-8">
    <div class="md:mr-8 lg:mr-16">
        <p>
            +31 614 439 619<br>
            lukaszrados@gmail.com
        </p>
    </div>
    <ul class="flex items-center mt-4 md:mt-0 md:mb-1">
        <li class="mr-5"><a href="#" target="_blank" rel="noopener"><instagram-icon class="h-5 w-5" /></a></li>
        <li class="mr-5"><a href="#" target="_blank" rel="noopener"><linkedin-icon class="h-5 w-5" /></a></li>
    </ul>
  </footer>
</template>

<script>
import LinkedinIcon from '@/assets/icons/linkedin.svg?inline'
import InstagramIcon from '@/assets/icons/instagram.svg?inline'

export default {
    components: {
        InstagramIcon,
        LinkedinIcon
    }    
}
</script>

<style lang="postcss" scoped>
</style>
