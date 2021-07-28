<template>
  <h1>我是APP組件678</h1>
  <h2>姓名: {{ person.name }}</h2>
  <h2>年齡: {{ person.age }}</h2>
  <button @click="test">測試觸發一下Demo組件的Hello事件</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",
  props:['msg','school'],
  emits:['hello'],
  setup(props,context) {
    //   console.log(props);
    //   console.log(context.attrs); //相當於Vue2中的$attrs
    //   console.log(context.emit); //觸發自定義事件
      console.log(context.slots); //插槽
    // 數據
    let person = reactive({
      name: "馬克",
      age: 18,
    });

    // 方法
    function test(){
        context.emit('hello',666)
    }
 
    return {
      person,
      test
    };

    // return ()=>h('h1','矽谷')
  },
};
</script>

