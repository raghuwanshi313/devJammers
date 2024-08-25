import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage';

const App = () => {
    
    const router = createBrowserRouter(
      createRoutesFromElements(<Route index element = {<HomePage />} />)
    );
    return <RouterProvider router={router} />
};

export default App