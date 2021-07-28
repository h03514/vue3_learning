<template>
  <h1>我是APP組件</h1>
  <h2>姓名: {{ person.name }}</h2>
  <h2>年齡: {{ person.age }}</h2>
  <h2>工作種類: {{ person.job.type }}</h2>
  <h2>工作薪水: {{ person.job.salary }}</h2>
  <h2>愛好: {{ person.job.hobby }}</h2>
  <h3>測試的數據c: {{ person.job.a.b.c }}</h3>

  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
    // 數據
    let person = reactive({
      name: "馬克",
      age: 18,
      job: {
        type: "前端工程師",
        salary: "60K",
        a: {
          b: {
            c: 666,
          },
        },
        hobby: ["打牌", "桌遊", "滑IG"],
      },
    });

    // 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.type = "UI工程師";
      person.job.salary = "55K";
      person.job.a.b.c = 999;
      person.job.hobby[0] = "寫code";
    }

    return {
      name,
      age,
      changeInfo,
      job,
      person,
    };

    // return ()=>h('h1','矽谷')
  },
};
</script>

