// import React, { useState } from "react";

// export const Login = () => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//   const handleSubmit = (d) => {
//     d.preventDefault();
//     console.log(email);
//   }

//   return (
//     <>
//       <form on onSubmit={handleSubmit}>
//         <label htmlFor="email">email</label>
//         <input value={email} onChange={(d) => set(d.target.value)} type="email" placeholder="youremailhere@mail.com"> </input>
//         <label htmlFor="password">password</label>
//         <input value={pass} onChange={(d) => set(d.target.value)} type="password" placeholder="*************"> </input>
//         <button type="submit">Login</button>
//       </form>
//       <button>Don't have an account? Click here to Register</button>
//     </>
//   )
// }