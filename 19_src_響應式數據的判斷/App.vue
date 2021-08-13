<template>
  <button @click="isShowDemo = !isShowDemo">切換顯示/隱藏</button>
  <Demo v-if="isShowDemo"></Demo>
  <h3>APP組件</h3>
</template>

<script>
import { ref,readonly,isRef,toRefs,isReactive,isReadonly,isProxy, reactive } from '@vue/reactivity';
import Demo from "./components/Demo";

export default {
  name: "App",
  components:{Demo},
  setup(){
    let car=reactive({name:'法拉利',price:'800W'})
    let sum =ref(0)
    let car2=readonly(car)
    
    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(sum))
    return{...toRefs(car)}
  }
 
};
</script>

