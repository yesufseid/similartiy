  'use client'
import  {Tabs, TabsList, TabsTrigger, TabsContent} from "@/ui/Tabs";
import { Dumbbell } from "lucide-react";
import { FC } from "react";
import SimpleBar  from 'simplebar-react'
import Code from "./Code"
import {nodejs, python} from '@/helpers/Doucmentation-Code'



const Documentation:FC=()=>{
  return <Tabs defaultValue="nodejs" className="max-w-xl w-full "> 
      <TabsList>
         <TabsTrigger value="nodejs">Node Js</TabsTrigger>
         <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent  value="nodejs" >
           <SimpleBar>
           <Code animated language="javaScript" code={nodejs} show />
           </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
          <SimpleBar>
      <Code animated language="python" code={python} show />
            </SimpleBar>
      </TabsContent>
  </Tabs>
}


export default Documentation