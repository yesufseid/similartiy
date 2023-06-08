import { getServerSession } from 'next-auth'
import {FC} from 'react'
import Link from 'next/link'
import buttonVariants from '@/ui/Button'
import signInButton from '@/components/SignInButton'
interface NavbarProps{}

const Navbar=async()=>{
   const session=await getServerSession()

    return <div className='fixed backdrop-blur-sm bg-white/75
     dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'> 
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
    className={buttonVariants({variant:'gost'})}>Documentation</Link>
    {session?(<>
    <Link 
     href={'/dashboard'}
    className={buttonVariants({variant:'ghost'})}
    >Dashboard</Link>
    </>):<signInButton/>

    }
   </div>

     </div>

     </div>
}

export default Navbar