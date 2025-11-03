<template>
  <div class="btn-grid">
    <button class="btn red" @click="$router.push('/printerpage')">Pengaturan Printer</button>
    <button class="btn red" @click="$router.push('/kebijakan')">Kebijakan</button>
    <button class="btn red" @click="$router.push('/gate')">Gate Controller</button>
    <button class="btn red" @click="$router.push('/edit-profil')">Edit Profil</button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@400;600;700&display=swap');

* {
  font-family: 'KoHo', sans-serif;
}

.btn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 1.5rem 2.5rem; /* geser kanan */
}

.btn {
  padding: 16px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn.red {
  background: #C31432;
  color: white;
}

.btn.red:hover {
  background: #030142;
}
</style>
