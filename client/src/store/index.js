import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  shop: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;