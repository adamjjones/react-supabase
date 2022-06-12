import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import './index.css'
// import './index1.css'
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

  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSideNav = () => {
    setIsExpanded(prev => !prev)
  }
  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div>
      <TopNav toggleSideNav={toggleSideNav} />
      <div className='layoutdiv'>
        {isExpanded && <SideBar />}

        <Dashboard />
      </div>
    </div>
  )
}