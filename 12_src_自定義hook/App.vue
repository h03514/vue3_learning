<template>
  <button @click="isShowDemo = !isShowDemo">切換顯示/隱藏</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
import { ref } from '@vue/reactivity';
import Demo from "./components/Demo";

export default {
  name: "App",
  components:{Demo},
  setup(){
    let isShowDemo=ref(true)
    return{isShowDemo}
  }
 
};
</script>

