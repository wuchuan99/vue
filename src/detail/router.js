import Vue from "vue";
import Router from "vue-router";
import detail from "./views/detail.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/detail",
      name: "detail",
      component: detail
    },
    {
      path: "/aboutdetail",
      name: "aboutdetail",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/aboutdetail.vue")
    }
  ]
});
