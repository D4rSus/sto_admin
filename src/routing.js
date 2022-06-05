import MyMainPage from "@/pages/MyMainPage";
import MyAccount from "@/pages/MyAccount";
import MyOrders from "@/pages/MyOrders";

export default [
    {path: '/', component: MyMainPage},
    {path: '/login', component: MyAccount},
    {path: '/orders', component: MyOrders}
]
