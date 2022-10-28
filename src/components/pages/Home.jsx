import Card from "../Card";
import search from '../../img/search.svg';
import remove from '../../img/remove.svg'

function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavourite,
    onAddToCart}){
    
    return (
            
            <div className="content p-40">
          <div className='d-flex align-center justify-between  mb-40' >
          <h1 className=''>{searchValue ? `Поиск по "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className='search-block d-flex'>
            <img src={search} alt='Search'/>
            <input onChange={onChangeSearchInput} value={searchValue} type='text' placeholder='Поиск' className='search-input' />
            {searchValue &&  <img onClick={() => setSearchValue('')} className='clear cu-p' src={remove} alt='Remove'></img>}
          </div>
          </div>

          
      <div className='d-flex flex-wrap'>
    {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
        <Card
         key={item.imageUrl}
         onFavourite={(obj) => onAddToFavourite(obj)}
         onPlus={(obj) => onAddToCart(obj)}
         {...item}
         />
    ))}

      </div>
            
        </div>
    )
}
export default Home;