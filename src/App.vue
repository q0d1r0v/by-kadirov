<script setup lang="ts">
import { onMounted } from "@vue/runtime-core"
import { useRouter } from "vue-router"

const router = useRouter()

onMounted(() => {
  router.push("/")
})
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
</style>
