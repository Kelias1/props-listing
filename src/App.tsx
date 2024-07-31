import React from 'react';
import Listing from './components/Listing/Listing';
import items from '../data/etsy.json';
import { Item } from './components/Item/index';
import './App.css'

const App: React.FC = () => (
    <Listing items={items as Item[]} />
);

export default App;


