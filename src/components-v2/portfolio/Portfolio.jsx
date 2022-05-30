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
        filterName: ".job",
        filterDesc: "JOB",
      },
      {
        filterName: ".forfun",
        filterDesc: "FOR FUN",
      },
      {
        filterName: ".archive",
        filterDesc: "ARCHIVE",
      },
    ];

    this.itemsData = [
      {
        itemTitle: "DBRS Morningstar",
        itemDesc: "My current job",
        itemImgUrl: "images/portfolio/mstar_dbrs_logo.svg",
        itemCategory: "job",
        anchorAttrs: {
          href: "https://www.dbrsmorningstar.com/products-and-services",
          target: "__blank",
        },
      },
      {
        itemTitle: "Guess Your Age",
        itemDesc: "Can tell your age inaccurately",
        itemImgUrl: "images/portfolio/guess-age.png",
        itemCategory: "forfun",
        anchorAttrs: {
          href:
            "https://raw.githubusercontent.com/whpskg/Full-Stack-ML/master/ezgif-5-c1f348a7e9b7.gif",
          title:
            "I forgot the algorithm used maybe yolo2 (did this 2018 ish), but I have trained the model with open data from kaggle \
            and wrote a tutorial for model training to deployment. \
            the app is currently running pretrained with Tensorflow.js, means everything is run from browser",
          "data-lightbox-gallery": "fancybox-item-01",
          className: "lightbox",
          "data-redirect": "https://github.com/whpskg/Full-Stack-ML",
        },
      },
      {
        itemTitle: "Covid Tracker",
        itemDesc: "Hybrid Mobile App",
        itemImgUrl: "images/portfolio/covid-tracker.png",
        itemCategory: "forfun",
        anchorAttrs: {
          href:
            "https://raw.githubusercontent.com/whpskg/files/main/safe-dis-demo.gif",
          title:
            "IBM had an internal dev competition in 2020 and I thought it'd be great idea to have an App like this. \
            I was an one-man team and completed a POC with React Native and IBM cloud server/DBs",
          "data-lightbox-gallery": "fancybox-item-02",
          className: "lightbox",
          'data-redirect': 'https://github.com/whpskg/covid-19-SafeDistancing'
        },
      },
      {
        itemTitle: "Project Euler",
        itemDesc: "Fun but not kinda useful",
        itemImgUrl: "images/portfolio/euler.png",
        itemCategory: "forfun",
        anchorAttrs: {
          href: "https://github.com/whpskg/ProjectEuler",
          target: "__blank",
        },
      },
      {
        itemTitle: "mdvam",
        itemDesc: "Summer research back to 2019",
        itemImgUrl:
          "https://raw.githubusercontent.com/whpskg/files/main/mdvam-lemma.png",
        itemCategory: "archive",
        anchorAttrs: {
          href: "https://github.com/whpskg/mdvam",
          target: "__blank",
        },
      },
      {
        itemTitle: "AmaShark",
        itemDesc: "A private tool for ecommerce owner",
        itemImgUrl:
          "images/portfolio/parcel.png",
        itemCategory: "job",
        anchorAttrs: {},
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
