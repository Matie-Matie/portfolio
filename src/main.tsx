import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/anton'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/600.css'
import '@fontsource-variable/geist'
import './styles/index.css'
import App from './App'
import { prefersReducedMotion } from './lib/motion'

// Entrance choreography only hides content when motion is welcome.
if (!prefersReducedMotion()) document.documentElement.classList.add('js-motion')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
