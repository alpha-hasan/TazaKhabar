import React from 'react'
import notfound from './notfound.jpg'

const NewsItem = (props) => {
  return (
    <div className="card">
      <span className={`badge rounded-pill bg-${props.badgeColor}`} style={{ position: 'absolute', top: '-10px', right: '0' }}>
        {props.source}
      </span>
      <img src={props.imageUrl == null ? notfound : props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text" style={{ wordBreak: 'break-word' }}>{props.description}</p>
        <a href={props.newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
        <p className="card-text my-3"><small className="text-muted">By {!props.author ? 'Unknown author' : props.author} on {!props.date ? 'unknown date' : new Date(props.date).toGMTString()}</small></p>
      </div>
    </div>
  )
}

export default NewsItem;