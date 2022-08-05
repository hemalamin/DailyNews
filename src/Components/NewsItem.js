import React from "react";

const NewsItem = (props) => {
  let { title, content, imageUrl, readMoreUrl, time, author } = props;
  return (
    <div className="my-3">
      <div className={`card bg-${props.mode}`}>
        <img
          src={!imageUrl ? "https://images.wsj.net/im-592737/social" : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div
          className={`card-body bg-${props.mode === "dark" ? "grey" : "dark"}`}
        >
          <h5 className={`card-title text-${props.mode}`}>{title}...</h5>
          <p className={`card-text text-${props.mode}`}>
            {content.slice("0", "100")}...
          </p>
          <h6 className={`card-text text-${props.mode}`}>
            {" "}
            By {author ? author : "Unknown"}, last updated on :{" "}
            {new Date(time).toGMTString()}
          </h6>
          <a
            href={readMoreUrl}
            target="_blank"
            className={`btn btn-primary btn-sm btn-${props.mode}`}
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
