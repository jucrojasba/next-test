"use client"
import { signOut } from "next-auth/react"
import Button from "../Button/Button"

const LogoutButton = ()=>{
  return (
    <>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
  )
}

export default LogoutButton