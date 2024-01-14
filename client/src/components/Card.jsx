/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CustomButton from "./CustomButton";
import state from "../store";
import CusBtn from "./CusBtn";
function ShopCard(props) {
  return (
    <div className="shopcard">
      <img src={props.img}></img>
      <h1>{props.name}</h1>
      <p>Male T-shirt</p>
      <p>{props.price}</p>
      <CusBtn
        type="filled"
        title="View"
        customStyles="w-fit px-4 py-2 font-medium text-sm"
        logo= {props.logo}
        color = {props.color}
      />
    </div>
  );
}

export default ShopCard;
// {/* <Container maxWidth="1g">
//         {/* <Typography variant='h4' align='center' style={{marginTop:"50px"}}>
//         </Typography> */}
//         <Grid container spacing={5} style={{marginTop:"50px"}}>
//           <Grid item xs={12} ms={4} key={1} >
//             <Card sx={{maxWidth:345}}>
//               <CardActionArea>
//                 <CardMedia components="img"
//                 height="140"
//                 image=''
//                 >
//                   <CardContent>
//                     <h1>hi</h1>
//                     <p>hi</p>
//                   </CardContent>

//                 </CardMedia>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container> */}
