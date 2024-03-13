import React, { createContext , useState} from 'react'
export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [blogs, setBlogs] = useState([])

    const getBlog = () => {
        fetch('http://localhost:3000/expenses').then((response) => response.json()).then((blog) => {
            setBlogs(blog)
        })
    }

    const postBlog = (newBlogData) => {
        fetch('http://localhost:3000/expenses', {
          method: "POST",
          body: newBlogData,
      }).then((response) => response.json())
    }

    const updateBlogPost = async () => {
        try {
            setBlogs(await getBlog())
        } catch (error) {
            console.error(err)
        }
    }

    const addBlogPost = async (blogPost) => {
        try {
            await postBlog(blogPost)
            updateBlogPost()
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <mainContext.Provider value={{blogs, setBlogs, addBlogPost, updateBlogPost}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider