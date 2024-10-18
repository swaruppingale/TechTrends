import React from 'react'
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'


const App = () => {
    const routings = createBrowserRouter(routes);

    return (
        <div>
            
                <RouterProvider router={routings}></RouterProvider>
            

        </div>
    )
}

export default App