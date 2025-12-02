<template>
<div class="akun-wrapper">
    <h1 class="title">Akun Operator</h1>
    <div v-if="loading" class="loading">Memuat data...</div>
    <div v-else class="akun-info">
        <label>Nama Operator</label>
        <p>{{ operator.nama }}</p>
        <label>ID Operator</label>
        <p>{{ operator.id }}</p>
        <label>Email Operator</label>
        <p>{{ operator.email }}</p>
        <label>Password Operator</label>
        <p>{{ operator.password }}</p>
        <label>Bergabung Sejak</label>
        <p>{{ operator.join }}</p>
    </div>

<div class="button-area">
    <button class="fancy kembali" @click="$router.push('/admin')">
        <span class="top-key"></span>
        <span class="text">Kembali</span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
    </button>

    <button class="fancy edit" @click="$router.push(`/edit-operator/${id}`)">
        <span class="top-key"></span>
        <span class="text">Edit</span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
    </button>
</div>

</div>
</template>

<script>
export default {
    props: ['id'],

    data() {
        return {
            loading: true,
            operator: null
        };
    },

    mounted() {
        this.loadData();
    },

    methods: {
        loadData() {
            console.log("ID diterima:", this.id);
            const dummy = [
                {
                    id: 1,
                    nama: "Advertencia Achtung",
                    email: "Advertencia@gmail.com",
                    password: "LA201",
                    join: "28 Oktober 2025"
                },
                {
                    id: 2,
                    nama: "Precauciones Peligro",
                    email: "Precauciones@gmail.com",
                    password: "PP2025",
                    join: "09 Februari 2024"
                },
                {
                    id: 3,
                    nama: "Seguridad Alerta",
                    email: "Seguridad@gmail.com",
                    password: "SA2025",
                    join: "04 Maret 2023"
                }
            ];

            // Cari berdasarkan ID
            this.operator = dummy.find(o => o.id == this.id);

            this.loading = false;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@300;400;600&display=swap');

.akun-wrapper {
    width: 100%;
    min-height: 100vh;
    padding: 10px;
    background: #12003A;
    color: white;
    font-family: "KoHo", sans-serif;
}

.title {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 35px;
}

.loading {
    text-align: center;
    font-size: 22px;
    opacity: 0.7;
    margin-top: 40px;
}

.akun-info label {
    font-size: 12px;
    opacity: 0.8;
    margin-top: 10px;
    display: block;
}

.akun-info p {
    font-size: 20px;
    margin: 1px 0 18px 0;
    padding-left: 10px;
}

.button-area {
  display: flex;
  justify-content: space-between; 
  gap: 1rem;
  margin-top: 8rem;
}

.button-area .fancy {
  width: 48%; 
}
.fancy {
  background-color: transparent;
  border: 2px solid #fff;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 1rem 2rem;
  position: relative;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  width: 48%;
  text-align: center;
}

.fancy::before {
  content: "";
  width: 1.4rem;
  height: 2px;
  background: white;
  top: 50%;
  left: 1.2rem;
  position: absolute;
  transform: translateY(-50%);
  transition: 0.3s;
}

.fancy .text {
  display: block;
  padding-left: 1.4rem;
  transition: 0.3s;
}

.fancy .top-key,
.fancy .bottom-key-1,
.fancy .bottom-key-2 {
  height: 2px;
  background: #12003A;
  position: absolute;
  transition: 0.4s ease-out;
}

.fancy .top-key {
  width: 1.4rem;
  top: -2px;
  left: 0.7rem;
}

.fancy .bottom-key-1 {
  width: 1.4rem;
  right: 2rem;
  bottom: -2px;
}

.fancy .bottom-key-2 {
  width: 0.7rem;
  right: 0.7rem;
  bottom: -2px;
}

.fancy:hover .top-key,
.fancy:hover .bottom-key-1,
.fancy:hover .bottom-key-2 {
  width: 0;
  right: 0;
  left: -2px;
}

.fancy:hover .text {
  color: #12003A;
  padding-left: 1.8rem;
}

.fancy:hover::before {
  width: 0.8rem;
  background: #12003A;
}

.kembali {
  border-color: #C31432;
}
.kembali .text {
  color: white;
}
.kembali:hover {
  background: linear-gradient(90deg, #8B0018, #C31432);
}

.edit {
  border-color: white;
}
.edit .text {
  color:white;
}
.edit:hover {
  background: linear-gradient(90deg, #B7B7B7FF, #FFFFFFFF);
}

</style>
