import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SlideCard from "../SlideCard/SlideCard";

const SlidesList = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      // get slides from API and set slides
      const slidesMock = [
        {
          id: 787,
          name: "Aire libre",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et vehicula turpis, varius vestibulum ipsum. Pellentesque quis accumsan nulla. Nullam sagittis ligula non diam semper, quis volutpat nisi bibendum.",
          image: "http://ongapi.alkemy.org/storage/Qhho5BJAT5.jpeg",
          order: 3,
          user_id: null,
          created_at: "2022-01-16T23:16:58.000000Z",
          updated_at: "2022-01-26T22:18:36.000000Z",
          deleted_at: null,
          group_id: null,
        },
        {
          id: 788,
          name: "clases",
          description: "<p>educación&nbsp;</p>",
          image: "http://ongapi.alkemy.org/storage/QZPcYyweUM.jpeg",
          order: null,
          user_id: null,
          created_at: "2022-01-16T23:27:48.000000Z",
          updated_at: "2022-01-16T23:27:48.000000Z",
          deleted_at: null,
          group_id: null,
        },
        {
          id: 801,
          name: "Mc OS",
          description: "Lorem Ipsum",
          image: "http://ongapi.alkemy.org/storage/qg9sn8vZtA.jpeg",
          order: null,
          user_id: null,
          created_at: "2022-01-18T20:16:48.000000Z",
          updated_at: "2022-01-26T22:13:41.000000Z",
          deleted_at: null,
          group_id: null,
        },
      ];
      setSlides(slidesMock);
    };
    getdata();
  }, []);

  const handleDeleteSlide = (slideId) => {
    // delete from API
    const updatedSlides = slides.filter((slide) => slide.id !== slideId);
    setSlides(updatedSlides);
  };

  return (
    <div class="container">
      <Link to="/backoffice/slides/create">
        <Button variant="primary" className="my-3">
          Crear slide +
        </Button>
      </Link>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {slides.map((slide) => (
          <div class="col">
            <SlideCard slide={slide} onClickDelete={handleDeleteSlide} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidesList;