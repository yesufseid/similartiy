import  {Tabs, TabsList, TabsTrigger, TabsContent} from "@/ui/Tabs";
import { Dumbbell } from "lucide-react";
import { FC } from "react";
import SimpleBar  from 'react'

const Documentaion:FC=()=>{
  return <Tabs defaultValue="nodejs" className="max-w-2xl w-full"> 
      <TabsList>
         <TabsTrigger value="nodejs">Node Js</TabsTrigger>
         <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent  value="nodejs" >
           {/* <SimpleBar></SimpleBar> */}
           <Code />
      </TabsContent>
      <TabsContent value="python">

      </TabsContent>
  </Tabs>
}


export default Documentaion