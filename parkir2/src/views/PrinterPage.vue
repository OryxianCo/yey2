<template>
  <LayOut>
    <!-- Tombol Back -->
    <BackButton @click="$router.back()" />

    <!-- Judul -->
    <h2 class="judul">Pengaturan Printer</h2>

    <!-- Card Form -->
    <CardPage>
      <form @submit.prevent="handleSubmit">
        <input v-model="form.printer" type="text" placeholder="Pilih Printer" class="input" />
        <input v-model="form.dpi" type="number" placeholder="Printer DPI" class="input" />
        <input v-model="form.lebarKertas" type="text" placeholder="Lebar Kertas" class="input" />
        <input v-model="form.karakterPerBaris" type="number" placeholder="Jumlah Karakter Per Baris" class="input" />

        <!-- Tombol Simpan -->
        <div class="btn-container">
          <ButTon variant="primary" type="submit" class="btn-full">Simpan</ButTon>
        </div>
      </form>
    </CardPage>
  </LayOut>
</template>

<script setup>
import { reactive } from "vue"
import LayOut from "../components/LayOut.vue"
import CardPage from "../components/CardPage.vue"
import ButTon from "../components/ButTon.vue"
import BackButton from "../components/BackButton.vue"

const form = reactive({
  printer: "",
  dpi: "",
  lebarKertas: "",
  karakterPerBaris: ""
})

function handleSubmit() {
  console.log("Data disimpan:", form)
  // nanti tambahkan logic simpan ke API / DB
}
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.btn-full {
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
}
</style>
