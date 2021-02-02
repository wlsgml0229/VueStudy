<template>
    <div>
        <!--텍스트로 받아오기-->
        <h1>Welcome to {{title2}}!!</h1>
        <input type="text" v-model="input1" /> <!--value 대신 v-model -->
        <button type="button" @click="getData">Get</button> <!--onClick , @click-->
        <button type="button" @click="setData">Set</button> 

        <select class="form-control" v-model="region" @change="changeRegion">
                <!--key= 유일한 key 값 , data, index--> <!--d.t data에 options에있는 t값 가져옴-->
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>
        <!--
             v-if는 조건이 만족되야 엘레먼트를 렌더링함, 만족안할시에는 렌더링 아예 안함
             v-show도 비슷하지만,조건에 만족하고 안하고를 떠나서 무조건 렌더링은 함 (화면에 보이지 않는 것)
             화면에 자주 보이고 안보이고를 반복한다면 v-show를 쓰는게 리소스면에서 유리함
             특정조건에 이르렀을때만 보이는게 v-if 사용자가 그액션을 할지 안할지 모르니까 초기화면에서 리소스를 적게 잡아먹음 
         -->
        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  //데이터 핸들링
  data() {
      return {
        title : "Vue",
        title2 : "Seoul",  
        input1: "",
        options: [
            {v:"S",t:"Seoul"},
            {v:"J",t:"Jeju"},
            {v:"D",t:"Daegu"},
        ],
        region : "S",
        tableShow: false,
      };
  },
  watch: {
      //watch 안에 변수명과 같은 메소드를 만들어 놓으면 데이터값이 변하는 것을 바로 감지 (데이터 모니터링 할 때)
      input1(){
          console.log(this.input1);
      },
      title(){
        
      }
  },
  //function 만드는곳 
  //메소드 안에서 데이터에 접근할때는 변수명만 넣으면 안되고 this.를 추가 
  methods: {
      getData() {
          alert(this.input1);
      },
      setData() {
          this.input1=12345;
      },
      changeRegion(){
          alert(this.region);
      },
  },
  beforeCreate() {
      console.log("beforeCreate");
  },
  created () {
  console.log("created");
  },
  beforeMount(){
  console.log("beforeMount");
  },
  mounted(){
  console.log("mounted");
  },
  beforeUpdate(){
  console.log("beforeUpdate");
  },
  updated(){
  console.log("updated");
  },
  beforeDestroy(){
  console.log("beforeDestroy");
  },
  destroyed(){
  console.log("destroyed");
  }
};
</script>