import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

import newsDataGeneral from '../News Json For Offline Use/general.json'
import newsDataBusiness from '../News Json For Offline Use/business.json'
import newsDataEntertainment from '../News Json For Offline Use/entertainment.json'
import newsDataHealth from '../News Json For Offline Use/health.json'
import newsDataScience from '../News Json For Offline Use/science.json'
import newsDataSports from '../News Json For Offline Use/sports.json'
import newsDatatechnology from '../News Json For Offline Use/technology.json'

const News = (props) => {
  const [articles, setArticles] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [page, setPage] = useState(1)
  // const [totalResults, setTotalResults] = useState(0);


  // To Fetch Live News START

  // useEffect(async () => {
  //   props.setProgress(30);
  //   setLoading(true);
  //   const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  //   let rawData = await fetch(url);
  //   let parsedData = await rawData.json();
  //   setArticles(parsedData.articles);
  //   setTotalResults(parsedData.totalResults);
  //   setLoading(false);
  //   props.setProgress(100);
  // }, [])

  // const fetchMoreData = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
  //   setPage(page + 1);
  //   let rawData = await fetch(url);
  //   let parsedData = await rawData.json();
  //   setArticles(articles.concat(parsedData.articles));
  //   setTotalResults(parsedData.totalResults);
  // }

  // To Fetch Live News END

  // To Fetch News Offline From JSON START

  useEffect(() => {
    // setLoading(true);
    props.setProgress(30);

    if (props.category === 'business') {
      setArticles(newsDataBusiness.articles);
    }
    else if (props.category === 'entertainment') {
      setArticles(newsDataEntertainment.articles);
    }
    else if (props.category === 'health') {
      setArticles(newsDataHealth.articles);
    }
    else if (props.category === 'science') {
      setArticles(newsDataScience.articles);
    }
    else if (props.category === 'sports') {
      setArticles(newsDataSports.articles);
    }
    else if (props.category === 'technology') {
      setArticles(newsDatatechnology.articles);
    }
    else {
      setArticles(newsDataGeneral.articles);
    }
    // setLoading(false);
    props.setProgress(100);
  }, []);



  // To Fetch News Offline From JSON END

  return (
    <>
      <h2 className='text-center' style={{ marginTop: '90px' }}>Breaking News</h2>
      <h4 className='text-center'>{props.category}</h4>
      <br />
      <br />
      <br />
      {/* {loading && <Loader />} */}
      {/* <InfiniteScroll
        dataLength={articles.length}
        // next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      > */}
      <div className='container my-5'>
        <div className="row my-5">
          {articles.map((element) => {
            return <div className="col-md-4" key={`row-1-${element.url}`}>
              <NewsItem title={element.title.length <= 45 ? element.title.slice(0, 45) : element.title.slice(0, 50) + '...'} description={element.description == null ? 'null' : element.description.length <= 100 ? element.description.slice(0, 100) : element.description.slice(0, 97) + "..."} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} badgeColor={props.badgeColor} />
            </div>
          })}
        </div>
      </div>
      {/* </InfiniteScroll> */}
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