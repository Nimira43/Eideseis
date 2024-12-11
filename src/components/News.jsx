import Weather from './Weather'
import Calendar from './Calendar'
import '../css/News.css'
import userImage from '../assets/images/user.jpg'

const NewsPage = () => {
  return ( 
    <div className='news'>
      <header className='news-header'>
        <h1 className='logo'>Eideseis</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder='Search News' />
            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </header>
      <div className='news-content'>
        <div className='navbar'>
          <div className='user'>
            <img src={userImage} alt="Lucy Blog" />
            <p>Lucy's Blog</p>
          </div>
          <nav className='categories'>
            <h1 className='nav-heading'>Categories</h1>
            <div className="nav-links">
              <a href="#" className="nav-link">UK & Ireland</a>
              <a href="#" className="nav-link">Europe</a>
              <a href="#" className="nav-link">World</a>
              <a href="#" className="nav-link">Sports</a>
              <a href="#" className="nav-link">Entertainment</a>
              <a href="#" className="nav-link">Health</a>
              <a href="#" className="nav-link">Business</a>
              <a href="#" className="nav-link">Technology</a>
              <a href="#" className="nav-link">Science</a>
              <a href="#" className="nav-link">Arts</a>
            </div>
          </nav>
        </div>
        <div className='news-section'>
            <div className='headline'>Headline</div>
            <div className='news-grid'>News Grid</div>
        </div>
        <div className='my-blogs'>My Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />   
        </div>
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
   )
}
 
export default NewsPage