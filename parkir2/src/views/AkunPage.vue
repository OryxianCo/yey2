<template>
  <LayOut>
    <!-- Header Profil -->
    <CardProfile />

    <!-- Tombol-tombol -->
    <ButtonGroup />

    <!-- Tombol Keluar -->
    <div class="logout-container">
      <button class="fancy" @click="logout">
        <span class="top-key"></span>
        <span class="text">Keluar</span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
      </button>
    </div>
  </LayOut>
</template>

<script setup>
import LayOut from "../components/LayOut.vue"
import ButtonGroup from "../components/ButtonGroup.vue"
import CardProfile from "../components/CardProfile.vue"

function logout() {
  console.log("Keluar ditekan")
}
</script>

<style scoped>
.logout-container {
  margin: 1.5rem 2.5rem;
  text-align: right;
}

/* Gaya tombol tetap di sini */
.fancy {
  width: 100%;
  text-align: center;
  background-color: transparent;
  border: 2px solid #C31432;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 1.25em 2em;
  position: relative;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  font-size: 13px;
}

.fancy:hover {
  color: white;
  background: linear-gradient(90deg, #020025, #C31432);
  cursor: crosshair;
}

.fancy::before {
  content: " ";
  width: 1.5625rem;
  height: 2px;
  background: #C31432;
  top: 50%;
  left: 1.5em;
  position: absolute;
  transform: translateY(-50%);
  transition: background 0.3s linear, width 0.3s linear;
}

.fancy .text {
  font-size: 1.125em;
  line-height: 1.33333em;
  padding-left: 2em;
  display: block;
  text-align: center;
  transition: all 0.3s ease-in-out;
  color: #C31432;
}

.fancy .top-key,
.fancy .bottom-key-1,
.fancy .bottom-key-2 {
  height: 2px;
  position: absolute;
  background: #e8e8e8;
  transition: width 0.5s ease-out, left 0.3s ease-out, right 0.3s ease-out;
}

.fancy .top-key {
  width: 1.5625rem;
  top: -2px;
  left: 0.625rem;
}

.fancy .bottom-key-1 {
  width: 1.5625rem;
  right: 1.875rem;
  bottom: -2px;
}

.fancy .bottom-key-2 {
  width: 0.625rem;
  right: 0.625rem;
  bottom: -2px;
}

.fancy:hover::before {
  width: 0.9375rem;
  background: white;
}

.fancy:hover .text {
  color: white;
  padding-left: 1.5em;
}

.fancy:hover .top-key {
  left: -2px;
  width: 0px;
}

.fancy:hover .bottom-key-1,
.fancy:hover .bottom-key-2 {
  right: 0;
  width: 0;
}

/* Responsif tombol */
@media (max-width: 768px) {
  .logout-container {
    margin: 1rem;
    text-align: center;
  }

  .fancy {
    font-size: 14px;
    padding: 10px 1.5em;
  }
}
</style>
