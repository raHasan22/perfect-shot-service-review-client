import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Routes';


function App() {
  return (
    <div data-theme="luxury" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
