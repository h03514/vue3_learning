<template>
  <h1>我是APP組件</h1>
  <h2>姓名: {{name}}</h2>
  <h2>年齡: {{age}}</h2>
  <h2>工作種類: {{job.type}}</h2>
  <h2>工作薪水: {{job.salary}}</h2>
  <button @click="changeInfo"> 修改人的信息 </button>
</template>

<script>

import {ref} from 'vue'

export default {
  name: 'App',
  setup(){

    //數據
    let name= ref('張三');
    let age= ref(20);
    let job=ref({
      type:'前端工程師',
      salary:'60K'
    });

   
   //方法
   function changeInfo(){
     name.value='李四'
     age.value=48
     job.value.type='UI工程師'
     job.value.salary='55K'
   }

    return {
      name,
      age,
      changeInfo,
      job
    }

    // return ()=>h('h1','矽谷')
    
  }
}
</script>

