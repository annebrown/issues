<!--------@/components/ship/Bow.vue-------------------------------------------->
<template><div>
    
<!-- Flex -->
<div class="z-50 relative container flex w-full">

    <!-- Logo and Domain Name -->
    <div class="absolute top-0 left-[0.8rem]">
        
        <!-- Logo -->
        <NuxtLink href='/'>
            <ImgLogo class="z-50 inline-block w-70 h-auto 
                m-0 p-0"/>  
        </NuxtLink>

        <!-- Domain Name -->  
        <div class='z-10 inline-block m-0 p-0 pt-[0.75rem] pr-2 pb-1 align-top
            rounded-lg bg-[--body-bg-light] dark:bg-[--body-bg-dark] 
            text-[--accent-light] dark:text-[--accent-dark]'>

            <NuxtLink href='/'>
                <span class="w-fit h-fit m-0 p-0
                    text-[--accent-light] dark:text-[--accent-dark]">
                    .annebrown.ca</span>
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
<!--------@/components/ship/Bow.vue-------------------------------------------->