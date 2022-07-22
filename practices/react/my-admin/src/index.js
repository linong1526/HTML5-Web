import ReactDOM from 'react-dom/client'
import Root from './Root'
import { HashRouter as Router } from 'react-router-dom'

const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)


root.render(<Router><Root /></Router>)