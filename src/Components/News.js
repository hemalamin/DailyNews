import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const News = (props) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    let url = `https://inshorts.deta.dev/news?category=${props.category}`;
    let data = await fetch(url);
    setLoading(true);
    let parsedData = await data.json();
    setLoading(false);
    setdata(parsedData.data);
  };

  useEffect(() => {
    document.title = `${props.category} - DailyNews`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  // let mode = props.mode;
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <div className="container">
          <h1
            className={`text-center text-${
              props.mode === "dark" ? "white" : "dark"
            }`}
            style={{ marginTop: "55px" }}
          >{`DailyNews | ${props.category}`}</h1>
          {loading && <Spinner />}
          <div className="row">
            {!loading &&
              data.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      content={element.content}
                      imageUrl={element.imageUrl}
                      readMoreUrl={element.readMoreUrl}
                      time={element.time}
                      author={element.author}
                      mode={props.mode}
                      toggleMode={props.toggleMode}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
News.defaultProps = {
  category: "general",
};
News.propTypes = {
  category: PropTypes.string,
};
export default News;

//API KEY :-  53926e6eaeba444aa7df95582812243c
