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

export default function data() {

 
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
      { Header: "customer", accessor: "customer", width: "35%", align: "left" },
      { Header: "phone", accessor: "phone", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {UID: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          6666666666
        </MDTypography>
      ),
      
        customer: <div className="namebox"><a href="/billing" alt="personalpage"><Author image={team2} name="John Michael" email="john@creative-tim.com" /></a></div>,
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
      },
      {
        UID: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6666666666
          </MDTypography>
        ),
        customer: <div className="namebox"><a href="/billing" alt="personalpage"><Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" /></a></div>,
        
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        phone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2222222222
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {UID: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          6666666666
        </MDTypography>
      ),
        customer: <div className="namebox"><a href="/billing" alt="personalpage"><Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" /></a></div>,
        
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        phone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3333333333
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {UID: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          6666666666
        </MDTypography>
      ),
        customer:<div className="namebox"><a href="/billing" alt="personalpage"> <Author className="customerbox" image={team3} name="Michael Levi" email="michael@creative-tim.com" /></a></div>,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        phone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4444444444
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {UID: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          6666666666
        </MDTypography>
      ),
        customer: <div className="namebox"><a href="/billing" alt="personalpage"><Author image={team3} name="Richard Gran" email="richard@creative-tim.com" /></a></div>,
        
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        phone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           5555555555
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {UID: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          6666666666
        </MDTypography>
      ),
        customer: <div className="namebox"><a href="/billing" alt="personalpage"><Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" /></a></div>,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        phone: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6666666666
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
