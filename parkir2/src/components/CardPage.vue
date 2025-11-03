<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 9px;
  padding-top: 0.25rem;
  padding-left:1.2rem;
  padding-right:1.5rem;
  padding-bottom:1.5rem;
  margin-left: 2.7rem; 
  margin-bottom: 1.5rem;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.18);
}
/* Responsif */
@media (max-width: 768px) {
  .card {
    margin: 0.5rem;
    padding: 1rem;
  }
}
</style>
