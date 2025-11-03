<template>
  <LayOut>
    <div class="tarif-container">
      <!-- Judul -->
       <h2 class="judul">Tarif Parkir</h2>

      <!-- List Tarif -->
      <CardPage class="tarif-card">
        <div class="tarif-item">
          <span>Motor</span>
          <span>5.000</span>
        </div>
      </CardPage>

      <CardPage class="tarif-card">
        <div class="tarif-item">
          <span>Mobil</span>
          <span>10.000</span>
        </div>
      </CardPage>

      <!-- Tombol Tambah -->
      <button class="fab" @click="goToTambahTarif">+</button>
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from '@/components/LayOut.vue'
import CardPage from '@/components/CardPage.vue'
import { useRouter } from "vue-router"

const router = useRouter()

function goToTambahTarif() {
  router.push("/tambah/tarif")
}
</script>

<style scoped>

.tarif-container {
  padding: 1.5rem;
}

/* Supaya isi card rata kanan-kiri */
.tarif-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
}

/* Floating Action Button (FAB) */
.fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  background: #0B0D33;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
  transition: background 0.3s ease;
}

.fab:hover {
  background: #1D7FFF;
}
</style>
