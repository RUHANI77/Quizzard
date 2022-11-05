import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Stats from './components/Stats/Stats';
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: 'home', element: <Home></Home> },
        { path: 'quiz', element: <Quiz></Quiz> },
        { path: 'stats', element: <Stats></Stats> },
        { path: 'blogs', element: <Blogs></Blogs> }
      ]
    },
    {path: '*', element: <ErrorPage></ErrorPage>}

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
