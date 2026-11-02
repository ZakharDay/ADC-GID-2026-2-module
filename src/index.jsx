import { createRoot } from 'react-dom/client'
import Container from './javascript/Container.jsx'

const toggle1 = {
  title: 'Toggle 1',
  options: ['Option 1', 'Option 2', 'Option 3']
}

const toggle2 = {
  title: 'Toggle 2',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
}

const root = createRoot(document.getElementById('root'))
root.render(<Container toggle1={toggle1} toggle2={toggle2} />)
