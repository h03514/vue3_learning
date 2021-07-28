<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="MC">
    <template v-slot:qwe>
      <span>MC學堂</span>
    </template>
    <template v-slot:aaa>
      <span>MC學堂</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: "App",
  components:{Demo},
  setup(){
    function showHelloMsg(value){
      alert(`已觸發hello事件, 收到的參數是:${value}`)
    }
    
    return{
      showHelloMsg
    }
  }
};
</script>

