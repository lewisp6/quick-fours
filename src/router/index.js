import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateGrid from "../views/CreateGrid.vue";
import Game from "../views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateGrid,
    },
    {
      path: "/grid",
      name: "grid",
      component: Game,
    },
  ],
});

export default router;
