import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <div className='card'>
      <Link className='link' to={`/post/`}>
      <span>{post.title}</span>
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardButon">Read More</button>
      </Link>
    </div>
  )
}

export default Card