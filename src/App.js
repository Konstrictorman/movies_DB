import React, { createContext, useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Main } from './components/Main';
import { Menu } from './components/Menu';
import { Banner } from './components/layout/Banner';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';

export const MovieContext = createContext();

function App() {
  const [movieDetail, setMovieDetail] = useState(null);

  return (
    <div className="App">
      <ErrorBoundary>
        <MovieContext.Provider value={[movieDetail, setMovieDetail]}>
          <Layout className="">
            <Banner />
            <Menu className="border" />
            <div className="layout_hr" />
            <Main className="border" />
          </Layout>
        </MovieContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
