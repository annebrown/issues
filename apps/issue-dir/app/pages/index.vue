<!---------@/pages/index.vue--------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Center -->
    <div class="mx-auto">

        <!-- Title -->
        <h1 class="w-full text-center text-[--primary-light] dark:text-[--primary-dark]">
            Issues
        </h1>
    
        <!-- Description -->
        <p class="w-full text-center mb-5">Bug Reproductions</p>

        <!-- List -->
        <ul class="z-10 w-full mx-auto mt-10 p-4">
            <li class="w-full mx-auto">
                <NuxtLink to="/nuxt">
                    <div class="issue">
                        
                        <h2 class="issue-title">
                            <NuxtImg src="brands/nuxt.svg" alt="Nuxt Logo" 
                            width="28" height="28" 
                            style="
                                display: inline-block; 
                                vertical-align: text-bottom; 
                                margin-right: 5px;" 
                                class="-mt-[0.35rem]"/> 
                            Nuxt
                        </h2>
                    </div>
                </NuxtLink>
            </li>
            <li class="w-full mx-auto">
                <NuxtLink to="/next">
                    <div class="issue">
                        
                        <h2 class="issue-title">
                            <NuxtImg src="brands/next.js.svg" alt="Next Logo" 
                            width="28" height="28" 
                            style="
                                display: inline-block; 
                                vertical-align: text-bottom; 
                                margin-right: 5px;" 
                                class="-mt-[0.35rem]"/> 
                            Next
                        </h2>
                    </div>
                </NuxtLink>
            </li>
            <li class="w-full mx-auto">
                <NuxtLink to="/angular">
                    <div class="issue">
                        
                        <h2 class="issue-title">
                            <NuxtImg src="brands/angular.png" alt="Angular Logo" 
                            width="28" height="28" 
                            style="
                                display: inline-block; 
                                vertical-align: text-bottom; 
                                margin-right: 5px;" 
                                class="-mt-[0.35rem]"/> 
                            Angular
                        </h2>
                    </div>
                </NuxtLink>
            </li>
        </ul>

    </div><!-- Center -->

</NuxtLayout> 
</div></template>

<script lang="ts" setup>
import { NuxtImg } from '#components';

definePageMeta({
    title: 'Issues',
    description: 'Bug Reproduction List',
})


</script>

<style scoped>
.issue { @apply relative w-full p-2 pr-3
    bg-[--midships-bg-light] dark:bg-sky-950 rounded-lg shadow-md
  ; }
  /*   ring-1 ring-[--accent-light] dark:ring-[--accent-dark]  */
.issue-title { @apply text-lg text-black dark:text-white ; }
.issue-descr { @apply w-full p-4 text-white dark:text-black; }
</style>
<!---------@/pages/index.vue--------------------------------------------------->