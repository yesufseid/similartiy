import { getServerSession } from 'next-auth'
import {FC} from 'react'
import Link from 'next/link'
import Button from '@/ui/Button'
import { buttonVariants } from '@/ui/Button'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import ThemeToggle from './ThemeToggle'


const Navbar=async()=>{
   const session=await getServerSession()

    return <div className='fixed backdrop-blur-sm bg-white/75
     dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-500 shadow-lg flex items-center justify-between'> 
     <div className='container max-w-7xl mx-auto w-full flex  justify-between items-center'>

    <Link href={'/'}  className={buttonVariants({variant:'link'})}>
        Text Similarity 1.0
    </Link>

    <div className='md:hidden'>
   <ThemeToggle />
     </div>
    <div className='hidden md:flex gap-4'>
   <ThemeToggle />
   <Link
    href={'/documentaion'}
    className={buttonVariants({variant:'ghost'})}>Documentation</Link>
    {session?(<>
    <Link 
     href={'/dashboard'}
    className={buttonVariants({variant:'ghost'})}
    >Dashboard</Link>
    <SignOutButton />
    </>):<SignInButton />

    }
   </div>

     </div>

     </div>
}

export default Navbar