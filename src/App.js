import React from 'react'
import { Layout } from './components/layout/Layout'
import { Main } from './components/Main'
import { Menu } from './components/Menu'
import './App.css'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Layout className="">
          <Menu className="border" />
          <div className="layout_hr" />
          <Main className="border" />
        </Layout>
      </ErrorBoundary>
    </div>
  )
}

export default App
