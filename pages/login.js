import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function login() {
    const {data : session} = useSession()
    if(session){
        return (
            <div><p>Welcome,{session.user.username}</p><button onClick={()=>signOut()}>SignOut</button></div>
        )
    }else{
        return (
            <div><p>You are not signed in!!</p><button onClick={()=>signIn()}>SignIn</button></div>
        )
    }
}
