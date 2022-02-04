/* © BacoFinance 2022 by Baco Group */
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [punkListData, setPunkListData] = useState([]);
  useEffect(() => {
      const getMyNfts = async () => {
        const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x5A027A1F234a9499a8eAf308a9d318794633d2A8&order_direction=asc') // Address collection contract
        console.log('OpenSeaData :', openseaData.data.assets); // debug console
        setPunkListData(openseaData.data.assets);
      }    
      return getMyNfts();
  }, [])

  return (
    <div className='app'>

        <Header />
        <CollectionCard 
                id={0} 
                name={'King Punk'} 
                traits={[{'value': 10}]} 
                image='https://gateway.pinata.cloud/ipfs/QmUyVfNR7XWPBDi5TRP2nmQGcTXqYutu1Bh9cTvYY7TH3R'
        />
    
    </div>
  );
}

export default App;
