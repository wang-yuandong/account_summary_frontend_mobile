<template>
  <v-app>
    <div>
      <!-- 全局提示框 -->
      <div v-show="visible && type==1" class="dialog-tips dialog-center">
        <div class="txt">{{message}}</div>
      </div>

      <div v-show="visible && type==2" class="dialog-tips dialog-center">
        <div class="txt">{{message}}</div>
      </div>

      <v-alert
        type="success"
      >提示</v-alert>

      <!--  <v-alert-->
      <!--    :value="visible"-->
      <!--    outlined-->
      <!--    text-->
      <!--    type="success"-->
      <!--  >-->
      <!--  测试-->
      <!--  </v-alert-->
      <!--    :value="visible">-->
    </div>
  </v-app>
</template>
<script>
  export default {
    data() {
      return {
        value: true,
        visible: false,
        message: "",
        type: 1,
      };
    }
  };
</script>
<style scoped>
  .dialog-tips {
    position: absolute;
    z-index: 100;
    max-width: 90vw;
    height: 6vw;
    white-space: nowrap;
    background-color: #fff;
    border-radius: 3vw;
    padding-left: 10vw;
    padding-right: 3vw;
    left: 50%;
    top: 8vw;
    transform: translate(-50%);
    animation: name 2s ease-in;
  }

  .txt {
    font-size: 2.6vw;
    line-height: 6vw;
    width: 100%;
    overflow: hidden;
    color: rgba(182, 142, 100, 1);
  }

  @-webkit-keyframes name {
    0% {
      left: 100%;
    }
    20% {
      left: 50%;
    }
    80% {
      left: 50%;
    }
    100% {
      left: -100%;
    }
  }
</style>

