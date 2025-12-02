<template>
  <LayOut>
    <h2 class="judul">Edit Tarif</h2>

    <CardPage>
      <form @submit.prevent="handleUpdate">

        <input
          v-model="form.namaKendaraan"
          type="text"
          placeholder="Nama Kendaraan"
          class="input"
        />

        <input
          v-model="form.tarif"
          type="number"
          placeholder="Tarif"
          class="input"
        />

        <input
          v-model="form.denda"
          type="number"
          placeholder="Denda"
          class="input"
        />

        <div class="action-buttons">
        <button class="btn batal" type="button" @click="batal">
          Batal
        </button>

        <button class="btn simpan" type="submit" :disabled="!isValid">
          Simpan
        </button>
        </div>
      </form>
    </CardPage>

  </LayOut>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

import LayOut from "@/components/LayOut.vue"
import CardPage from "@/components/CardPage.vue"

const route = useRoute()
const router = useRouter()

const id = Number(route.params.id)

const form = reactive({
  namaKendaraan: "",
  tarif: "",
  denda: ""
})

/* LOAD DATA DARI localStorage */
onMounted(() => {
  const raw = localStorage.getItem("tarifs")
  if (!raw) return

  const list = JSON.parse(raw)
  const item = list.find(t => t.id === id)

  if (item) {
    form.namaKendaraan = item.jenis
    form.tarif = item.harga
    form.denda = item.denda ?? ""
  }
})

const isValid = computed(() => {
  return form.namaKendaraan && form.tarif && form.denda
})

function handleUpdate() {
  const raw = localStorage.getItem("tarifs")
  if (!raw) return

  const list = JSON.parse(raw)
  const index = list.findIndex(t => t.id === id)

  if (index !== -1) {
    list[index] = {
      id,
      jenis: form.namaKendaraan,
      harga: form.tarif,
      denda: form.denda
    }
  }

  localStorage.setItem("tarifs", JSON.stringify(list))
  alert("Data tarif berhasil diperbarui!")
  router.push("/tarif")
}

function batal() {
  router.push("/tarif")
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #999;
  border-radius: 4px;
}

.action-row {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

/* WRAPPER */
/* KOTAK CARD PUTIH */
.card {
  background: #ffffff !important; /* pastikan putih */
}

/* WRAPPER */
.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 9px;
}

/* BASE BUTTON */
.btn {
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5em 5em;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease all;
  z-index: 1;
  background: white; /* awal button putih */
}

/* EFFECT LAYER */
.btn::before {
  transition: 0.4s ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: "";
  z-index: -1;
}

/* HOVER: font putih */
.btn:hover,
.btn:focus {
  color: #ffffff !important;
}

.btn:hover::before,
.btn:focus::before {
  left: 0;
  right: 0;
  opacity: 1;
}

/* CLICK */
.btn:active {
  transform: scale(0.92);
}

/* === WARNA VARIAN === */

/* BATAL = BIRU */
.btn.batal {
  border-color: #1e0058;
  color: #1e0058;
}

.btn.batal::before {
  background-color: #1e0058;
}

/* SIMPAN = MERAH */
.btn.simpan {
  border-color: #8B0018;
  color: #8B0018;
}

.btn.simpan::before {
  background-color: #8B0018;
}

/* DISABLED */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn:disabled::before {
  display: none;
}

</style>
