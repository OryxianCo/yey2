<template>
  <button :class="['btn', variant]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
/* @vue-ignore */
defineProps({
  variant: {
    type: String,
    default: 'primary' }})
</script>

<style scoped>
.btn {
  padding: 10px 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: 0.2s;
}

.btn.primary {
  background-color: #030142ff;
  color: white;
}

.btn.primary:hover {
  background-color: #C31432;
}

.btn.secondary {
  background-color: #ffffffff;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  color: #333;
}

.btn.secondary:hover {
  background-color: #7c7c7cff;
}
</style>
