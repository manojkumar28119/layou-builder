// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const showContentClassName = showContent ? 'content-card' : 'display-none'

      const showLeftNavbarClass = showLeftNavbar
        ? 'left-nav-menu'
        : 'display-none'

      const showRightNavbarClass = showRightNavbar
        ? 'left-nav-menu'
        : 'display-none'

      return (
        <div className="body-card">
          <div className={showLeftNavbarClass}>
            <h1 className="body-headings">Left Navbar Menu</h1>
            <ul className="items-list">
              <li className="item">item 1</li>
              <li className="item">item 2</li>
              <li className="item">item 3</li>
              <li className="item">item 4</li>
            </ul>
          </div>
          <div className={showContentClassName}>
            <h1 className="body-headings">Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </p>
          </div>
          <div className={showRightNavbarClass}>
            <h1 className="body-headings">Right Navbar</h1>
            <div className="Ad">
              <p>Ad 1</p>
            </div>
            <div className="Ad">
              <p>Ad 2</p>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
