<template>
  <h2>當前求和為: {{ sum }}</h2>
  <button @click="sum++">點我+1</button>
  <hr />
  <h2>當前的訊息為: {{ msg }}</h2>
  <button @click="msg += '!'">修改訊息</button>
  <hr />
  <h2>姓名: {{ person.name }}</h2>
  <h2>年齡: {{ person.age }}</h2>
  <h2>薪資: {{ person.job.j1.salary }}K</h2>
  <button @click="person.name += `~`">修改姓名</button>
  <button @click="person.age++">增長年齡</button>
  <button @click="person.job.j1.salary++">增加薪資</button>
</template>

<script>
import { reactive, ref, watch, watchEffect } from "vue";

export default {
  name: "Demo",
  setup() {
    // 數據
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "馬克",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });

    watchEffect(()=>{
      console.log('test watcheffect')
      const x1= sum.value;
      const x2= person.age;
    })
 
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

