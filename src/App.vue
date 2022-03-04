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
.font {
  font-family: $font-family;
}
.font-thai {
  font-family: $font-family-thai;
}

.font-head {
  font-size: 20px;
  font-weight: $font-semi-bold;
}
.font-body {
  font-size: 12px;
  font-weight: $font-regular;
}
.font-small {
  font-size: 8px;
  font-weight: $font-light;
}

// Small devices (landscape phones, 576px and up)
@media screen and (min-width: 576px) {
  .font-head {
    font-size: 24px;
  }
  .font-body {
    font-size: 16px;
  }
  .font-small {
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
