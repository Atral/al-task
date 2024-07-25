<script setup>
  import Service from '@/services/Service'

  const test = async () => {
    const response = await Service.test();
    console.log(response.data)
  }

  test();
</script>

<template>
  <main>
    <v-btn variant="outlined">Test</v-btn>
  </main>
</template>
