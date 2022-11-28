import './App.css';
import React, { Suspense } from 'react'
import Header from './Components/Header';
import Routers from './Routers';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const loading = (
  <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center font-semibold text-lg">
    Loading...
  </div>
)

function App() {
  return (
    <div className="">
      <Header />
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            {Routers.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.component />}
                  />
                )
              )
            })}
          </Routes>
        </Suspense>

      </BrowserRouter>
    </div>
  );
}

export default App;
