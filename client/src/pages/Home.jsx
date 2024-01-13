/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';


import ShopButton from '../components/ShopButton';
const Home = (props) => {
  const snap = useSnapshot(state);
  const intro = props.intro;

  return (
    <div>
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">CROSX
                 <br className="xl:block hidden" /> STUDIO.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
              
              
              <ShopButton
                type="filled"
                title="shop"
                
                customStyles="w-fit px-4 py-2.5 font-bold text-sm">

              </ShopButton>
              


            </motion.div>
          </motion.div>
        </motion.section>
      )}
      
    </AnimatePresence>
    
    </div>
  )
}

export default Home