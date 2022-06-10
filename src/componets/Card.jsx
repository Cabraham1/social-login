import React from 'react'

const Card = ({post}) => {
  return (
    <div className='card'>
      <span>{post.title}</span>
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardButon">Read More</button>
    </div>
  )
}

export default Card