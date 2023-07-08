import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

//Components
import Poster from "../components/Poster/Poster.Component";
import TVShowFilters from "../components/TVShowFilters/TVShowFilters.Component";
import axios from "axios";

const TVShowPage = () => {

  const [tvShowsData, setTvShowsData] = useState([]);

  useEffect(() => {
    const requestTvShowsData = async () => {
      const getTvShowsData = await axios.get("/trending/tv/week");
      setTvShowsData(getTvShowsData.data.results);
    };

    requestTvShowsData();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Popular TV Shows</h2>
            <div className="flex flex-wrap">
              {tvShowsData.map((item) => {
                return (
                  <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                  <Poster {...item} isPlay={true}/>
                </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <TVShowFilters
                title="Date"
                tags={["Today", "This Week"]}
              />
            </div>
            <div>
              <TVShowFilters
                title="Language"
                tags={["English", "Japanese"]}
              />
            </div>
            <div>
              <TVShowFilters
                title="Target Audience"
                tags={["Kids", "Adults"]}
              />
            </div>        
            <div>
              <TVShowFilters
                title="Censorship"
                tags={["U", "U/A", "A"]}
              />
            </div>
          </div>
        </div>
        
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31104.23539200534!2d77.61554!3d12.969969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c80b1ca7533de73!2zMTLCsDU4JzExLjkiTiA3N8KwMzYnNTUuOSJF!5e0!3m2!1sen!2sus!4v1663427476353!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "solid black 2px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="play location"
        ></iframe> */}
      </div>
    </>
  );
};

export default DefaultLayoutHoc(TVShowPage);
