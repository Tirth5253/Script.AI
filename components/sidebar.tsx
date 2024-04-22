'use client';

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, NewspaperIcon, Settings, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-counter";


const monsterrat=Montserrat({weight:"600",subsets:["latin"]});

const routes=[{
    label:"Dashboard",
    icon: LayoutDashboard,
    href:"/dashboard",
    color:"text-sky-400",

},{
    label:"Conversation",
    icon: MessageSquare,
    href:"/conversation",
    color:"text-violet-600",

},
{
    label:"Image Generation",
    icon: ImageIcon,
    href:"/video",
    color:"text-orange-700",

},
{
    label:"Audio Generation",
    icon: Music,
    href:"/music",
    color:"text-lime-300",

},
{
    label:"Code Generation",
    icon: Code,
    href:"/code",
    color:"text-cyan-200",

},
{
    label:"Article Summerizer",
    icon: NewspaperIcon,
    href:"https://script-ai-summ.vercel.app/",
    color:"text-red-700",
},


]

const Sidebar=({
    apiLimitCount = 0,
    isPro = false
  }: {
    apiLimitCount: number;
    isPro: boolean;
  })=>{
   
  const pathname = usePathname();
return(
    <div className="space-y-4 py-4 flex flex-col h-full bg-gradient-to-b from-gray-900 via-gray-900 to-[#004953]   text-white">
        <div className="px-3 py-2 flex-1">
           <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <div className="relative w-12 h-12 mr-4">
             <Image fill alt="logo" src="/roby1.png"/>
            </div>
            <h1 className={cn("text-2xl font-bold",monsterrat.className)}>Script.AI</h1>
           </Link>
           
           
           <div className="space-y-1">
             {routes.map((route)=>(
                 <Link href={route.href} key={route.href} className={cn("text-sm group flex p-3 w-full justify-start font-medium curser-pointer hover:text-white hover:bg-white/10 rounded-lg transition",pathname===route.href?"text-white bg-white/10":"text-zinc-400")}>
                    <div className="flex items-center flex-1">
                      <route.icon className={cn("h-5 w-5 mr-3",route.color)}/>
                      {route.label}
                    </div>
                 </Link>
             ))}
           </div>
        </div>
        <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      />
    </div>
)
}
export default Sidebar;