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
import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";


function ambulanceInvoices(props) {
  const [searchValue, setSearchValue] = useState("");
const [aOrders,setAOrders] = useState([]);
const [userData,setUserData] = useState([])

  const Search = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 
  useEffect(()=>{
   fetch("http://localhost:4000/api/user/admin/getAllAmbulanceOrders").then(res=>res.json()).then(data=>{
    
     if(data.apiSuccess && data.resSuccess)
     {
      console.log(data);
       setAOrders(data.data);
     }
   });
  },[])
  const filteredOrders = aOrders.filter((order) =>
  String(order.OrderID).toLowerCase().includes(searchValue.toLowerCase())
);
useEffect(()=>{
  fetch("http://localhost:4000/api/user/admin/getAllCustomers").then(res=>res.json()).then(datas=>{
    if(datas.apiSuccess && datas.resSuccess)
    {
    //   console.log(datas.result);
      setUserData(datas.result);
  }})
},[])
  return (
    <Card className={props.class}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Ambulance Orders
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
            filteredOrders.map((order) =>{ 
              const date=order.StartTime.slice(0,10);
              const year=date.slice(0,4);
              console.log(year);
              const mon=Number(date.slice(5,7));
              console.log(mon);
              const month=months[mon-1];
             console.log(month);
             const day=date.slice(8,10);
              let name={fname:"",lname:""};
              let contact;
              userData.map((customer)=>{
            if(customer.CustomerID===order.CustomerID)
            {
              name={fname:customer.FirstName,lname:customer.LastName}
              contact=customer.PhoneNumber
            }
            return(<>done</>)
              })

              return(
             
              <Invoice
                date={`${month}, ${day}, ${year}`}
                id={order.OrderID}
                price={order.PaymentID}
                name={name.fname}
                contact={contact}
              />
            )})
          ) : (
            <h2 style={{ textAlign: "center", margin: "auto 0" }}>No results found</h2>
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ambulanceInvoices;
