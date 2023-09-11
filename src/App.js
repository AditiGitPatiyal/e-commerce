import './App.css';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import SingleItem from './Pages/SingleItem';
import Category from './Pages/Category';
import Cart from './Pages/Cart';


function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Outlet />     
      </div>
    </>
      
  );
}
export const AppRouter=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'Categories',
        element:<Category />,
      },
      {
        path:'cart',
        element:<Cart />
      },
      {
        path:'Single-product',
        element:<SingleItem />
      },
    ] 
  }    
])

export default App;
