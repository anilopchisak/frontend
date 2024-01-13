import {ARCHIVE_ROUTE, DETAIL_ROUTE, MENU_ROUTE} from "./utils/consts";
import OrderDetail from "./pages/order_detail.js";
import OrderArchive from "./pages/order_archive.js";
import Menu from "./pages/menu.js";

export const publicRoutes = [
    {
        path: MENU_ROUTE,
        element: <Menu/>,
        title: 'Menu'
    },
    {
        path: ARCHIVE_ROUTE,
        element: <OrderArchive/>,
        title: 'Order Archive'
    },
    {
        path: DETAIL_ROUTE +'/:id',
        element: <OrderDetail/>
    },
];
