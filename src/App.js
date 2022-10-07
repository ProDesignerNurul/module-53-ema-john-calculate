import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productsAndCartLoaders } from './Loaders/ProductsAndCartLoaders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', element: <Shop></Shop>
        },
        {
          path: '/shop', 
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders', 
          loader: productsAndCartLoaders,
          element: <Orders></Orders>
        },
        {
          path: '/inventory', element: <Inventory></Inventory>
        },
        {
          path: '/about', element: <About></About>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
