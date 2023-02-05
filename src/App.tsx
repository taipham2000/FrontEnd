import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Single from './pages/commons/single/Single';
import { productInputs, userInputs } from './formSource';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/commons/home/Home';
import LoginPage from './pages/commons/login/LoginPage';
import New from './pages/commons/new/new';
import List from './pages/commons/list/List';
function App() {
  const [count, setCount] = useState(0);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Hello Vite + React!</p>
    //     <p>
    //       <button type="button" onClick={() => setCount((count) => count + 1)}>
    //         count is: {count}
    //       </button>
    //     </p>
    //     <p>
    //       Edit <code>App.tsx</code> and save to test HMR updates.
    //     </p>
    //     <p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //       {' | '}
    //       <a
    //         className="App-link"
    //         href="https://vitejs.dev/guide/features.html"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Vite Docs
    //       </a>
    //     </p>
    //   </header>
    // </div>

    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="login" element={<LoginPage />} />
              <Route index element={<LoginPage />} />
              <Route path="/admin/homePage" element={<Home />} />

              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      {/* them thu vien yarn add react-toastify */}
      {/* them dinh dang popup notification */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
