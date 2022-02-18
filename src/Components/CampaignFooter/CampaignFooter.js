import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { LOGO } from "../../assets";
import {
  ONG_NAME,
  ONG_LINKEDIN_NAME,
  ONG_INSTAGRAM_NAME,
  ONG_TWITTER_NAME,
  ONG_LINKEDIN_URL,
  ONG_INSTAGRAM_URL,
  ONG_TWITTER_URL,
} from "../../Helpers/constants";

import "./CampaignFooter.css";

const CampaignFooter = () => {
  return (
    <footer>
      <hr />
      <div className="container overflow-hidden">
        <div className="d-none d-xxl-flex justify-content-around">
          <NavLink
            to="/school-campaign"
            className={(isActive) =>
              "fw-bold fs-5 text-reset " +
              (!isActive ? "text-decoration-none" : "")
            }
          >
            Escuela
          </NavLink>
          <NavLink
            to="/toys-campaign"
            className={(isActive) =>
              "fw-bold fs-5 text-reset " +
              (!isActive ? "text-decoration-none" : "")
            }
          >
            Juguetes
          </NavLink>
        </div>
        <hr className="d-none d-xxl-block" />
        <div className="row align-items-center row-cols-2 h-100">
          <div className="col col-8 col-sm-10 col-md-7 col-lg-6">
            <img
              src={LOGO}
              alt={`${ONG_NAME} logo`}
              className="mb-3 footer-logo"
            />
            <span>
              <Link
                to="/"
                className="h3 mx-3 text-decoration-none text-reset d-none d-sm-inline"
              >
                {ONG_NAME}
              </Link>
            </span>
          </div>
          <div className="col col-4 col-sm-2 col-md-5 col-lg-6">
            <div className="text-center text-md-start text-nowrap m-auto footer__social-icons-container">
              <div>
                <a href={ONG_LINKEDIN_URL} className="text-reset">
                  <AiFillLinkedin size={42} />
                  <span className="d-none d-lg-inline">
                    {ONG_LINKEDIN_NAME}
                  </span>
                </a>
              </div>
              <div>
                <a href={ONG_INSTAGRAM_URL} className="text-reset">
                  <AiFillInstagram size={42} />
                  <span className="d-none d-lg-inline">
                    {ONG_INSTAGRAM_NAME}
                  </span>
                </a>
              </div>
              <div>
                <a href={ONG_TWITTER_URL} className="text-reset">
                  <AiOutlineTwitter size={42} />
                  <span className="d-none d-lg-inline">{ONG_TWITTER_NAME}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CampaignFooter;