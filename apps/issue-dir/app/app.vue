<!--------@/app.vue------------------------------------------------------------>
<template><div>  
<NuxtRouteAnnouncer /><!-- Assistive Technologies --> 

<!-- Center Everything -->
<div class="container min-w-96 mx-auto w-fit my-2 sm:my-3 md:my-3 px-8">

     <!-- Ship -->
    <div id="main" class="w-full pt-2">
    
        <!-- Bow -->
        <ShipBow id="bow" class="z-50 w-full m-0 p-0;" />

        <!-- Ship-->
        <NuxtPage id="ship" class="w-full z-10 m-0 -mt-4 p-0 mx-auto" /> 
        
        <!-- Transom -->
        <ShipTransom id="transom" class="w-full mx-auto p-0 pt-1 px-2 text-xs" />
    
    </div><!-- Ship -->
   
</div><!-- Center Everything -->

</div></template>
<!--------@/app.vue------------------------------------------------------------>