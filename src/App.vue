<template>
  <div id="app">
  <Header />
  <!--header밑에 자주바뀌는 컨텐츠 영역 router 넣어줌--> 
   <div id="content" class="content">
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';


//갖고온 import한 컴포넌트를 아래 컴포넌트 칸에 넣음 
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>

</style>
