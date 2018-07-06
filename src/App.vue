<template>
  <div id="app">
    <MainCalcetto></MainCalcetto>
  </div>
</template>

<script>
import MainCalcetto from './components/MainCalcetto.vue'

export default {
  name: 'app',
  components: {
    MainCalcetto
  }
}
</script>

<style>

  @import './Calcetto-Cad/style.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html {
  overflow: auto !important;
  height: 100%;
  width: 100%;
}

body, #app {
  height: 100%;
  width: 100%;
}

  .bottomNavCustom button.ballMenu div {
      margin-top: -22px !important;
  }

</style>
