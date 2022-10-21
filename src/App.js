import search from './/img/search.svg'
import unliked from './/img/unliked.svg' 
import item00 from './/img/sneakers/item00.svg'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import plus from './/img/plus.svg'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
    <Header />
        <div className="content p-40">
          <div className='d-flex align-center justify-between  mb-40' >
          <h1 className=''>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src={search} alt='Search'/>
            <input type='text' placeholder='Поиск' className='search-input' />
          </div>
          </div>
          
      <div className='d-flex'>


      <Card />
      <Card />
      <Card />
      <Card />

      </div>
            
        </div>
    </div>
  );
}

export default App;
