import Vue from "vue";
import Router from "vue-router";

import MyPage from "~/components/Test";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    keepDefaultRouter: true,
    routes: [
      {
        path: "/tester",
        component: MyPage
      }
    ]
  });
}
