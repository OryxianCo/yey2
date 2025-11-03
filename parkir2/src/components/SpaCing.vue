<template>
  <div :style="{ height: size + 'px' }"></div>
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 16
  }
})
</script>
