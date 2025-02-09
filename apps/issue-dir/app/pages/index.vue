<!---------@/pages/index.vue--------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Center -->
    <div @mousemove="moveBug" class="relative" ref="containerRef">
    <!-- <div @mousemove="moveBug" class="relative mx-auto min-w-96"> -->
        <img ref="bugRef" src="/logo.svg" alt="Bug" class="absolute" :style="bugStyle" />
        <!-- <img ref="bugRef" src="/logo.svg" alt="Bug" :style="bugStyle" class="z-50" /> -->

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
                <NuxtLink to="/nuxt">
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
                <NuxtLink to="/nuxt">
                    <div class="issue">
                        
                        <h2 class="issue-title">
                            <NuxtImg src="brands/angular.png" alt="Nuxt Logo" 
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

import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'

const containerRef = ref(null)
const bugRef = ref(null)
const bugSize = { width: 30, height: 30 } // Adjust this to match your bug's actual size
const bugPosition = ref({ x: 0, y: 0 })

const bugStyle = computed(() => ({
  width: `${bugSize.width}px`,
  height: `${bugSize.height}px`,
  left: `${bugPosition.value.x}px`,
  top: `${bugPosition.value.y}px`
}))

onMounted(() => {
  if (containerRef.value) {
    moveBugToRandomPosition()
    window.addEventListener('resize', moveBugToRandomPosition)
  }
})

const moveBug = () => {
  if (containerRef.value) {
    moveBugToRandomPosition()
  }
}

const moveBugToRandomPosition = () => {
  if (!containerRef.value) return

  const containerRect = containerRef.value.getBoundingClientRect()
  const maxX = containerRect.width - bugSize.width
  const maxY = containerRect.height - bugSize.height
  
  const randomX = Math.floor(Math.random() * maxX)
  const randomY = Math.floor(Math.random() * maxY)

  gsap.to(bugPosition.value, {
    x: randomX,
    y: randomY,
    duration: 1,
    ease: "power2.out"
  })
}
</script>

<style scoped>
.issue { @apply relative w-full p-2 pr-3
    bg-[--midships-bg-light] dark:bg-gray-700 rounded-lg shadow-md
    ring-1 ring-[--accent-light] dark:ring-[--accent-dark] ; }
.issue-title { @apply text-lg text-black dark:text-white ; }
.issue-descr { @apply w-full p-4 text-white dark:text-black; }
</style>
<!---------@/pages/index.vue--------------------------------------------------->