import React from "react";

import { Alert } from "react-bootstrap";
import NewsCard from "./NewsCard";

const NewsList = ({ news, isLoading }) =>
  news.length > 0 ? (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      {news.map((element, index) => (
        <div className="col" key={index}>
          <NewsCard novedad={element} isLoading={isLoading} />
        </div>
      ))}
    </div>
  ) : (
    <Alert variant="primary" className="text-center">
      Esta lista está vacía
    </Alert>
  );

export default NewsList;