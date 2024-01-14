/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function CusBtn({ type, title, customStyles, logo,color }) {
    const snap = useSnapshot(state);
    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate('/Customizer', {replace: true});
      };

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: 'black',
        color: 'white'
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }
  return (
    <div>
    <button
    className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={() => {navigate("/Crosx/Customizer"); 
    state.intro=false;
    state.logoDecal= logo;
    state.color=color;

    }}
  >
    {title}
    
  </button>
  
    </div>
    
  )
}
