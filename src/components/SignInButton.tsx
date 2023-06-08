  'use client'
import {FC, useState} from 'react'
import Button from '@/ui/Button'
import {signIn} from 'next-auth/react'


interface SifnInButtonProps{}


const SignInButton:FC<SifnInButtonProps>=({})=>{
    const [isLoading,setLoading]=useState<Boolean>(false)
  
    const signInWithGoogle=async()=>{
        setLoading(true)
        try {
            await signIn('google')
        } catch (error) {
            toast({
                title:"Error signing in",
                message:"please try again later",
                type:"error",
            })
        }
    }



    return (
        <Button onClick={signInWithGoogle} isLoading={isLoading} >Sign in</Button>
    )
}

export default SignInButton