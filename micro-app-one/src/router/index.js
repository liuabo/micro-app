import Home from "@/views/home/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/list",
    name: "List",
    component: () => import("@/views/list")
  },
  {
    path: "/communication",
    name: "Communication",
    component: () => import("@/views/communication")
  }
];

export default routes;
