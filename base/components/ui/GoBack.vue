<!--------@/components/content/GoBack.vue-------------------------------------->
<template><div>

    <!-- Go Back Button -->
    <button @click="goBack" class="go-back">Go Back</button>

</div></template>

<script setup>
  const router = useRouter()

  function goBack() {
    router.back()
  }
</script>
<!--------@/components/content/GoBack.vue-------------------------------------->