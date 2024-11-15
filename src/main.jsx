import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "Bootstrap/dist/css/bootstrap.min.css"
import "Bootstrap/dist/js/bootstrap.bundle.min.js"
import { Provider } from "react-redux"
import store from './app/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
