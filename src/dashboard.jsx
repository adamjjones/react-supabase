import React, { useEffect, useContext, Fragment } from 'react';
import {
  Card,
  CardTitle,

} from 'reactstrap'
import Account from './Account';
import { supabase } from './supabaseClient';

// import { firebaseAuth } from "../../provider/AuthProvider";

const Dashboard = (props) => {
  const cards = ["Announcements", "Badges", "Subscribed Product Activity", "Social Network"]

  useEffect(() => {
    getProfiles()
  })

  const getProfiles = async () => {
    const { data, error } = await supabase.storage
      .from('avatars').download('./0.8606424700441031.jpg')

    if (error) {
      console.log(error)
    }

    console.log(data)
  }

  // const { resuser } = useContext(firebaseAuth);
  https://whppraptlxaiooewmzaz.supabase.co/storage/v1/object/sign/avatars/0.8606424700441031.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzLzAuODYwNjQyNDcwMDQ0MTAzMS5qcGciLCJpYXQiOjE2NTc5OTI4NzcsImV4cCI6MTk3MzM1Mjg3N30.CJviIe8RPnSdh6B_dAEp91KUEy7yl48pdcJQNj9i5Ec&t=2022-07-16T17%3A34%3A38.007Z
  return (
    <div className="container">
      {/* resuser={JSON.stringify(resuser, '', 2)} */}
      <h2 className='mx-auto mt-4'>Welcome to Rapid Response</h2>
      <small>Alone, we can do so little, together we can do so much</small>
      {/* <img src={supabase.storage.from('avatars').getPublicUrl('./0.8606424700441031.jpg').publicURL} /> */}
      <div className="dashboard-card">
        {cards.map((c, i) => {
          return (
            <Card key={i}>
              <CardTitle>{c}</CardTitle>
              {/* <CardBody></CardBody> */}
            </Card>
          )
        })}
      </div>
      {/* <Account /> */}
    </div>
  )
}

export default Dashboard