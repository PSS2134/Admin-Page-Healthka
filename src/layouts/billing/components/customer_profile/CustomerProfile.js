
import ReactDOM from 'react-dom';
import Card from "@mui/material/Card";
import "layouts/billing/components/customer_profile/customerprofile.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const customerProfile=(props) => {
const {customerid}=useParams();
const [userData, setUserData]=useState();
const [errorMsg, setErrorMsg]=useState("");

useEffect(()=>{
  fetch("http://localhost:4000/api/user/admin/getAllCustomers").then(res=>res.json()).then(datas=>{
    if(datas.apiSuccess && datas.resSuccess)
    {
    //   console.log(datas.result);
      datas.result.map((customer)=>{
         if(customer.CustomerID===customerid)
         {
            setUserData(customer);
           
         }
         return(<h1>Hemlo</h1>);
      })
    }
    else{
      setErrorMsg(datas.message);
    }
  }).catch(err=>setErrorMsg(err));
},[])
// console.log(customerid);
console.log(userData);
   return (
    
       <div className='profile'> 
         {userData&&  <>
            <Card className='profile-container'>
            
            <img className ="profile-img" src=  "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="" />
            
            </Card>
            
            
            <Card className='cdetails'>
              <p id="detailsheading"> Customer Details</p>
              <p className='detail'> CustomerID: <span style={{"fontWeight":"600"}}>{userData.CustomerID}</span> </p>
              <p className='detail'> Name: <span style={{"fontWeight":"600"}}>{userData.FirstName} {userData.LastName}</span></p>
              <p className='detail'>Contact: <span style={{"fontWeight":"600"}}> {userData.PhoneNumber}</span> </p>
              <p className='detail'>Email: <span style={{"fontWeight":"600"}}>{props.email}</span></p>
              <p className='detail'>Address: <span style={{"fontWeight":"600"}}> {props.address}</span> </p>
              <p className='detail'>Pincode: <span style={{"fontWeight":"600"}}>{props.pin} </span></p>
              </Card>
              </> 
          
            
        }
        </div>
        
        
    )
}


export default customerProfile