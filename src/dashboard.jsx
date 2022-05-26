import React, { useContext, Fragment } from 'react';
import {
  Card,
  CardTitle,

} from 'reactstrap'

// import { firebaseAuth } from "../../provider/AuthProvider";

const Dashboard = (props) => {
  const cards = ["Announcements", "Badges", "Subscribed Product Activity", "Social Network"]

  // const { resuser } = useContext(firebaseAuth);
  return (
    <div className="container">
      {/* resuser={JSON.stringify(resuser, '', 2)} */}
      <h2 className='mx-auto mt-4'>Welcome to Rapid Response</h2>
      <small>Alone, we can do so little, together we can do so much</small>
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
    </div>
  )
}

export default Dashboard