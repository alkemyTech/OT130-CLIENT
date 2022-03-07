import React, { useCallback, useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

import {
  getNovedadesByParams,
  getNovedades,
} from "../../actions/novedadesActions";

import NewsList from "../News/NewsList";

const NewsSearchForm = () => {
  const [searchParam, setSearchParam] = useState("");
  const dispatch = useDispatch();
  const { news, isLoading } = useSelector((state) => state.news);

  const getNews = (searchParam) => {
    if (searchParam.length > 3) {
      return dispatch(getNovedadesByParams(searchParam));
    }
    dispatch(getNovedades());
  };

  const delayedApiCall = useCallback(debounce(getNews, 500), []);

  useEffect(() => {
    delayedApiCall(searchParam);
  }, [searchParam, delayedApiCall]);

  const HandleSearchInputChange = (e) => {
    setSearchParam(e.target.value);
  };

  return (
    <>
      <FloatingLabel
        controlId="news-search-input"
        label="Buscar"
        className="my-3"
        onChange={HandleSearchInputChange}
      >
        <Form.Control type="text" placeholder="Buscar" />
      </FloatingLabel>
      <NewsList news={news} isLoading={isLoading} />
    </>
  );
};

export default NewsSearchForm;