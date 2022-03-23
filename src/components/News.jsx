import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
  useEffect(() => {
    props.setProgress(30);
    setloading(true);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let rawData = await fetch(url);
    let parsedData = await rawData.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  }, [])
  
  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let rawData = await fetch(url);
    let parsedData = await rawData.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }
  return (
    <>
      <h2 className='text-center' style={{ margin: '35px 0px' }}>Breaking News</h2>
      <h4 className='text-center'>{props.category}</h4>
      <br />
      <br />
      <br />
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={this.fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      >
        <div className='container my-5'>
          <div className="row my-5">
            {articles.map((element) => {
              return <div className="col-md-4" key={`row-1-${element.url}`}>
                <NewsItem title={element.title.length <= 45 ? element.title.slice(0, 45) : element.title.slice(0, 50) + '...'} description={element.description == null ? 'null' : element.description.length <= 100 ? element.description.slice(0, 100) : element.description.slice(0, 97) + "..."} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} badgeColor={props.badgeColor} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
News.defaultProps = {
  country: 'us',
  category: 'general',
  pageSize: 10
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}
export default News;