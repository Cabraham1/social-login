import React from 'react'
import {posts} from "../Data"
import Card from "../componets/Card"


const Home = () => {
  return (
    <div className=''>
      {posts.map(post=>(
        <Card  key={post.id} post={post}/>
      ))}
    
    </div>
  )
}

export default Home