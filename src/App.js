import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import './index.css'
import './index1.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Login'
import Account from './Account'
import Avatar from './Avatar'
import TopNav from './topnav'
import SideBar from './SideBar'
import Dashboard from './dashboard'

export default function Home({ image, collapsed, rtl, toggled, handleToggleSidebar }) {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => {
    // console.log(history)
    setIsSideNavOpen(!isSideNavOpen)
    console.log(isSideNavOpen)
  }

  const onToggle = () => {

  }

  return (
    <div>
      <TopNav />
      <div className='layoutdiv'>
        <SideBar />
        <Dashboard />
      </div>
    </div>
  )
}