'use client'
import {FC, useState} from 'react'
import Button from '@/ui/Button'
import {signIn, signOut} from 'next-auth/react'
import {toast} from '@/ui/Toast'

interface SignOutButtonProps{}


const SignOutButton:FC<SignOutButtonProps>=({})=>{

    const [isLoading,setLoading]=useState<boolean>(false)
  
    const signOutWithGoogle=async()=>{
        setLoading(true)
        try {
            await signOut()
        } catch (error) {
            toast({
                title:"Error signing in",
                message:"please try again later",
                type:"error",    
        })
    }

    }

    return (
        <Button onClick={signOutWithGoogle} isLoading={isLoading} >Sign in</Button>
    )
}

export default SignOutButton;