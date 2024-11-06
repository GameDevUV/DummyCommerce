import React from 'react'
import { Home , Category, Products, Shop} from './Components'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route to='/' >
      <Route path='' element={<Home />}/>
      <Route path='category' element ={<Category />} />
      <Route path='products' element ={<Products />} />
      <Route path='shop' element ={<Shop />} />
    </Route>
    </>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App