/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Dvr, Style } from "@mui/icons-material";
import  "layouts/tables/data/customersTableData.css";
import divider from "assets/theme/components/divider";
import { useEffect,useState } from "react";

export default function data() {

  const [userData, setUserData]=useState([]);
  const [errorMsg, setErrorMsg]=useState("");

  useEffect(()=>{
    fetch("http://localhost:4000/api/user/admin/getAllCustomers").then(res=>res.json()).then(datas=>{
      if(datas.apiSuccess && datas.resSuccess)
      {
        console.log(datas.result);
        setUserData(datas.result);
      }
      else{
        setErrorMsg(datas.message);
      }
    }).catch(err=>setErrorMsg(err));
  },[])
 
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src=  "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
// Assuming you have an array of user data called 'userData'
// const userData = [
//   { UID: '6666666666', customer: 'John Michael', phone: '1111111111', status: 'online' },
//   { UID: '6666666666', customer: 'John Michael', phone: '1111111111', status: 'online' },
//   { UID: '6666666666', customer: 'John Michael', phone: '1111111111', status: 'online' },
//   // Add more user data objects here...
// ];

// Map the userData array to generate table rows
const tableRows = userData.map((user) => 
({
    UID: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {user.CustomerID}
      </MDTypography>
    ),
    customer: (
      <div className="namebox">
        <a href={`/billing/${user.CustomerID}`} alt="personalpage">
          <Author image={team2} name= {user.FirstName} email="john@creative-tim.com" />
        </a>
      </div>
    ),
    status: (
      <MDBox ml={-1}>
        <MDBadge badgeContent={user.status} color="success" variant="gradient" size="sm" />
      </MDBox>
    ),
    phone: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {user.PhoneNumber}
      </MDTypography>
    ),
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </MDTypography>
    ),
  })
);

// // Use the 'tableRows' array in your table component
// // Assuming you have a table component called 'MyTable'
// <MyTable columns={columns} rows={tableRows} />;

  return {
    columns: [
      { Header: "UID", accessor: "UID", align: "center" },
      { Header: "customer", accessor: "customer", width: "35%", align: "left" },
      { Header: "phone", accessor: "phone", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: tableRows // passing tableRows to rows as this row also contains array of the rows, instead of declaring tableRows and assigning it to rows directly map it here.
  };
}
