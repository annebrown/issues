<!--------@/components/ship/Bow.vue-------------------------------------------->
<template>

    <!-- Logo and Menu -->
    <div class="relative flex justify-between">
        <div><!-- Logo and Titlesea -->

            <!-- Logo -->
            <ImgLogoAB class='inline-block align-bottom
                h-auto w-10 m-0 -mb-3' />

            <!-- Titlesea -->
            <div class='inline-block align-bottom -mb-5 -ml-1
             '>
                <NuxtLink href='/' id="titlesea">
                    <span>repro-template.annebrown.ca</span>
                </NuxtLink>
            </div>

        </div><!-- Logo and Titlesea -->

        <!-- Spacer -->
        <div class="grow">&nbsp;</div>

        <!-- Menu -->
        <ShipMenu class="absolute top-3 right-0 p-2 pr-0 text-s" />

    </div><!-- Logo and Menu -->

</template>

<style scoped>
a:active { @apply text-current dark:text-current; }

#titlesea {
  font-family: 'Lavishly Yours', cursive;
  font-size:x-large;
}
@keyframes smoothRotate {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
}

.smooth-rotating-svg {
  animation: smoothRotate 4s ease-in-out infinite;
}@keyframes smoothRotate {
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