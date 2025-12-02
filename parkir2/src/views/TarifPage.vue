<template>
  <LayOut>
    <div class="tarif-container">

      <h2 class="judul">Daftar Tarif</h2>
    
      <CardPage 
        v-for="tarif in tarifs" 
        :key="tarif.id" 
        class="tarif-card">

        <div class="tarif-row">
          
          <div class="tarif-left">
            <span class="jenis">{{ tarif.jenis }}</span>
            <span class="harga">{{ tarif.harga }}</span>
            <span class="denda">Denda: {{ tarif.denda }}</span>
          </div>


          <!-- KANAN: Aksi -->
          <div class="actions">
            <a href="#" @click.prevent="goEdit(tarif.id)">Edit</a>
            <a href="#" @click.prevent="hapusTarif(tarif.id)">Hapus</a>
          </div>
        </div>

      </CardPage>

      <button class="fab" @click="goToTambahTarif">+</button>

    </div>
  </LayOut>
</template>

<script setup>
import LayOut from '@/components/LayOut.vue'
import CardPage from '@/components/CardPage.vue'
import { useRouter } from "vue-router"
import { ref, onMounted } from "vue"

const router = useRouter()


const tarifs = ref([])

onMounted(() => {
  const raw = localStorage.getItem("tarifs")

  if (raw) {
    tarifs.value = JSON.parse(raw)
  } else {
    // Dummy awal (Motor & Mobil)
    tarifs.value = [
      { id: 1, jenis: "Motor", harga: "5.000" },
      { id: 2, jenis: "Mobil", harga: "10.000" }
    ]
    localStorage.setItem("tarifs", JSON.stringify(tarifs.value))
  }
})


function goToTambahTarif() {
  router.push("/tambah/tarif")
}

function goEdit(id) {
  router.push(`/editta/${id}`)
}

function hapusTarif(id) {
  if (!confirm("Yakin ingin menghapus tarif ini?")) return

  tarifs.value = tarifs.value.filter(t => t.id !== id)
  localStorage.setItem("tarifs", JSON.stringify(tarifs.value))
}
</script>

<style scoped>
.tarif-container {
  padding: 1.5rem;
}

.tarif-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tarif-left {
  display: grid;
  grid-template-columns: 100px 80px auto; 
  align-items: center;
  column-gap: 25px;  
  font-size: 1rem;
  font-weight: 500;
}

.jenis {
  white-space: nowrap;
}

.harga {
  text-align: left;
  white-space: nowrap;
}

.denda {
  white-space: nowrap;
  color: #444;
}


.actions {
  display: flex;
  gap: 12px;
}

.actions a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
}

.actions a:hover {
  color: #1D7FFF;
}

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
