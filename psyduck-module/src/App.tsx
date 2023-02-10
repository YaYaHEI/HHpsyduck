import { useRoutes } from 'react-router-dom'
import route from './router/index.js'
function App() {
  let element = useRoutes(route)
  return element
}

export default App;
