
import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Login'
import Account from './Account'
import Avatar from './Avatar'

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
      <Avatar />
    </div>
    // <div className="container" style={{ padding: '50px 0 100px 0' }}>
    //{!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    //</div>
  )
}