import Weather from './Weather'
import Calendar from './Calendar'

const NewsPage = () => {
  return ( 
    <div className='news'>
      <header className='news-header'></header>
      <div className='news-content'>
        <div className='navbar'>
          <div className='user'>User</div>
          <nav className='categories'>Categories</nav>
        </div>
        <div className='news-section'>
            <div className='headline'>Headline</div>
            <div className='news-grid'>News Grid</div>
        </div>
        <div className='my-blogs'>My Blogs</div>
        <Weather />
        <Calendar />
        <footer className="news-footer"></footer>
      </div>
    </div>
   )
}
 
export default NewsPage