import  {Tabs, TabsList, TabsTrigger, TabsContent} from "@/ui/Tabs";
import { Dumbbell } from "lucide-react";
import { FC } from "react";
import SimpleBar  from 'react'
import Code from "./Code"
import {nodejs} from '@/helpers/Doucmentation-Code'



const Documentation:FC=()=>{
  return <Tabs defaultValue="nodejs" className="max-w-2xl w-full"> 
      <TabsList>
         <TabsTrigger value="nodejs">Node Js</TabsTrigger>
         <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent  value="nodejs" >
           {/* <SimpleBar></SimpleBar> */}
           <Code  language="javaScript" code={nodejs} show />
      </TabsContent>
      <TabsContent value="python">

      </TabsContent>
  </Tabs>
}


export default Documentation