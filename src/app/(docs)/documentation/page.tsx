import { FC } from "react";
import { Metadata } from "next";
import LargeHeading  from '@/ui/LargeHeading'
import Paragraph from "@/ui/LargeHeading";




export const metadata:Metadata={
    title:'Smilarity Api | Documentaion',
    description:"Free $ open source text similarity Api"
  }
const page:FC=()=>{
    return <div className="container max-w-7xl mx-auto mt-12">
         <div className="flex flex-col items-center gap-6">
              <LargeHeading> Making a requist</LargeHeading>
              <Paragraph>api/v1/similarity</Paragraph>
            
         </div>
    </div>
}
export default page