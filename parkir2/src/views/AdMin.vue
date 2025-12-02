<template>
<div class="admin-wrapper">
    <div class="top-card">
    <div class="left">
        <p class="label">Per (Hari)</p>
        <h2 class="value">Total Pendapatan</h2>
        <h1 class="number">Rp {{ totalPendapatan.toLocaleString("id-ID") }}</h1>
    </div>

    <div class="divider"></div>

    <div class="right">
        <p class="date">{{ tanggal }}</p>
        <h2 class="value">Total Kendaraan</h2>
        <h1 class="number">{{ totalKendaraan }}</h1>
    </div>
    </div>
    </div>

    <div class="report-box">
        <h3>Laporan</h3>
        <p class="desc">Masukkan tanggal awal dan terakhir kemudian lihat data kendaraan dan statistik</p>

        <div class="form-grid">
            <input type="date" v-model="startDate">
            <input type="date" v-model="endDate">

            <select v-model="filterKendaraan">
                <option value="">Semua Kendaraan</option>
                <option value="Mobil">Mobil</option>
                <option value="Motor">Motor</option>
            </select>

            <select v-model="filterStatus">
                <option value="">Semua Status</option>
                <option value="Masuk">Masuk</option>
                <option value="Keluar">Keluar</option>
            </select>
        </div>
            <button class="lihat" @click="lihatLaporan">Lihat</button>
    </div>

    <!-- HISTORI -->
    <div class="history-box">
        <h3>HISTORI</h3>

        <p class="sub" v-if="startDate && endDate">
            {{ startDate }} - {{ endDate }}
        </p>

        <div v-if="history.length === 0" class="no-data">
            Tidak ada data untuk rentang tanggal ini.
        </div>

        <div class="history-item" 
            v-for="(item, index) in history" 
            :key="index">

            <div class="left-side">
                <span class="arrow">{{ item.status === 'Masuk' ? '↑' : '↓' }}</span>

                <div class="info">
                    <p class="title">{{ item.jenis }} - {{ item.plat }}</p>
                    <p class="time">{{ item.waktu }}</p>
                </div>
            </div>

            <p class="price">{{ item.harga.toLocaleString() }}</p>
        </div>
    </div>

    <div class="admin-container operator-section">
    <h2>Data Operator</h2>

    <ul class="operator-list">
        <li v-for="(op, index) in operators" :key="op.id">
        <span>{{ index + 1 }}. {{ op.nama }}</span>
        <div class="actions">
            <a href="#" @click.prevent="hapusOperator(op.id)">Hapus</a>
            <a href="#" @click.prevent="lihatOperator(op.id)">Lihat</a>
        </div>
        </li>
    </ul>
    </div>

    <div class="admin-container tarif-section">
        <h2>Daftar Tarif</h2>

        <div class="tarif-item">
            <div class="left">
                <input type="text" value="Motor" disabled />
                <input type="text" value="5.000" disabled />
            </div>
            <div class="actions">
                <a href="#">Edit</a>
                <a href="#">Hapus</a>
            </div>
        </div>

        <div class="tarif-item">
            <div class="left">
                <input type="text" value="Mobil" disabled />
                <input type="text" value="10.000" disabled />
            </div>
            <div class="actions">
                <a href="#">Edit</a>
                <a href="#">Hapus</a>
            </div>
        </div>
    </div>

    <div class="admin-container akun-section">
        <h2>Akun</h2>

        <div class="akun-detail">
            <label>Nama Admin</label>
            <p>Precauciones Peligro</p>
            <label>Id Admin</label>
            <p>TPP10802009</p>
            <label>Email Admin</label>
            <p>Precauciones@gmail.com</p>
            <label>Password Admin</label>
            <p>Admin108020009</p>
        </div>

        <button class="keluar-btn" >Keluar</button>
    </div>
</template>

<script>
import '@/components/CssAdmin.vue';

export default {
name: "AdMin",

data() {
    return {
        operators: [],
        tarifs: [
            { id: 1, jenis: "Motor", harga: "5.000" },
            { id: 2, jenis: "Mobil", harga: "10.000" }
        ],
        totalPendapatan: 0,
        totalKendaraan: 0,
        tanggal: "",   
        history: [],
        startDate: "",
        endDate: "",
        filterKendaraan: "",
        filterStatus: ""
    };
},

created() {
    this.loadOperators();
    this.loadDashboard();
},

methods: {
    loadOperators() {
        const raw = localStorage.getItem("operators");

        if (raw) {
            try {
                this.operators = JSON.parse(raw);
            } catch (e) {
                this.operators = [];
            }
        } else {
            this.operators = [
                { id: 1, nama: "Advertencia Achtung", email: "a@mail.com", password: "LA201", join: "28 Oktober 2025" },
                { id: 2, nama: "Precauciones Peligro", email: "b@mail.com", password: "PP2025", join: "09 Februari 2024" },
                { id: 3, nama: "Seguridad Alerta", email: "c@mail.com", password: "SA2025", join: "04 Maret 2023" }
            ];

            localStorage.setItem("operators", JSON.stringify(this.operators));
        }
    },

    loadDashboard() {
        try {
            const dummy = {
                totalPendapatan: 15000,
                totalKendaraan: 2,
                tanggal: "09/02/2025"
            };

            this.totalPendapatan = dummy.totalPendapatan;
            this.totalKendaraan = dummy.totalKendaraan;
            this.tanggal = dummy.tanggal;

        } catch (e) {
            console.error("Gagal memuat data dashboard:", e);
        }
    },
    hapusOperator(id) {
        if (!confirm("Yakin ingin menghapus operator ini?")) return;

        this.operators = this.operators.filter(op => op.id !== id);
        localStorage.setItem("operators", JSON.stringify(this.operators));
    },
    lihatOperator(id) {
        this.$router.push(`/akun-operator/${id}`);
    },
    editOperator(id) {
        this.$router.push(`/edit-operator/${id}`);
    },
    hapusTarif(id) {
        this.tarifs = this.tarifs.filter(t => t.id !== id);
    },
    editTarif(id) {
        this.$router.push(`/editta/${id}`);
    },
    lihatLaporan() {
        if (!this.startDate || !this.endDate) {
            alert("Pilih tanggal terlebih dahulu!");
            return;
        }
        const semuaData = [
            {
                jenis: "Mobil",
                plat: "W 9090 PK",
                waktu: "2025-02-09 16:00",
                harga: 10000,
                status: "Masuk"
            },
            {
                jenis: "Motor",
                plat: "N 1234 AB",
                waktu: "2025-02-09 15:20",
                harga: 5000,
                status: "Keluar"
            }
        ];
        this.history = semuaData.filter(item => {
            const tanggalItem = item.waktu.split(" ")[0];
            return tanggalItem >= this.startDate && tanggalItem <= this.endDate;
        });
    }
}
};
</script>


