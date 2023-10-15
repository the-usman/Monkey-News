import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import NewsItems from './NewsItems'
import InfiniteScroll from "react-infinite-scroll-component";


const NewsContainer = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateData = async () => {
        props.setProgress(10)
        document.title = "GhantaNews - " + props.type;
        let url = ""
        if (props.type === "Top Headline") {
            url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page}`
        }
        else {
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&pageSize=${props.pageSize}&page=${page}`
        }
        props.setProgress(60)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        updateData()
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        
        let url = ""
        if (props.type === "Top Headline") {
            url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page+1}`
        }
        else {
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&pageSize=${props.pageSize}&page=${page+1}`
        }
        setPage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }


    return (
        <>
            <div className="container my-3 text-center">
                <h1 style={{ margin: "90px" }}>{props.type} - GhantaNews</h1>
                {loading && <div className="spinner"></div>}
                {
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<div className="spinner"></div>}
                    >
                        <div className="container">
                            <div className="row">
                                {articles.map((element) => {
                                    const { title, description, urlToImage, url, publishedAt, author, source } = element;
                                    return (
                                        <div className="col-md-4 my-3" key={url}><NewsItems title={title} desc={description} urlToImage={urlToImage} url={url} date={publishedAt} author={author} source={source.name} /></div>)
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                }
            </div>
        </>
    )
}

NewsContainer.propTypes = {
    apikey: PropTypes.string.isRequired,
};

export default NewsContainer
