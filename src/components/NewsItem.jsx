import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { imageUrl, title, description, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{wordBreak: 'break-word'}}>{description}</p>
          <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}
