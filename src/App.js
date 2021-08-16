import './App.css'
import Header from './components/header/Header'
import Main from './components/main_section/Main'

function App() {
  return (
    <div className="app">
      < Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li className="item active">
            <span className="label">Inbox</span>
            <span className="count">3</span>
          </li>
          <li className="item">
            <span className="label">Starred</span>
            <span className="count">2</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input id="hide-read" type="checkbox" checked={false} />
          </li>
        </ul>
      </nav>

     < Main />
      
    </div>
  )
}

export default App
