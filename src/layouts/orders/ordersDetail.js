import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ordersDetail() {

    const {orderid}=useParams();
    console.log(orderid);
const [order,setOrder]=useState({});
    useEffect(()=>{
      fetch("http://localhost:4000/api/user/admin/getAllAmbulanceOrders").then(res=>res.json()).then((data)=>{
        if(data.apiSuccess && data.resSuccess)
        {
            console.log(data);
            data.data.map((single)=>{
               
               if(single.OrderID===Number(orderid))
               {
               
                setOrder(single);
                
               }
               return (<>done</>)
            })
        }
      })
    },[])
console.log(order)
  return (
    <div>
    




    
     <form style={{"height":"100vh","display":"flex","alignItems":"center","justifyContent":"center"}} method="post">
    
     <Card pt={4} px={2} py={2} pb={2}>
     <h2 pt={4} style={{"textAlign":"center","padding":"10px"}}>Order Details</h2>
     <div style={{"display":"flex"}}>
     <MDBox  pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             OrderId : {order.OrderID}
         </MDTypography>
   
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             CustomerId : {order.CustomerID}
         </MDTypography>
     
     </MDBox>
     </div>
     <div style={{"display":"flex"}}>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             AdriverId : {order.ADriverID}
         </MDTypography>
       
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             PaitientId : {order.PaitientID}
         </MDTypography>
         
     </MDBox>
     </div>
     <div style={{"display":"flex"}}>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
            AmbulanceCarId : {order.AmbulanceCarID}
         </MDTypography>
       
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             StatusId :{order.StatusID}
         </MDTypography>
         
     </MDBox>
     </div>
     <div style={{"display":"flex"}}>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             PaymentId : {order.PaymentID}
         </MDTypography>
         
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
            Addons: {order.AddOns&&Object.values(order.AddOns).length?order.AddOns:<>none</>}
         </MDTypography>
        
     </MDBox>
</div>
    <div style={{"display":"flex"}}>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             StartTime : {order.StartTime}
         </MDTypography>
         
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
            EndTime : {order.EndTime}
         </MDTypography>
        
     </MDBox>
</div>
    <div style={{"display":"flex"}}>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
             StartLatLng : {order.StartLatLng}
         </MDTypography>
         
     </MDBox>
     <MDBox pt={2} display="flex" alignItems="center" width="30vw">
         <MDTypography px={2} style={{"textAlign":"center"}}>
           EndLatLng : {order.EndLatLng}
         </MDTypography>
        
     </MDBox>
</div>
 </Card>
 </form>

    
  




    </div>
  )
}

export default ordersDetail
