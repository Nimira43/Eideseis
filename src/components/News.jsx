import { AiOutlineSearch } from 'react-icons/ai'
import userImage from '../assets/images/user.jpg'

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
      <div className='news-content'>
        <div className="navbar">
          <div className="user">
            <img 
              src={userImage} 
              alt="User" />
            <p>by Lucy Kitson</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">
              Categories
            </h1>
            <div className="nav-links"></div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default News
