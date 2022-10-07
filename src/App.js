import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Shop from './components/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', element: <Shop></Shop>
        },
        {
          path: '/shop', element: <Shop></Shop>
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
