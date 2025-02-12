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


