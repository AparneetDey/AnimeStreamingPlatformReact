import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import App, { animeLoader } from './App.jsx'
import AnimePreview from './pages/AnimePreview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/anime/:animeId",
    element: <AnimePreview />,
    loader: animeLoader
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
