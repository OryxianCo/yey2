<template>
  <LayOut>
    <h2 class="judul">CCTV</h2>

    <!-- Tab -->
    <div class="tab-wrapper">
      <button
        :class="['tab-btn', activeTab === 'tambah' ? 'active' : '']"
        @click="activeTab = 'tambah'"
      >
        Tambah CCTV
      </button>
      <button
        :class="['tab-btn', activeTab === 'lihat' ? 'active' : '']"
        @click="activeTab = 'lihat'"
      >
        Lihat CCTV
      </button>
    </div>

    <!-- Tambah CCTV -->
    <CardPage v-if="activeTab === 'tambah'">
      <input type="text" placeholder="Pilih CCTV" class="input" v-model="cctvName" />
      <ButTon variant="primary" class="simpan-btn" @click="saveCCTV">Simpan</ButTon>
    </CardPage>

    <!-- Lihat CCTV -->
    <CardPage v-else>
      <div class="cctv-card">
        <!-- contoh CCTV -->
        <img src="@/assets/logo.png" alt="CCTV Stream" />
      </div>
    </CardPage>
  </LayOut>
</template>

<script setup>
import { ref } from 'vue'
import LayOut from '@/components/LayOut.vue'
import CardPage from '@/components/CardPage.vue'
import ButTon from '@/components/ButTon.vue'

const activeTab = ref('tambah')
const cctvName = ref('')

function saveCCTV() {
  if (!cctvName.value) {
    alert('Silakan masukkan nama CCTV')
    return
  }
  alert(`CCTV "${cctvName.value}" berhasil disimpan!`)
  cctvName.value = ''
}
</script>

<style scoped>
.tab-wrapper {
  display: flex;
  gap: 0.2rem;
  margin-left: 2.7rem;
  margin-bottom: 1rem;
}

.tab-btn {
  flex: 1;
  padding: 0.6rem;
  background: #eaeaea;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.tab-btn.active {
  background: #030142;
  color: white;
}

.input {
  width: 100%;
  padding: 10px;
  margin-top: 1rem;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 14px;
}

.simpan-btn {
  margin-top: 1.5rem;
  background-color: #C31432 !important;
  width: 200px;
}

.cctv-card {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  background: #030142;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cctv-card img {
  width: 120px;
  opacity: 0.7;
}
</style>
