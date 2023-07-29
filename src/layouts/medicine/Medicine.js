
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import "./Medicine.css";

const med=[
    { "id": "MED001", "name": "Aspirin", "price": 25.50 },
    { "id": "MED002", "name": "Ibuprofen", "price": 32.75 },
    { "id": "MED003", "name": "Paracetamol", "price": 15.25 },
    { "id": "MED004", "name": "Omeprazole", "price": 49.99 },
    { "id": "MED005", "name": "Amoxicillin", "price": 38.80 },
    { "id": "MED006", "name": "Atorvastatin", "price": 52.25 },
    { "id": "MED007", "name": "Losartan", "price": 30.90 },
    { "id": "MED008", "name": "Metformin", "price": 44.20 },
    { "id": "MED009", "name": "Lisinopril", "price": 59.50 },
    { "id": "MED010", "name": "Simvastatin", "price": 42.75 }
  ]

function Medicine() {
    
 const [quantity,setQuantity]=useState(0);
    const[searchValue,setSearchValue]=useState("");
    const Search = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
      };
      
      const filteredOrders = med.filter((order) =>
        order.name.toLowerCase().includes(searchValue.toLowerCase())
      );

 const handleIncrease=()=>{
 setQuantity(quantity+1);
 }
 const handleDecrease=()=>{
    setQuantity(quantity-1);
 }
  return (
    <>
     <h1 classNameName='' style={{"textAlign":"center","padding":'1rem',"margin":"1rem","marginLeft":"16rem"}}>Add Medicine</h1>
     <div style={{"marginLeft":"15rem"}}>
     <input style={{"display":"block","margin":"1% auto 3% auto","padding":"1%","borderRadius":"10px","width":"18%","border":"0.5px solid blue"}} type="search" onChange={Search}/>
     </div>
     
     <div style={{"display":"flex","justifyContent":"center","marginLeft":"16rem"}}>
     
        <table style={{"width":"80%","border":"1px solid black","borderRadius":"10px"}}>
            <tr style={{"display":"flex","justifyContent":"center","alignItems":'center',"padding":"1.5% 0","backgroundColor":"blue","color":"white"}}>
                <th style={{"width":"15%","textAlign":"center"}}>Id</th>
                <th style={{"width":"32%","textAlign":"center"}}>Name</th>
                <th style={{"width":"15%","textAlign":"center"}}>Price</th>
                <th style={{"width":"20%","textAlign":"center"}}>Quantity</th>
                <th style={{"width":"15%","textAlign":"center"}}>Total</th>
            </tr>
            <div style={{"height":"65vh","overflowY":"scroll"}}>
          { filteredOrders.length? filteredOrders.map((medicine)=>
                 (<tr style={{"display":"flex","justifyContent":"center","padding":"1.5% 0","borderBottom":"1px solid black","borderTop":"1px solid black",}}>
            <td style={{"width":"15%","textAlign":"center"}}>{medicine.id}</td>
            <td style={{"width":"34%","textAlign":"center"}}>{medicine.name}</td>
            <td style={{"width":"15%","textAlign":"center"}}>Rs {medicine.price}/-</td>
            <td style={{"display":"flex","alignItems":'center',"justifyContent":"center","width":"20%",}}><button onChange={handleIncrease} style={{"padding":'2% 3%',"margin":"1%","backgroundColor":"blue","color":"white"}} type='submit'>+</button>
            <input onChange={Search} placeholder='0' style={{"width":"10%","padding":'1%'}}/>
            <button onClick={handleDecrease} style={{"padding":'2% 3.5%',"margin":"1%","backgroundColor":"blue","color":"white"}} type='submit'>-</button></td>
            <td style={{"width":"15%","textAlign":"center"}}>Rs 20000</td>
            </tr>)
            )
          :<h1 style={{"marginTop":"20%","textAlign":"center"}}>No Medicine Found!</h1>}
          </div>
        </table>
       
     </div>
     <div style={{"float":"right","fontSize":"30px","marginRight":"8rem","marginTop":"1rem","display":"block","backgroundColor":"grey","padding":"0.5%","width":"fitContent","borderRadius":"5px"}}>
            Total:Rs 120000
        </div>
       

        <form style={{"height":"100vh","display":"flex","alignItems":"center","justifyContent":"flex-end","width":"85%" ,}} method="post">
    
    <Card pt={4} px={2} py={2} pb={2} display="block">
    <h2 pt={4} style={{"textAlign":"center","padding":"10px"}}>Order Details</h2>
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
  




        
      
</>
    
  )
}

export default Medicine;
