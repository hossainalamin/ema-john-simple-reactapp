import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>
    }
  ])
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
};

export default App;