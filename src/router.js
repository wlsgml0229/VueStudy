import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

//뷰내에서 뷰라우터를 사용하겠다
Vue.use(VueRouter);

export default new VueRouter({   // eslint-disable-line no-unused-vars
    mode: "history",
    routes : [
        //로컬호스트 8080 기본 path 일때 컴포넌트 Home 띄우겠다
        {
            path : "/", 
            component: Home
        },
        {
            path: "/about",
            component: About
        }
    ]
});


