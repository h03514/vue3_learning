<template>
  <h1>我是APP組件678</h1>
  姓: <input type="text" v-model="person.firstName" />
  <br />
  名: <input type="text" v-model="person.lastName" />
  <br />
  <span>全名:{{ person.fullName }}</span>
  <br />
  全名: <input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Demo",
  setup() {
    // 數據
    let person = reactive({
      firstName: "張",
      lastName: "馬克",
    });

    // 計算屬性 (沒有考慮計算屬性被修改的情況)
    // person.fullName= computed(()=>{
    // return person.firstName+'-'+person.lastName
    // })

    // 計算屬性_完整寫法 (有考慮計算屬性被修改的情況)
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    return {
      person
    };
  },
};
</script>

