/* eslint-disable no-unused-vars */
import React from "react";
import Container from "@mui/material/Container";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material";

import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { motion, AnimatePresence } from "framer-motion";
import ShopCard from "../components/Card";
import cloths from "../cloths";

function createCard(cloths){
  return <ShopCard
    name={cloths.name}
    img = {cloths.img}
    logo = {cloths.logo}
    color = {cloths.color}
  />
}
function Shop() {
  return (
    <AnimatePresence>
      <motion.div {...headContentAnimation} className="shop">
        <motion.div {...headTextAnimation}>
          {/* <img src='./threejs.png'></img> */}
          <h1 className="@apply xl:text-[10rem] text-[6rem] xl:leading-[11rem] leading-[7rem] font-black text-black ;">
            CROSX
          </h1>{" "}
          <br />
        </motion.div>
        <div className="shopdiv">
          {cloths.map(createCard)}
          
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Shop;
