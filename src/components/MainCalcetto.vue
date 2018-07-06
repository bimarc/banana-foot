<template>
    <MainCalcettoBig v-if="$mq === 'lg'"></MainCalcettoBig>
    <MainCalcettoSmall v-else></MainCalcettoSmall>
</template>

<script>

import MainCalcettoSmall from './MainCalcettoSmall.vue'
import MainCalcettoBig from './MainCalcettoBig.vue'

export default {
  name: 'MainCalcetto',
  props: {
    msg: String
  },
  components: {
    MainCalcettoSmall,
    MainCalcettoBig
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
