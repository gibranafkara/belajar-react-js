/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import {GlobalContext} from './context/index'
import { RouterProvider } from 'react-router-dom';
import {router} from './routers'

function App() {
  const name = {username : 'Muhammad'}

  return (
    <div className='App'>
      <GlobalContext.Provider value={name}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
