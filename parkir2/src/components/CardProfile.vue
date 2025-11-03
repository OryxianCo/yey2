<template>
  <div class="profile-header">
    <div>
      <h2 class="nama">BUDI HARTONO WIJAYA</h2>
      <p class="info">(0897 888 000)</p>
      <p class="info">budihtrn@gmail.com</p>
    </div>
    <div class="right-side">
      <p class="logo-text">P</p>
      <p class="bergabung">Bergabung Sejak 2 Agustus 2025</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@400;600;700&family=Monoton&display=swap');

* {
  font-family: 'KoHo', sans-serif;
}

/* HEADER PROFIL */
.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  margin: 0 2.5rem; 
  background: linear-gradient(90deg, #020025, #C31432);
  border-radius: 10px;
  color: white;
}

.nama {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.info {
  font-size: 14px;
  margin: 2px 0;
}

.right-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.logo-text {
  font-family: 'Monoton', cursive;
  font-size: 6rem;
  background: linear-gradient(100deg, #2986ff, #f8657d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1;
}

.bergabung {
  font-size: 12px;
  margin: 0;
  margin-top: 4px;
}

/* Responsif HP & Tablet */
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 1rem;
    padding: 1rem;
  }

  .nama {
    font-size: 18px;
  }

  .info {
    font-size: 12px;
  }

  .logo-text {
    font-size: 3.5rem;
    align-self: center;
  }

  .bergabung {
    font-size: 11px;
    text-align: center;
    align-self: center;
  }
}
</style>
