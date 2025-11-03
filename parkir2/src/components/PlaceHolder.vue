<template>
  <!-- Komponen cuman utk style placeholder -->
  <div class="placeholder-style">
    <slot />
  </div>
</template>

<script setup>
// gak perlu script tambahan
</script>

<style>
h2 {
  font-size: 2.5 rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.desc {
  font-size: 0.980rem;
  color: #666;
  margin-bottom: 1rem;
}

.input {
  width: 98%;
  padding: 10px 12px;
  border: 1px solid #000000ff;
  border-radius: 1 px;
  margin-bottom: 1rem;
  font-size: 14px;
}

.btn-group {
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
}
/* Responsif */
@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }

  .desc {
    font-size: 0.9rem;
  }

  .input {
    font-size: 13px;
    padding: 10px 6px;
  }
}
</style>
