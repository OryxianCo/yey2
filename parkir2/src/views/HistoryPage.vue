<template>
  <LayOut>
    <h2 class="judul">Laporan Dan Histori</h2>

    <!-- Card Total -->
    <div class="total-card">
      <div class="left">
        <p>Per (Hari)</p>
        <h3>Total Pendapatan</h3>
        <h2>Rp 15.000</h2>
      </div>
      <div class="right">
        <span class="date">09/02/2025</span>
        <h3>Total Kendaraan</h3>
        <h2>2</h2>
      </div>
    </div>

    <!-- Filter -->
    <CardPage>
      <h3>Laporan</h3>
      <p class="desc">Masukkan tanggal awal dan terakhir kemudian lihat data kendaraan dan statistik</p>
      <div class="filters">
        <input type="date" placeholder="Tanggal Awal" />
        <input type="date" placeholder="Tanggal Terakhir" />
        <select>
          <option>Kendaraan</option>
          <option>Mobil</option>
          <option>Motor</option>
        </select>
        <select>
          <option>Status</option>
          <option>Masuk</option>
          <option>Keluar</option>
        </select>
      </div>
      <div class="btn-row">
        <ButTon variant="primary" style="background:#C31432;">Cetak</ButTon>
        <ButTon variant="primary" style="background:#2B0033;">Lihat</ButTon>
      </div>
    </CardPage>

    <!-- Data Terakhir -->
    <CardPage>
      <h3>Data Terakhir Parkir</h3>
      <div class="history-item up">
        <span class="arrow">↑</span>
        <div class="info">
          <p><b>Mobil –W 9090 PK</b></p>
          <small>02-09-2025 16:00</small>
        </div>
        <span class="amount">5.000</span>
      </div>

      <div class="history-item down">
        <span class="arrow">↓</span>
        <div class="info">
          <p><b>Motor –W 9090 PK</b></p>
          <small>02-09-2025 14:00</small>
        </div>
        <span class="amount zero">0</span>
      </div>

      <div class="history-item up">
        <span class="arrow">↑</span>
        <div class="info">
          <p><b>Mobil –W 9090 PK</b></p>
          <small>02-09-2025 14:00</small>
        </div>
        <span class="amount">10.000</span>
      </div>

      <div class="history-item down">
        <span class="arrow">↓</span>
        <div class="info">
          <p><b>Mobil –W 9090 PK</b></p>
          <small>02-09-2025 13:57</small>
        </div>
        <span class="amount zero">0</span>
      </div>
    </CardPage>
  </LayOut>
</template>

<script setup>
import LayOut from '@/components/LayOut.vue'
import CardPage from '@/components/CardPage.vue'
import ButTon from '@/components/ButTon.vue'
</script>

<style scoped>
/* Card total pendapatan */
.total-card {
  background: linear-gradient(90deg, #F92549, #C31432, #240B36);
  color: white;
  border-radius: 9px;
  padding: 1.5rem;
  margin: 0 auto 1.5rem;   /* rata tengah otomatis */
  width: 90%;             /* biar fleksibel */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 6px 8px rgba(0,0,0,0.18);

}

.total-card .left h2,
.total-card .right h2 {
  margin: 0.5rem 0 0;
}
.total-card .date {
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
  text-align: right;
}

/* Filter section */
.desc {
  margin-bottom: 1rem;
  font-size: 0.9rem;
}
.filters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-bottom: 1rem;
}
.filters input,
.filters select {
  padding: 0.6rem;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 0.9rem;
}
.btn-row {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
}

/* History list */
.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 0.8rem 0;
  flex-wrap: wrap;
}
.arrow {
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
}
.history-item.up .arrow { color: red; }
.history-item.down .arrow { color: green; }
.info {
  flex: 1;
  min-width: 150px;
}
.amount {
  font-weight: bold;
  color: red;
}
.amount.zero {
  color: #000;
}

/* Responsif untuk HP */
@media (max-width: 768px) {
  .total-card {
    flex-direction: column;
    align-items: flex-start;  /* tetap rata kiri */
    text-align: left;         /* teks juga rata kiri */
  }
  .filters {
    grid-template-columns: 1fr;
  }
  .btn-row {
    justify-content: flex-start;
  }
  .history-item {
    flex-direction: column;
    align-items: flex-start;
  }
  .amount {
    margin-top: 0.5rem;
  }
}
</style>

