import { Inter } from "next/font/google"
import LargeHeading from '../components/ui/LargeHeading'
import type { Metadata } from "next"
import Paragraph from "../components/ui/Paragraph"
import Link from "next/link"
import Image from "next/image"


export const metadata:Metadata={
  title:'Smilarity Api | Home',
  description:"Free $ open source text similarity Api"
}



export default function Home() {
  return(
  <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
     <div className="container pt-32 lg:pt-64 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex-col justify-start lg:justify-center items-center lg:items-start">
            <LargeHeading size={'lg'}  className="three-d text-black dark:text-light-gold">
              Easliy determine <br />text similarity
            </LargeHeading>
            <Paragraph className="max-w-xl lg:text-left ">
              with the text similarity Api, you can easily determsin the  smiarity between two pieces of text withe afree {' '}
              <Link href={"/"} className=" underline underline-offset-2  text-black dark:text-light-gold"
                 > API Key</Link>

            </Paragraph>
            <div className="relative w-full max-w-lg lg:max-w-xl lg:left-1/2 aspect-square lg:absolute lg:top-32 ">
          <Image
           priority
           className="img-shadow"
           quality={100}
           style={{objectFit:'contain'}}
           fill
           src={"/typewriter.png"}
           alt="typewriter"

          ></Image>
            </div>
        </div>
     </div>
  </div>
  )
}
