<template>
  <LayOut>
    <!-- Tombol Kembali -->
    <BackButton @click="goBack" />
    <h2 class="judul">Tarif Parkir</h2>

    <CardPage>
      <form @submit.prevent="handleSubmit">
        <!-- Selalu tampil -->
        <input v-model="form.namaKendaraan" type="text" placeholder="Nama Kendaraan" class="input" />
        <input v-model="form.tarif" type="number" placeholder="Tarif" class="input" />
        <input v-model="form.denda" type="number" placeholder="Denda Kehilangan Tiket" class="input" />

        <!-- Tombol pilih tipe tarif -->
        <div class="btn-group">
          <ButTon
            :variant="form.tipeTarif === 'Flat' ? 'primary' : 'secondary'"
            type="button"
            @click="form.tipeTarif = 'Flat'"
          >
            Flat
          </ButTon>
          <ButTon
            :variant="form.tipeTarif === 'Progressive' ? 'primary' : 'secondary'"
            type="button"
            @click="form.tipeTarif = 'Progressive'"
          >
            Progressive
          </ButTon>
        </div>

        <!-- Input tambahan hanya muncul jika Progressive -->
        <div v-if="form.tipeTarif === 'Progressive'">
          <input v-model="form.waktuGratis" type="number" placeholder="Waktu Gratis (Menit)" class="input" />

          <div class="inline-inputs">
            <input v-model="form.kenaikanTarif" type="number" placeholder="Kenaikan Tarif" class="input" />
            <input v-model="form.perJam" type="text" placeholder="Per (Jam)" class="input" />
          </div>

          <input v-model="form.tarifInap" type="number" placeholder="Tarif Inap / Per Hari (24 Jam)" class="input" />
        </div>

        <!-- Tombol Simpan -->
        <ButTon variant="primary" class="submit-btn" type="submit" :disabled="!isValid">
          Simpan
        </ButTon>
      </form>
    </CardPage>
  </LayOut>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import LayOut from '@/components/LayOut.vue'
import CardPage from '@/components/CardPage.vue'
import ButTon from '@/components/ButTon.vue'
import BackButton from '@/components/BackButton.vue'

const router = useRouter()

function goBack() {
  router.push('/tarif') // balik ke TarifPage
}

const form = reactive({
  namaKendaraan: '',
  tarif: '',
  denda: '',
  tipeTarif: 'Flat',
  waktuGratis: '',
  kenaikanTarif: '',
  perJam: '',
  tarifInap: ''
})

// validasi sesuai tipe tarif
const isValid = computed(() => {
  if (form.tipeTarif === 'Flat') {
    return form.namaKendaraan && form.tarif && form.denda
  } else {
    return (
      form.namaKendaraan &&
      form.tarif &&
      form.denda &&
      form.waktuGratis &&
      form.kenaikanTarif &&
      form.perJam &&
      form.tarifInap
    )
  }
})

function handleSubmit() {
  console.log('Data berhasil disimpan:', { ...form })
  alert('Data berhasil disimpan (sementara hanya di console)!')
}
</script>

<style scoped>

/* Form input */
.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 14px;
}

.inline-inputs {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
}

.submit-btn {
  width: 100%;
  margin-top: 1rem;
}
</style>
