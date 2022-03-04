<template>
<div class="navbar">
  <div class="navbar__container--md tw-grid tw-grid-cols-2">
    <div class="navbar__logo--md">
      <span class="m-font-family-passero-one">EDENVERDEN</span>
    </div>
    <div class="navbar__menu--md">
      <div class="navbar__submenu--md m-font-family-overlock-sc">
        <span>Story</span>
      </div>
      <div class="navbar__submenu--md m-font-family-overlock-sc">
        <span>Roadmap</span>
      </div>
      <div class="navbar__submenu--md m-font-family-overlock-sc">
        <span>Market</span>
      </div>
      <div class="navbar__submenu--md m-font-family-overlock-sc">
        <span>Whitepaper</span>
      </div>
    </div>
  </div>
  <div class="navbar__container--sm">
    <div class="navbar__logo--sm">
      <span class="m-font-family-passero-one">EDENVERDEN</span>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: "BaseNavbar",
}
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 1;
}
.navbar__container--sm {
  display: flex;
  position: relative;
  justify-content: center;
}
.navbar__logo--sm {
  font-size: 32px;
}
.navbar__container--md {
  display: none;
}
.navbar__logo--md {
  font-size: 36px;
  margin-left: 50px;
}
.navbar__menu--md {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.navbar__submenu--md {
  padding-top: 10px;
  font-size: 12px;
}

// Small devices (landscape phones, 576px and up)
@media screen and (min-width: 576px) {
  .navbar__container--sm {
    display: none;
  }
  .navbar__container--md {
    display: grid;
    position: fixed;
    width: 100%;
    background: whitesmoke;
  }

}

// Medium devices (tablets, 768px and up)
@media screen and (min-width: 768px) {
  .navbar__logo--md {
    font-size: 36px;
  }
  .navbar__submenu--md {
    font-size: 22px;
  }
}

// Large devices (desktops, 992px and up)
@media screen and (min-width: 992px) {
  .navbar__logo--md {
    font-size: 48px;
  }
  .navbar__submenu--md {
    font-size: 24px;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media screen and (min-width: 1200px) {
}
</style>
