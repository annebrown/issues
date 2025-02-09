<!--------@/layouts/Splash.vue------------------------------------------------->
<!-- Layout (Single Root Element) -->
<template><div>

    <!-- Midships -->
    <div id="midships" class="relative min-w-96 mt-0 mx-4 p-4 py-4 rounded-3xl">
    
        <!-- Title -->  
        <h1 class="mt-0 pt-4 px-4">
            <slot name="title"/>
        </h1>
    
        <!-- Cargo -->
        <slot><!-- Cargo --></slot>
    
    </div><!-- Midships -->
    
</div></template><!-- Layout (Single Root Element) -->

<style>
#ship { @apply bg-[--body-bg-light] dark:bg-[--body-bg-dark]; }
#midships { @apply bg-[--midships-bg-light] dark:bg-[--midships-bg-dark]; }
</style>
<!--------@/layouts/Splash.vue------------------------------------------------->