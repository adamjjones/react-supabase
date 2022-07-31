import React from 'react'

const SignUp = () => {
  const { user, session, error } = await supabase.auth.signUp(
    {
      email: 'example@email.com',
      password: 'example-password',
    },
    {
      data: {
        first_name: 'John',
        age: 27,
      }
    }
  )
}

return (
  <div>
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" disabled />
    </div>
    <div>
      <label htmlFor="username">Name</label>
      <input
        id="username"
        type="text"
        value={fullname || ''}
        onChange={(e) => setFullName(e.target.value)}
      />
    </div>
  </div>
)


export default SignUp
