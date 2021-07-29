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
import { reactive, ref, watch } from "vue";

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

    // 情況一  監視ref所定義的一個響應式數據
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum變了", newValue, oldValue);
    // },{immediate:true});

    // 情況二  監視ref所定義的多個響應式數據
    // watch([sum ,msg], (newValue, oldValue) => {
    //   console.log("sum或msg變了", newValue, oldValue);
    // },{immediate:true});

    /*
      情況三  監視reactive所定義的一個響應式數據中的全部屬性
         1.注意:無法正確的獲取oldValue
         2.注意:強制開啟了深度監視(deep配置無效)
    */
    /*
     watch(person, (newValue, oldValue) => {
       console.log("person變了 ", newValue, oldValue);
     },{deep:false}); 此處的deep 配置無效
    */

    // 情況四: 監視reactive所定義的一個響應式數據中的某個屬性
    // watch(()=>person.age, (newValue, oldValue) => {
    //   console.log("person的age變了 ", newValue, oldValue);
    // });

    // 情況五 監視reactive所定義的一個響應式數據中的某些屬性
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log("person的age變了 ", newValue, oldValue);
    // });

    // 特殊情況
    watch(()=>person.job, (newValue, oldValue) => {
      console.log("person的 job 變了 ", newValue, oldValue);
    },{deep:true});
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

