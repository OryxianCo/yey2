<template>
  <div class="layout">
    <SideBar />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import SideBar from './SideBar.vue'
</script>

<style>
.layout {
  display: flex;
  min-height: 100vh;
  background: #fff;
}

.judul {
  margin-left: 3rem;
}

.content {
  flex: 1;
  padding: 2rem;
  overflow-x: auto; /* biar ga kepotong */
}

/* Responsif untuk layar kecil */
@media (max-width: 768px) {
  .layout {
    flex-direction: column; /* Sidebar pindah ke atas */
  }

  .content {
    padding: 1rem;
  }

  .judul {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
}
</style>
