/* © BacoFinance 2022 by Iv7.dev */
import './App.css';
import PunkList from './components/PunkList';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // retrieve data to opensea 
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

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
        { punkListData.length > 0 && (
          <>
            <Main punkListData = { punkListData } selectedPunk = {selectedPunk} />
            <PunkList punkListData = { punkListData } setSelectedPunk = {setSelectedPunk} />
          </>
        )}
    </div>
  );
}

export default App;
