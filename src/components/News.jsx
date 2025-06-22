import { AiOutlineSearch } from 'react-icons/ai'
import { GoBookmark } from "react-icons/go"

import userImage from '../assets/images/user.jpg'

const categories = [
  'general',
  'world',
  'business',
  'technology',
  'sport',
  'entertainment',
  'science',
  'health',
  'national'
]

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
            <div className="nav-links">
              {categories.map((category => (
                <a 
                  href="#"
                  key={category}
                  className='nav-link'  
                >
                  {category}
                </a>
              )))}
              <a 
                href="#"  
                className="nav-link"
              >
                Bookmarks 
                <GoBookmark />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default News
