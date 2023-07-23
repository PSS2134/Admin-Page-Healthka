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
import react, {useEffect,useState} from 'react';
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


export default function data() {
  // let data1;
  // const [Datanew, setDatanew]=useState();
  // const fetchAPI= async(url1)=>{
   
  //   try{ const res=await fetch (url1);
  //      data1= await res.json();
  //       setDatanew(data1);
  //     console.log(data1);}
  //   catch(err){
  //     console.log(err);
  //   }
 
 
  
  // }
  const [data1, setData1] = useState();
  let datanew;
  const fetchData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const jsonData = await response.json();
      console.log(jsonData);
      datanew=jsonData;
      setData1(jsonData);
      console.log(data1);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
 console.log(datanew);
  // useEffect(()=>{
  //  fetchData("https://reqres.in/api/users/2");
   
  // },[])
 
 
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
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

  return {
    
    columns: [
      { Header: "UID", accessor: "UID", align: "center" },
      { Header: "driver", accessor: "driver", width: "30%", align: "left" },
      { Header: "phone", accessor: "phone", align: "left" },
      { Header: "Location", accessor: "location", align: "center" },
      { Header: "car-number", accessor: "carnumber", align: "center" }, 
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [1,2,3,4,5].map(()=>
({UID: (
        
  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" >
 {1}
</MDTypography>


),

driver:  
<div className="namebox"><a href="/ambulancedriversprofile" alt="driverpersonalpage">
 <Author image={team2} name={2} email="john@creative-tim.com" /></a></div>,
location: (
    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    Car
  </MDTypography>
),
carnumber: (
    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    1111111111
  </MDTypography>
  ),
  status: (
    <MDBox ml={-1}>
      <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    </MDBox>
  ),
phone: (
  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    1111111111
  </MDTypography>
),
action: (
  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    Edit
  </MDTypography>
),
})
    )
      
     
    
  };
}
