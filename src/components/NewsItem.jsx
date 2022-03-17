import React, { Component } from 'react'
import notfound from './notfound.jpg'

export default class NewsItem extends Component {
  render() {
    let { imageUrl, title, description, newsUrl, author, date, source, badgeColor } = this.props;
    return (
      <div className="card">
        <img src={imageUrl == null ? notfound : imageUrl} className="card-img-top" alt="..." />
        <span class={`position-absolute top-0 translate-middle badge rounded-pill bg-${badgeColor}`} style={{zIndex: 1, left: '90%'}}>
          {source}
        </span>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ wordBreak: 'break-word' }}>{description}</p>
          <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
          <p className="card-text my-3"><small className="text-muted">By {!author ? 'Unknown author' : author} on {!date ? 'unknown date' : new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    )
  }
}
