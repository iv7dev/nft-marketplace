/* © BacoFinance 2022 by Baco Group */
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>

        <Header />
        <CollectionCard 
                id={0} 
                name={'Bandana Punk'} 
                traits={[{'value': 10}]} 
                image='https://gateway.pinata.cloud/ipfs/QmUyVfNR7XWPBDi5TRP2nmQGcTXqYutu1Bh9cTvYY7TH3R'
        />
    
    </div>
  );
}

export default App;
