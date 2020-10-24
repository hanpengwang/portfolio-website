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
    // <>
    //   <Navbar fixed="top" style={styles} className="nav-bar-ok">
    //     <Nav activeKey="/home" className="flex-column">
    //       <Nav.Item>
    //         <h1 className="menu-open" onClick={openMenu}>
    //           open
    //         </h1>
    //       </Nav.Item>

    //       {navItemsInfo.map((item, index) => {
    //         return <a href={item.link}>{item.text}</a>;
    //       })}

    //       <Nav.Item>
    //         <Nav.Link href="/#home">Home</Nav.Link>
    //       </Nav.Item>

    //       <Nav.Item>
    //         <Nav.Link href="/#aboutme">About me</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link href="/#findme">Find Me</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link href="/blogs">Blogs</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link href="/projects">Projects</Nav.Link>
    //       </Nav.Item>
    //       <div style={socialStyles}>
    //         <Nav.Item>
    //           <Nav.Link href="/">Social 1</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link href="/">Social 2</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link href="/">Social 3</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link href="/">Social 4</Nav.Link>
    //         </Nav.Item>
    //       </div>
    //     </Nav>
    //   </Navbar>
    // </>
    <div className="sidebar">
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
              {props.device != "phone" ? (
                <></>
              ) : (
                <i className={item.iconClass} onClick={openMenu}></i>
              )}

              {props.device != "phone" ? item.text : ""}
            </a>
          );
        })}

        <div className="social-link-group">
          {socialLinks.map((item, index) => {
            return (
              <a href={item.link} target="_blank" key={index}>
                <i className={item.iconClass}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
