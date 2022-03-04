<template>
  <div class="font font-regular">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/scss/eden-whitepaper.scss";
.w-font {
  font-family: $w-font-family;
}
.w-font-thai {
  font-family: $w-font-family-thai;
}

.w-font-head {
  font-size: 20px;
  font-weight: $w-font-semi-bold;
}
.w-font-body {
  font-size: 12px;
  font-weight: $w-font-regular;
}
.w-font-small {
  font-size: 8px;
  font-weight: $w-font-light;
}

// main website css
@import "@/assets/styles/scss/eden-homepage.scss";
.m-font-family-passero-one {
  font-family: $m-font-family-passero-one;
}

.m-font-family-overlock {
  font-family: $m-font-family-overlock;
}

.m-font-family-overlock-sc {
  font-family: $m-font-family-overlock-sc;
}

.m-font-thai {
  font-family: $m-font-family-thai;
}

// Small devices (landscape phones, 576px and up)
@media screen and (min-width: 576px) {
  .w-font-head {
    font-size: 24px;
  }
  .w-font-body {
    font-size: 16px;
  }
  .w-font-small {
    font-size: 12px;
  }
}

// Medium devices (tablets, 768px and up)
@media screen and (min-width: 768px) {
}

// Large devices (desktops, 992px and up)
@media screen and (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media screen and (min-width: 1200px) {
}

// width
::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}
// Track
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #cbd2d9;
  border-radius: 10px;
}

// Handle
::-webkit-scrollbar-thumb {
  background: #cbd2d9;
  border-radius: 10px;
}

// Handle on hover
::-webkit-scrollbar-thumb:hover {
  background: #cbd2d9;
}
</style>
