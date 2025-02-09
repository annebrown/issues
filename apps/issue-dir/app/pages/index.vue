<!---------@/pages/index.vue--------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Center -->
    <div @mousemove="moveBug" class="relative mx-auto">
        
        <img ref="bugRef" src="/logo.svg" alt="Bug" class="absolute" :style="bugStyle" />

        <!-- Title -->
        <h1 class="w-full text-center text-[--primary-light] dark:text-[--primary-dark]">
            Issues
        </h1>
    
        <!-- Description -->
        <p class="w-full text-center mb-5">Bug Reproductions</p>

  


        <!-- List -->
        <ul class="w-full mx-auto mt-10">
            <li class="w-full mx-auto">
                <NuxtLink to="/nuxt" class="inline-block">

                    <div class="issue">
                        
                        <h2 class="issue-title"><NuxtImg src="brands/nuxt.svg" alt="Nuxt Logo" width="30" height="30" /> Nuxt</h2>
                    </div>
                </NuxtLink>
            </li>
            <!-- <li class="w-full">
                <NuxtLink to="/issues/2" class="w-full">
                    <div class="issue">
                        <h2 class="issue-title">Issue 2</h2>
                        <p>Issue 2 Description</p>
                    </div>
                </NuxtLink>
            </li>
            <li class="w-full">
                <NuxtLink to="/issues/3" class="w-full">
                    <div class="issue">
                        <h2 class="text-lg">Issue 3</h2>
                        <p>Issue 3 Description</p>
                    </div>
                </NuxtLink>
            </li> -->
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

const bugRef = ref(null)
const bugSize = { width: 50, height: 50 } // Adjust this to match your bug's actual size
const bugPosition = ref({ x: 0, y: 0 })

const bugStyle = computed(() => ({
  width: `${bugSize.width}px`,
  height: `${bugSize.height}px`,
  transform: `translate(${bugPosition.value.x}px, ${bugPosition.value.y}px)`
}))

onMounted(() => {
  if (bugRef.value) {
    moveBugToRandomPosition()
  }
})

const moveBug = () => {
  if (bugRef.value) {
    moveBugToRandomPosition()
  }
}

const moveBugToRandomPosition = () => {
  const maxX = window.innerWidth - bugSize.width
  const maxY = window.innerHeight - bugSize.height
  const randomX = Math.max(0, Math.min(Math.random() * maxX, maxX))
  const randomY = Math.max(0, Math.min(Math.random() * maxY, maxY))

  gsap.to(bugPosition.value, {
    x: randomX,
    y: randomY,
    duration: 1,
    ease: "power2.out"
  })
}
</script>

<style scoped>
.issue { @apply w-full p-2 
    bg-[--body-bg-light] dark:bg-[--body-bg-dark] rounded-lg shadow-md
    ring-1 ring-[--accent-light] dark:ring-[--accent-dark] ; }
.issue-title { @apply text-lg text-black dark:text-white ; }
.issue-descr { @apply w-full p-4 text-white dark:text-black; }
</style>
<!---------@/pages/index.vue--------------------------------------------------->