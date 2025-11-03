<template>
  <aside :class="['sidebar', { expanded }]">
    <!-- Tombol Expand/Collapse -->
    <div class="toggle-btn" @click="toggleSidebar">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </div>

    <ul>
      <!-- Home -->
      <li :class="{ active: activeMenu==='home' }" @click="selectMenu('home'); $router.push('/')">
        <div class="menu-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3 12 L12 3 L21 12 V21 H3 Z" fill="none" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span v-if="expanded" class="menu-text">Home</span>
        </div>
      </li>

      <!-- Tarif -->
      <li :class="{ active: activeMenu==='tarif' }" @click="selectMenu('tarif'); $router.push('/tarif')">
        <div class="menu-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4 6 H20 M4 12 H20 M4 18 H20" fill="none" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span v-if="expanded" class="menu-text">Tarif</span>
        </div>
      </li>

      <!-- Histori -->
      <li :class="{ active: activeMenu==='history' }" @click="selectMenu('history'); $router.push('/history')">
        <div class="menu-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 8 V12 L14 14" fill="none" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span v-if="expanded" class="menu-text">History</span>
        </div>
      </li>

      <!-- CCTV -->
      <li :class="{ active: activeMenu==='cctv' }" @click="selectMenu('cctv'); $router.push('/cctv')">
        <div class="menu-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span v-if="expanded" class="menu-text">CCTV</span>
        </div>
      </li>
    </ul>

    <!-- Account di pojok bawah -->
    <div class="account" :class="{ active: activeMenu==='account' }" @click="selectMenu('account'); $router.push('/akun')">
      <div class="menu-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M4 20 C4 16 20 16 20 20 Z" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span v-if="expanded" class="menu-text">Akun</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
const expanded = ref(false);
const activeMenu = ref('home');

function toggleSidebar() {
  expanded.value = !expanded.value;
}

function selectMenu(menu) {
  activeMenu.value = menu;
}
</script>

<style scoped>
.sidebar {
  width: 60px;
  background: #020025;
  color: white;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
  overflow: hidden;
  z-index: 1000;
}

.sidebar.expanded {
  width: 200px;
}

/* Toggle button */
.toggle-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  cursor: pointer;
  z-index: 1100;
}

.toggle-btn .icon {
  width: 28px;
  height: 28px;
  stroke: currentColor;
  transition: transform 0.3s ease;
}

.sidebar.expanded .toggle-btn .icon {
  transform: rotate(45deg); /* jadi silang */
}

/* List menu */
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  flex: 1;
  transition: opacity 0.4s ease;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: color 0.3s;
}

.menu-item svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
}

.menu-item .menu-text {
  margin-left: 1rem;
  white-space: nowrap;
}

/* Aktif */
li.active svg,
.account.active svg {
  color: #1D7FFF;
}

li.active .menu-text,
.account.active .menu-text {
  color: #1D7FFF;
}

/* Account */
.account {
  width: 100%;
  margin-bottom: 1rem;
}

/* ================= HP MODE ================= */
@media (max-width: 768px) {
  .sidebar {
    width: 60px;
    height: 60px;          /* kotak kecil */
    min-height: unset;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  /* Sidebar expanded jadi bar horizontal */
  .sidebar.expanded {
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 1rem;
  }

  /* Default: semua menu hilang */
  .sidebar ul,
  .account {
    display: none;
  }

  /* Saat expanded, tampilkan semua icon */
  .sidebar.expanded ul,
  .sidebar.expanded .account {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: 1;
    width: 100%;
    margin: 0;
  }

  /* Text disembunyikan di HP */
  .menu-text {
    display: none;
  }
}
</style>


