<template>
  <div class="form-container">
  <h2>Edit Tarif</h2>

  <div class="form-group">
    <label>Nama Kendaraan</label>
    <input v-model="form.nama_kendaraan" type="text">
  </div>

  <div class="form-group">
    <label>Tarif</label>
    <input v-model="form.tarif" type="number">
  </div>

  <div class="form-group">
    <label>Denda</label>
    <input v-model="form.denda" type="number">
  </div>

  <div class="button-row">
    <button class="btn btn-batal" @click="batal">Batal</button>
    <button class="btn btn-simpan" @click="simpan">Simpan</button>
  </div>
</div>

</template>

<style scoped>
.form-container {
  width: 70%;
  background: white;
  margin: 30px 0 0 80px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
}

.button-row {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 25px;
}

.btn {
  padding: 10px 22px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  transition: 0.3s;
}

.btn-batal {
  background: #12003A;
}

.btn-batal:hover {
  background: #1e0058;
}

.btn-simpan {
  background: #8B0018;
}

.btn-simpan:hover {
  background: #b30122;
}

</style>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const loading = ref(true)

// data operator
const operator = reactive({
  id: '',
  nama: '',
  email: '',
  password: '',
  join: ''
})

// baca data
function readOperators() {
  const raw = localStorage.getItem('operators')
  return raw ? JSON.parse(raw) : []
}

// tulis data
function writeOperators(list) {
  localStorage.setItem('operators', JSON.stringify(list))
}

onMounted(() => {
  const id = route.params.id
  const list = readOperators()

  const found = list.find(o => String(o.id) === String(id))

  if (found) {
    operator.id = found.id
    operator.nama = found.nama
    operator.email = found.email
    operator.password = found.password
    operator.join = found.join
  }

  loading.value = false
})

// simpan perubahan
function simpan() {
  const list = readOperators()
  const index = list.findIndex(o => String(o.id) === String(operator.id))

  if (index !== -1) {
    list[index] = { ...operator }
  }

  writeOperators(list)
  router.push('/admin')
}

// batal
function batal() {
  router.back()
}
</script>
