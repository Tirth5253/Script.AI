
'use client';

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowBigRight, Code, ImageIcon, MessageSquare, Music, Newspaper, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools=[
    {
        label:"Conversation",
    icon: MessageSquare,
    color:"text-violet-600",
    bgcolor:"bg-violet-500/10",
    href:"/conversation"
    },
    {
        label:"Image Generation",
        icon: ImageIcon,
        color:"text-pink-600",
        bgcolor:"bg-pink-600/10",
        href:"/image",
      
    
    },
    {
        label:"Video Generation",
        icon: VideoIcon,
        color:"text-orange-700",
        bgcolor:"bg-orange-700/10",
        href:"/video",
        
       
    
    },
    {
        label:"Music Generation",
        icon: Music,
        color:"text-lime-300",
        bgcolor:"bg-lime-300/10",
        href:"/music",
        
        
    },
    {
        label:"Code Generation",
        icon: Code,
        color:"text-cyan-800",
        bgcolor:"bg-cyan-800/10",
        href:"/code",
        
       
    
    },
    {
        label:"Code Generation",
        icon: Newspaper,
        color:"text-red-700",
        bgcolor:"bg-red-700/10",
        href:"https://script-ai-summ.vercel.app/",
    },
]

const DashboardPage=()=> {
    const router=useRouter();
  return (
    <div>
        <div className="mb-8 space-y-4">
           <h2 className="text-2xl md:text-4xl font-bold text-center">Think.Transform.Design It</h2>
           <p className=" text-muted-foreground font-light text-sm 
           md:text-lg text-center " >
            Exploit the Power of AI:Transform ideas into art with AI. </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
           {tools.map((tool)=>( 
               <Card  onClick={()=>router.push(tool.href)}
               key={tool.href}
               className="p-4 border-black/5 flex items-center justify-between hover:shadow-md
                transition cursor-pointer"
               >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md ",tool.bgcolor)}>
                     <tool.icon className={cn("w-8 h-8",tool.color)}/> 
                  </div>
                  <div className="font-semibold">
                    {tool.label}
                  </div>
                  
                </div>
                <ArrowBigRight className="w-5 h-5"/>
               </Card>
           ))}
        </div>
        
    </div>

  )}
  export default  DashboardPage;