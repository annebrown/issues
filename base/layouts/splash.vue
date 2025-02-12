<!--------@/layouts/Splash.vue------------------------------------------------->
<!-- Layout (Single Root Element) -->
<template><div>

    <!-- Bow -->  
    <ShipBow class="z-50 mb-2 mx-4" />

    <!-- Midships -->
    <div id="midships" class="z-10 relative min-w-96 mt-0 mx-4 p-4 py-4 rounded-3xl">
    
        <!-- Breadcrumb -->
        <div class="float-right mr-1">  
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
        <h1 class="m-0 p-0 px-4">
            <slot name="title"/>
        </h1>
        
        <!-- Cargo -->
        <slot><!-- Cargo --></slot>
    
        <!-- Go Back -->
        <UiGoBack class="p-4"/>

    </div><!-- Midships -->
    
</div></template><!-- Layout (Single Root Element) -->

<script setup lang="ts">

import { ref, onMounted } from 'vue';

const pageHeadings = ref([]);

onMounted(() => {
  const headings = document.querySelectorAll('h2, h3, h4'); 
  pageHeadings.value = Array.from(headings).map((heading) => ({
    id: heading.id,
    text: heading.textContent.trim(),
  }));
});


// Breadcrumbs
const route = useRoute()
const breadcrumbLinks = computed(() => {
    const links = [{ label: 'Home', to: '/' }];
    const pathSegments = route.path.split('/').filter(Boolean);

    pathSegments.forEach((segment, index) => {
        links.push({
            label: segment.charAt(0).toUpperCase() + segment.slice(1),
            to: '/' + pathSegments.slice(0, index + 1).join('/')
        });
    });

    return links;
});// Breadcrumbs

</script>
<!--------@/layouts/Splash.vue------------------------------------------------->