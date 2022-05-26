
import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Login'
import Account from './Account'
import Avatar from './Avatar'
import TopNav from './topnav'
import SideBar from './SideBar'
import Dashboard from './dashboard'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div>
      <TopNav />
      <SideBar />
      {/* <Dashboard /> */}
    </div>
    // <div>
    //   <Avatar />
    // </div>
    //   <div className="container">
    //     {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    //   </div>
  )
}