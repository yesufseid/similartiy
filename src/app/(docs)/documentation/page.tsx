import { FC } from "react";
import { Metadata } from "next";
import LargeHeading  from '@/ui/LargeHeading'
import Paragraph from "@/ui/Paragraph";
import Documentation from '@/components/Documentation'




export const metadata:Metadata={
    title:'Smilarity Api | Documentaion',
    description:"Free $ open source text similarity Api"
  }
const page:FC=()=>{
    return <div className="container max-w-7xl mx-auto mt-12 pt-12">
         <div className="flex flex-col items-center gap-6 mt-24">
              <LargeHeading> Making a requist</LargeHeading>
              <Paragraph>api/v1/similarity</Paragraph>
     
            
         </div>
    </div>
}
export default page