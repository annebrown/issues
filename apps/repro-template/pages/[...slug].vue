<!--------@/pages/[...slug].vue------------------------------------------------>
<script lang="ts" setup>
    const route = useRoute()

    const { data: page } = await useAsyncData(route.path, () => 
        queryContent(route.path).findOne())

    if (!page.value) {
         throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
    }
</script>

<template><!-- No div - breaks route-->
    <NuxtLayout name="default">
        <ContentRenderer :value="page" 
            class="prose xs:prose-sm sm:prose-base md:prose-lg lg:prose-xl"/>
    </NuxtLayout>
</template>
<!--------@/pages/[...slug].vue------------------------------------------------>