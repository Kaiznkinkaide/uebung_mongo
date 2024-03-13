import React, { useContext } from 'react'
import { useRef } from 'react'
import { mainContext } from '../../context/MainProvider'






const Home = () => {
const formRef= useRef()
const { addBlogPost, blogs} = useContext(mainContext)

const handelSubmit = async (event) =>{
  event.preventDefault()
  const formData = new FormData(formRef.current)
  await addBlogPost(formData)
  formRef.current.reset()
}
  return (
    <>
    <h1>Home</h1>
    <form ref={formRef}>
        <input type="text" name='surename' placeholder='surename'/>
        <input type="text" name='lastname' placeholder='lastname'/>
        <input type="email" name='email' placeholder='email'/>
        <input type="text" name='message' placeholder='type your message'/>
        <button onClick={handelSubmit}>Submit</button>
    </form>

    </>
  )
}

export default Home