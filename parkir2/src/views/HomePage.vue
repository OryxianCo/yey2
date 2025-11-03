<template>
  <LayOut>
    <PlaceHolder>
      <CardPage>
        <h2>Kendaraan Masuk</h2>
        <p class="desc">Catat Kendaraan yang parkir</p>
        <input type="text" placeholder="Nomor Plat" class="input" />
        <div class="btn-group">
          <ButTon variant="secondary">Motor</ButTon>
          <ButTon variant="secondary">Mobil</ButTon>
        </div>
        <ButTon variant="primary">Simpan</ButTon>
      </CardPage>

      <CardPage>
        <h2>Kendaraan Keluar</h2>
        <p class="desc">Ketik nomor plat untuk melihat tarif parkir</p>
        <input type="text" placeholder="Nomor Plat" class="input" />
        <div class="btn-group">
          <ButTon variant="secondary">Motor</ButTon>
          <ButTon variant="secondary">Mobil</ButTon>
        </div>
        <ButTon variant="primary">Simpan</ButTon>
      </CardPage>

      <CardPage>
        <h2>Denda Kendaraan</h2>
        <p class="desc">Ketik nomor plat untuk melihat tarif denda parkir</p>
        <input type="text" placeholder="Nomor Plat" class="input" />
        <div class="btn-group">
          <ButTon variant="secondary">Motor</ButTon>
          <ButTon variant="secondary">Mobil</ButTon>
        </div>
        <ButTon variant="primary">Periksa</ButTon>
      </CardPage>
    </PlaceHolder>
  </LayOut>
</template>

<script setup>
import LayOut from '@/components/LayOut.vue'
import CardPage from '@/components/CardPage.vue'
import ButTon from '@/components/ButTon.vue'
import PlaceHolder from '@/components/PlaceHolder.vue'
</script>
