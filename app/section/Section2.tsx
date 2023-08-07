import React from 'react'
import { TextEditor } from '../layout/textEditor'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
export const Code = 
   `<html>
   <head>
      <title>Login Page</title>
   </head>
   <body>
      <h1>Hello World</h1>
      <form>
         <label for="username">Username:</label>
         <input type="text" id="username" name="username"><br><br>
         <label for="password">Password:</label>
         <input type="password" id="password" name="password"><br><br>
         <input type="submit" value="Login"`
export default function Section2() {
   return (
      <section className=' flex flex-col lg:flex-row gap-10 px-4 md:px-10 lg:px-36'>
         <div className='flex flex-col gap-10 text-white'>
            <Title variant="secondary">
               Finally you can develop <span className=' text-primary'>{`{full-stack}`}</span> web applications in one place.
            </Title>
            <Paraf >
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ame
            </Paraf>
         </div>
         <div className=' w-full md:w-fit justify-center flex h-full mx-auto lg:pr-20 lg:mr-20'>
            <TextEditor withBlur code={Code} />
         </div>
      </section>
   )
}
