<!--------@/components/ship/Bow.vue-------------------------------------------->
<template><div>
    
<!-- Flex -->
<div class="z-50 relative container flex w-full">

    <!-- Logo and Domain Name -->
    <div class="ml-4">
        
        <!-- Logo -->
        <NuxtLink href='/'>
            <img 
                src="/logo.svg" 
                ref="bugIcon" 
                alt="Bug Icon"    
                width='40'
                height='40' 
                class="bug-icon z-50 inline-block w-70 h-auto 
                m-0 p-0"
                :style="{ transform: `translate(${x}px, ${y}px)` }"
            />  
        </NuxtLink>

        <!-- Domain Name -->  
        <div class='z-10 inline-block m-0 p-0 pt-[0.75rem] pr-2 pb-1 align-top
            rounded-lg bg-[--body-bg-light] dark:bg-[--body-bg-dark] 
            text-[--accent-light] dark:text-[--accent-dark]'
        >

            <NuxtLink href='/'>
                <span class="w-fit h-fit m-0 p-0
                    text-[--accent-light] dark:text-[--accent-dark]
                ">
                    .annebrown.ca
                </span>
            </NuxtLink>

        </div><!-- Domain Name -->

    </div><!-- Logo and Domain Name -->

    <div class="grow">&nbsp;</div>

    <!-- App Menu -->
    <div class="absolute top-0 right-3">
        <ShipMenu id="main-menu" class="px-3 py-1 align-top" />
    </div>

</div><!-- Flex -->

</div></template>

<script setup>
    import { ref } from 'vue'
    import { useMouse, useThrottleFn } from '@vueuse/core'

    const bugIcon = ref(null)
    const { x, y } = ref({ x: 0, y: 0 })

    const moveBug = () => {
        x.value = Math.random() * 10 - 5 // Random value between -5 and 5
        y.value = Math.random() * 10 - 5 // Random value between -5 and 5
    }

    const throttledMoveBug = useThrottleFn(moveBug, 300)

    useMouse(bugIcon, {
        onMousemove: throttledMoveBug,
    })
</script>

<style scoped>
.smooth-rotating-svg {
  animation: smoothRotate 4s ease-in-out infinite;

}

@keyframes smoothRotate {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
}

.smooth-rotating-svg {
  animation: smoothRotate 30s ease-in-out infinite;
}
</style>
<!--------@/components/ship/Bow.vue-------------------------------------------->