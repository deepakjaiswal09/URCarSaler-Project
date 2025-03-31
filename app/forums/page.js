import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
const topics = [
  {
    text: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    desc: "Let's discuss everything related to Python",
    slug : "Python-chat-new "
  },
  {
    text: "JavaScript",
    // img: "/javascript.png",
    desc: "Learn And Share The JavaScript Knowledge",
    slug : "JavaScript-chat-new "
  },
  {
    text: "React",
    // img: "/react.png",
    desc: "Build Amazing Interfaces With React",
     slug : "React-chat-new "
  },
  {
    text: "Node.js",
    // img: "/nodejs.png",
    desc: "Explore server-side JavaScript with Node.js",
     slug : "Node-chat-new "
  },
  {
    text: "Data Science",
    // img: "/datascience.png",
    desc: "Discuss data analysis and data visualization",
     slug : "DS-chat-new "
  },
  {
    text: "Cloud Computing",
    // img: "/cloud.png",
    desc: "Learn about cloud platforms And Many More",
     slug : "Cloud-chat-new "
  },
];
const forums = () => {
  return (
    <div className='container  mx-auto my-28 '>
      <h1 className='text-3xl text-center font-bold text-black m-8'> Discussion Forums</h1>
      <div className='flex flex-wrap justify-center'>
        {
          topics.map((topic) => {
            return <div key={topic.img} className='shadow-lg bg-slate-300 w-1/4 m-4 flex justify-center flex-col items-center py-10 text-black'>
              <Image src={topic.img} alt='topic.desc' width={74} height={74} className=''/>
              <h2 className='text-2xl'>{topic.text}</h2>
              <p className='px-3'>{topic.desc}</p>
              <Link href= {`/forum/${topic.slug}`}>
              <Button className='px-4 border border-state-300 py-2'>Discuss Now</Button>
              </Link>
              </div>
          })
        }
      </div>
    </div>

  )
}

export default forums