"use client";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Tirth Joshi",
    avatar: "",
    title: "Software Engineer",
    description: "React.js Next.js OpenAI",
  },
  {
    name: "Sahil Bulchandani",
    avatar: "A",
    title: "Software Engineer",
    description: "React.js Next.js OpenAI",
  },
  {
    name: "Deep Joshi",
    avatar: "M",
    title: "Software Engineer",
    description: "React.js Next.js OpenAI",
  },
  {
    name: "Anshul Gheewala",
    avatar: "M",
    title: "Software Engineer",
    description: "React.js Next.js OpenAI",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Script.AI Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-gradient-to-t from-gray-900 via-gray-900 to-[#004953] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
                
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}