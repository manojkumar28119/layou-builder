// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const controllers = [
  {id: 1, value: 'CONTENT', label: 'Content'},
  {id: 2, value: 'LEFTNAVBAR', label: 'Left Navbar'},
  {id: 3, value: 'RIGHTNAVBAR', label: 'Right Navbar'},
]

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      return (
        <div className="bg-nav">
          <h1 className="nav-heading">Layout</h1>
          <ul className="controllers-card">
            <li className="controller-item">
              <input
                type="checkbox"
                id="controller"
                className="checkbox"
                onChange={onToggleShowContent}
                checked={showContent}
              />
              <label htmlFor="controller" className="label">
                {controllers[0].label}
              </label>
            </li>
            <li className="controller-item">
              <input
                type="checkbox"
                id="controller"
                className="checkbox"
                onChange={onToggleShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="controller" className="label">
                {controllers[1].label}
              </label>
            </li>
            <li className="controller-item">
              <input
                type="checkbox"
                id="controller"
                className="checkbox"
                onChange={onToggleShowRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="controller" className="label">
                {controllers[2].label}
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
