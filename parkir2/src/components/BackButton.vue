<template>
  <button class="back-btn" @click="goBack">
    <span class="arrow">←</span>
  </button>
</template>

<script setup>
import { useRoute } from "vue-router"
import { useBackNavigation } from "@/router/backRouter" // import fungsi router terpisah

const route = useRoute()
const { goBack } = useBackNavigation(route)
</script>

<style scoped>
.back-btn {
  margin-left: 2.5rem;
  background-color: #030142;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.arrow {
  font-size: 22px;
  color: white;
  transition: transform 0.4s ease;
}

.back-btn:hover {
  background-color: #C31432;
}

.back-btn:hover .arrow {
  transform: translateX(-3px);
}
</style>
