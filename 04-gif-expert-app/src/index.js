import React from 'react';
import './index.css';
import GiftExpertApp from './GiftExpertApp';
import { createRoot } from 'react-dom/client';


const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render(<GiftExpertApp value="GiftExpertApp" />);

