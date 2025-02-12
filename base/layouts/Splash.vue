<!--------@/layouts/Splash.vue------------------------------------------------->
<!-- Layout (Single Root Element) -->
<template><div>

    <!-- Midships -->
    <div id="midships" class="relative min-w-96 mt-0 mx-4 p-4 py-4 rounded-3xl">
    
        <!-- Breadcrumb -->
        <div class="float-right m-0 mr-1 p-0">  
            <UBreadcrumb 
                :links="breadcrumbLinks" 
                divider="/" 
                :ui="{
                    ol: 'flex items-center gap-x-0',
                    li: 'flex items-center gap-x-0 text-xs leading-6 min-w-0',
                    active: 'text-current dark:text-current'
                }"
                class="gunnel display-block w-full float-right mt-1 px-2 
                    text-current dark:text-current text-xs"
            />
        </div><!-- Breadcrumb -->

        <!-- Title -->  
        <h1 class="mt-0 pt-4 px-4">
            <slot name="title"/>
        </h1>
        
        <!-- Cargo -->
        <slot><!-- Cargo --></slot>
    
        <!-- Go Back -->
        <UiGoBack />

    </div><!-- Midships -->
    
</div></template><!-- Layout (Single Root Element) -->
<!--------@/layouts/Splash.vue------------------------------------------------->