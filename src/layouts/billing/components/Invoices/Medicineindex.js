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

//
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

const aOrders = [
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-1",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-2",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-3",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-4",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-5",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-6",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-7",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-8",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-9",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-1",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-1",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-1",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-1",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-1",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-1",
    price: "Rs222",
  },
  {
    date: "19",
    year: "2023",
    month: "March",
    id: "Healtka-2023-1",
    price: "Rs222",
  },
];
function medicineInvoices(props) {
  const [searchValue, setSearchValue] = useState("");

  const Search = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };
  const filteredOrders = aOrders.filter((order) =>
    order.id.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Card className={props.class}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          {props.title}
        </MDTypography>
      </MDBox>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between">
       <NavLink to="/orders/add"><button type="submit" style={{"padding":"8px", "width":"100%","borderRadius":"5px","backgroundColor":"#1B6B93","color":"white","border":"none"}}>Add New</button></NavLink> 

        <input
          onChange={Search}
          placeholder="search by order_id"
          className="orderSearch"
          type="search"
        />
      </MDBox>
      <MDBox p={2}>
        <MDBox
          className={props.scrollclassname}
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
        >
          {filteredOrders.length ? (
            filteredOrders.map((order) => (
              <Invoice
                date={`${order.month}, ${order.date}, ${order.year}`}
                id={order.id}
                price={order.price}
                name={props.name}
                contact={props.contact}
              />
            ))
          ) : (
            <h2 style={{ textAlign: "center", margin: "auto 0" }}>No results found</h2>
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default medicineInvoices;
