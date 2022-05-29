import React from "react";
import PortfolioItem from "./PortfolioItem";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.filters = [
      {
        filterName: "*",
        filterDesc: "ALL",
      },
      {
        filterName: ".day-work",
        filterDesc: "JOB",
      },
      {
        filterName: ".for-fun",
        filterDesc: "FOR FUN",
      },
      {
        filterName: ".archive",
        filterDesc: "ARCHIVE",
      },
    ];

    this.itemsData = [
      {
        itemTitle: "item title1",
        itemDesc: "some basis description",
        itemImgUrl: "images/portfolio/01.jpg",
        itemCategory: "archive",
        anchorAttrs: {
          href: "images/portfolio/lightbox-01.jpg",
          title: "cooltest",
          "data-lightbox-gallery": "fancybox-item-01",
          className: "lightbox",
        },
      },
    ];
  }

  render() {
    return (
      <div id="portfolio" className="rm-middle portfolio page">
        {/* .rm-inner */}
        <div className="rm-inner">
          {/* .antiscroll-wrap */}
          <div className="antiscroll-wrap">
            {/* .antiscroll-inner */}
            <div className="antiscroll-inner">
              {/* CONTENT */}
              <div className="content">
                <h2>
                  <span>PORTFOLIO</span>
                </h2>
                {/*FILTERS*/}
                <ul id="filters">
                  {this.filters.map((filter, index) => (
                    <li key={index} className={index == 0 ? "current" : ""}>
                      <a href="#" data-filter={filter.filterName}>
                        {filter.filterDesc}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="portfolio-items">
                  {this.itemsData.map((data, index) => (
                    <PortfolioItem data={data} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rm-overlay" />
        </div>
      </div>
    );
  }
}

export default Portfolio;
