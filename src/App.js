import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import Error from './components/Error'

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_APIKEY
  const [country, setCountry] = useState("in")
  const [progress, setProgress] = useState(0)
  const setProgress1 = (progress) => {
    setProgress(progress)
    setCountry("in")
  }
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#000000'
        progress={ progress}
        height={5}
        shadow = {false}
      />
  <Routes>
    <Route path='/' element={
      <>
        <NewsContainer setProgress = {setProgress1} apikey={apikey} key="general" type="General"  pageSize="10" country={ country} category="general"  />
        <Sidebar />
      </>
    } />

    <Route path='/entertainment' element={
      <>
        <NewsContainer setProgress = {setProgress1} apikey={apikey} key="entertainment" type="Entertainment" pageSize="10" country={ country} category="entertainment"  />
        <Sidebar />
      </>
    } />

    <Route path='/headlines' element={
      <>
        <NewsContainer setProgress = {setProgress1} apikey={apikey} key="headline" type="Top Headline" pageSize="5" country={ country}  />
        <Sidebar />
      </>
    } />

    <Route path='/science' element={
      <>
        <NewsContainer setProgress = {setProgress1} apikey={apikey} key="science" type="Science" pageSize="5" country={ country} category="science"  />
        <Sidebar />
      </>
    } />

    <Route path='/health' element={
      <>
        <NewsContainer setProgress = {setProgress1} apikey={apikey} key="health" type="Health" pageSize="5" country={ country} category="health"  />
        <Sidebar />
      </>
    } />

    <Route path='/business' element={
      <>
        <NewsContainer setProgress = {setProgress1} apikey={apikey} key="business" type="Business" pageSize="5" country={ country} category="business"  />
        <Sidebar />
      </>
    } />

    <Route path='/sports' element={
      <>
        <NewsContainer setProgress = {setProgress1} apikey={apikey} key="Sports" type="Sports" pageSize="5" country={ country} category="sports"  />
        <Sidebar />
      </>
    } />
    <Route path='*' element={<Error/>}/>
  </Routes>
</BrowserRouter>

      </div>
    )
  }


export default App
