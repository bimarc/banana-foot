<template>
  <div class="smallContainer">
    <div class="smallContainerBG"><div class="smallContainerBGTrans"></div></div>
    <div class="soccerField">
        <div class="soccerFieldBG"></div>
    </div>
    <v-bottom-nav class="bottomNavCustom"
        :active.sync="bottomNav"
        :value="true"
        absolute
        color="transparent"
      >
        <div class="bottomNavCustomBG"></div>
        <v-btn
          color="teal"
          flat
          value="competizioni"
        >
          <v-icon large>cc-coppa</v-icon>
        </v-btn>

        <v-btn class="ballMenu"
          color="teal"
          flat
          value="palla"
        >
          <v-icon x-large>cc-palla</v-icon>
        </v-btn>

        <v-btn
          color="teal"
          flat
          value="notifications"
        >
          <v-icon large>notifications</v-icon>
        </v-btn>
      </v-bottom-nav>
    </div>
</template>

<script>
export default {
  name: 'MainCalcettoSmall',
  props: {
    msg: String
  },
  data () {
      return {
        bottomNav: 'recent'
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped lang="less">-->
<style scoped lang="less">

  .soccerField {
    height: 90%;
    width: 100%;
    position: relative;
    .soccerFieldBG {
      background:url(./../assets/campo.svg);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }

  .smallContainer {
    height: 100%;
    width: 100%;
  }
 .smallContainerBG {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
 .smallContainerBGTrans {
    position: absolute;
    background-color: #eaf4ff;
    transform: rotate(-5deg);
    height: 400px;
    width: 500%;
    left: -100%;
    bottom:0;
  }

  .bottomNavCustomBG {
      height: calc(100% - 10px);
      position: absolute;
      width: 100%;
      bottom: 0;
      /* background-color: blue; */
      border-top: 1px solid #e2e2e2;
  }
  .bottomNavCustom {
    -webkit-box-shadow: none;
        box-shadow: none;

    button {
      &:not(.ballMenu) {
        height: calc(100% - 10px);
        margin-top: 10px;
        padding-top: 5px;
      }
      span {
        display: none;
      }
      &.ballMenu {
        position: relative;
        padding: 0px;
        height: calc(100% - 10px);
        margin-top: 10px;
        color:#0D47A1 !important;
        opacity: 1 !important;
        i::after {
          content: "";
          position: absolute;
          background-color: white;
          border-radius: 100%;
          height: 60px;
          width: 60px;
          z-index: 0;
        }
        i {
            font-size: 60px !important;
            &::before {
                z-index: 1;
            }
        }
      }


    
    }

  }
</style>
