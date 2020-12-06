import "./NavBar.css";
import React, { useState } from "react";

export default function NavBar(props) {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    setMenuOpened(!menuOpened);
    if (props.device === "phone") {
      window.addEventListener("scroll", handleScroll);
    }
  };

  const handleScroll = () => {
    /*
     ** helper function handle close menu when scroll on phone device
     */

    setMenuOpened(false);
    window.removeEventListener("scroll", handleScroll);
  };

  let navItemsInfo = [
    { text: "Home", link: "/#home", iconClass: "fas fa-house-damage" },
    { text: "About Me", link: "/#aboutme", iconClass: "fas fa-address-card" },
    { text: "Find Me", link: "/#findme", iconClass: "fas fa-globe-americas" },
    { text: "Blogs", link: "/blogs", iconClass: "fas fa-pencil-alt" },
    { text: "Projects", link: "/projects", iconClass: "fas fa-briefcase" },
  ];

  let socialLinks = [
    { link: "https://github.com/whpskg", iconClass: "fab fa-github" },
    {
      link: "https://www.linkedin.com/in/wanghanpeng/",
      iconClass: "fab fa-linkedin",
    },

    {
      link: "https://www.linkedin.com/in/wanghanpeng/",
      iconClass: "fab fa-twitter",
    },
  ];

  return (
    <div
      className="sidebar"
      style={{
        animationName: `${
          sessionStorage.getItem("showLoadingScreen") === "false"
            ? ""
            : "fade-in-nav"
        }`,
      }}
    >
      <div
        className={`burger-menu${menuOpened ? " change" : ""}`}
        onClick={openMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div className={`${menuOpened ? "" : "link-group"}`}>
        {navItemsInfo.map((item, index) => {
          return (
            <a href={item.link} key={index}>
              {props.device !== "phone" ? (
                <></>
              ) : (
                <i className={item.iconClass} onClick={openMenu}></i>
              )}

              {props.device !== "phone" ? item.text : ""}
            </a>
          );
        })}

        <div className="social-link-group">
          {socialLinks.map((item, index) => {
            return (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <i className={item.iconClass}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
