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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useEffect,useState } from 'react';
// Billing page components
import Bill from "layouts/billing/components/Bill";

const arr=[{
  name:"oliver liam",
  contact:"viking burrito",
  email:"oliver@burrito.com",
  address:"FRB1235476"

}]

 


function BillingInformation() {
  const [datafetched,setDatafetched]=useState([]);
  // useEffect(()=>{
  //   fetch("http://localhost:5000/add-member").then(res=>( res.json())).then((data)=>{
  //   console.log(data);  
  //   setDatafetched(data)});
  //   },[])

  return (
    <Card className="familymemberscard"  id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Family Members
        </MDTypography>
        <a href="/form" ><MDButton  id="familymembersbtn" style={{"margin":"3% 0 0 0",
        "background-color":"#B0DAFF","box-shadow": "2px 2px 2px "}} variant="text" color="dark">
               ➕ Add New
              </MDButton> </a>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>

        {
          datafetched && datafetched.map(member=>(<Bill
            name={member.name}
            contact={member.contact}
            email={member.email}
            address={member.address}
          />))
        }
          {/* <Bill
            name="oliver liam"
            contact="viking burrito"
            email="oliver@burrito.com"
            address="FRB1235476"
          />
          <Bill
            name="lucas harper"
            contact="stone tech zone"
            email="lucas@stone-tech.com"
            address="FRB1235476"
          />
          <Bill
            name="ethan james"
            co="fiber notion"
            email="ethan@fiber.com"
            address="FRB1235476"
            noGutter
          /> */}
        </MDBox>
      </MDBox>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </Card>
  );
}

export default BillingInformation;
