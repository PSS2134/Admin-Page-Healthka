/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables/index";
import DriversTables from "layouts/tables/driversindex";
import MedicineDriversTables from "layouts/tables/medicinedriversindex";
import OperatorsTables from "layouts/tables/operatorsindex";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Form from "layouts/billing/components/BillingInformation/FamilyForm";
import "layouts/billing/components/BillingInformation/form.css";
import AmbulanceDriversProfile from "layouts/driversprofile/Ambulancedriversprofile";
import PatientsProfile from "layouts/billing/components/PrescriptionPortal/patient";
import MedicineDriversProfile from "layouts/driversprofile/MedicinedriversProfile";
import OperatorsProfile from "layouts/operatorsprofile/operatorsprofile";
import Orders from "layouts/orders/orders";
import OrderForm from "layouts/orders/orderForm";
import OrdersDetail from "layouts/orders/ordersDetail";
import Medicine from "layouts/medicine/Medicine";


// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "clist",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/customers",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Operators",
    key: "olist",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/operators",
    component: <OperatorsTables />,
  },
  {
    type: "collapse",
    name: "Ambulance Drivers",
    key: "dlist",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/ambulancedrivers",
    component: <DriversTables />,     
    // Routes first letter should be capital that is why <driverstables /> is not allowed but <DriversTables /> is allowed

  },
  {
    type: "collapse",
    name: "Medicine Drivers",
    key: "mlist",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/medicinedrivers",
    component: <MedicineDriversTables />,     
    // Routes first letter should be capital that is why <driverstables /> is not allowed but <DriversTables /> is allowed

  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/orders",
    component: <Orders />,
  },
  // {
  //   type: "collapse",
  //   name: "Med Delivery-boys Profile",
  //   key: "list",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  {
    // type: "collapse",
    name: "Customer Profile",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing/:customerid",
    component: <Billing />,
  },
  {
    // type: "collapse",
    name: "Patient Profile",
    key: "patient",
    route: "/patient",
    component: <PatientsProfile />,
  },
  
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  /* Route that will not appear on side nav as type collapse is excluded but routing is done, Ye hua kaise, collapse ka kya role hai aur ye side-nav bhi aaraha hai form pe ye kaise?? */
  {
    name:"form",
    key:"form",
    route:"/form",
    component: <Form />,

  },
  {
    // type: "collapse",
    name: "medicineorder",
    key: "medicineorder",
    route: "/orders/add",
    component: <Medicine/>,
  },
  {
    // type: "collapse",
    name: "orderDetail",
    key: "orderDetail",
    route: "/orders/detail/:orderid",
    component: <OrdersDetail />,
  },
  {
    name:"ambulancedriversprofile",
    key:"ambulancedriversprofile",
    route:"/ambulancedriversprofile",
    component: <AmbulanceDriversProfile />,

  },
  {
    name:"medicinedriversprofile",
    key:"medicinedriversprofile",
    route:"/medicinedriversprofile",
    component: <MedicineDriversProfile />,

  },
  {
    name:"operatorsprofile",
    key:"operatorsprofile",
    route:"/operatorsprofile",
    component: <OperatorsProfile />,

  }
];


export default routes;
