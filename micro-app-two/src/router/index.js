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
  }
];

export default routes;
