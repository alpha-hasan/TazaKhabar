import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 10
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ba3a758b7a1e49079bf0d014e17798a8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let rawData = await fetch(url);
    let parsedData = await rawData.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }
  prevClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ba3a758b7a1e49079bf0d014e17798a8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let rawData = await fetch(url);
    let parsedData = await rawData.json();
    this.setState({ page: this.state.page - 1, articles: parsedData.articles, loading: false });
  }
  nextClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ba3a758b7a1e49079bf0d014e17798a8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let rawData = await fetch(url);
    let parsedData = await rawData.json();
    this.setState({ page: this.state.page + 1, articles: parsedData.articles, loading: false });
  }
  render() {
    return (
      <div className='container my-5'>
        <h2 className='text-center'>Breaking News</h2>
        <h4 className='text-center'>{this.props.category}</h4>
        <br />
        <br />
        <br />
        {this.state.loading && <Loader />}
        <div className="row my-5">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={`row-1-${element.url}`}>
              <NewsItem title={element.title.length <= 45 ? element.title.slice(0, 45) : element.title.slice(0, 50) + '...'} description={element.description == null ? 'null' : element.description.length <= 100 ? element.description.slice(0, 100) : element.description.slice(0, 97) + "..."} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  badgeColor={this.props.badgeColor}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" style={{width: '6.45rem'}} onClick={this.nextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}