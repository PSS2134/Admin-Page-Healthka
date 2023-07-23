import React from "react";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function orderForm() {
  return (
    
     <form style={{"height":"100vh","display":"flex","alignItems":"center","justifyContent":"center"}} method="post">
     <Card pt={4} px={2} py={2} pb={2}>
     <div style={{"display":"flex"}}>
     <MDBox  pt={2} display="flex" alignItems="center">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             OrderId
         </MDTypography>
         <input type="text" style={{"backgroundColor":"white","color":"black","paddingTop":"5px","borderBottom":"1px solid black","width":"20vw","marginRight":"10%",}}/>
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             CustomerId
         </MDTypography>
         <input type="text" style={{"backgroundColor":"white","color":"black","paddingTop":"5px","borderBottom":"1px solid black","width":"20vw","marginRight":"10%",}}/>
     </MDBox>
     </div>
     <div style={{"display":"flex"}}>
     <MDBox pt={2} display="flex" alignItems="center">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             PatientId
         </MDTypography>
         <input type="text" style={{"backgroundColor":"white","color":"black","paddingTop":"5px","borderBottom":"1px solid black","width":"20vw","marginRight":"10%","borderRadius":"none"}}/>
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             SupplierId
         </MDTypography>
         <input type="text" style={{"backgroundColor":"white","color":"black","paddingTop":"5px","borderBottom":"1px solid black","width":"20vw","marginRight":"10%",}}/>
     </MDBox>
     </div>
     <div style={{"display":"flex"}}>
     <MDBox pt={2} display="flex" alignItems="center">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             MDriverId
         </MDTypography>
         <input type="text" style={{"backgroundColor":"white","color":"black","paddingTop":"5px","borderBottom":"1px solid black","width":"20vw","marginRight":"10%",}}/>
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             StatusId
         </MDTypography>
         <input type="text" style={{"backgroundColor":"white","color":"black","paddingTop":"5px","borderBottom":"1px solid black","width":"20vw","marginRight":"10%",}}/>
     </MDBox>
     </div>
     <div style={{"display":"flex"}}>
     <MDBox pt={2} display="flex" alignItems="center">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             PaymentId
         </MDTypography>
         <input type="text" style={{"backgroundColor":"white","color":"black","paddingTop":"5px","borderBottom":"1px solid black","width":"20vw","marginRight":"10%",}}/>
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center">
         <MDTypography px={2} style={{"textAlign":"center"}}>
            Date
         </MDTypography>
         <input type="text" style={{"backgroundColor":"white","color":"black","paddingTop":"5px","borderBottom":"1px solid black","width":"20vw","marginRight":"10%"}}/>
     </MDBox>
</div>
 <button type="submit" style={{"width":"20%","display":"block","margin":"8% auto","padding":"2%","backgroundColor":"burlywood","fontWeight":"600","border":"none","boxShadow":"3px 3px 3px black","fontSize":"18px"}}>Submit</button>
 </Card>
 </form>

    
  )
}

export default orderForm
