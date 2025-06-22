import { AiOutlineSearch } from 'react-icons/ai'

const News = () => {
  return (
    <div className='news'>
      <header className='news-header'> 
        <h1 className='logo'>Eideseis</h1>
        <div className='search-bar'>
          <form>
            <input 
              type="text"
              placeholder='Search'
            />
            <button type='submit'>
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </header>
      News
    </div>
  )
}

export default News
