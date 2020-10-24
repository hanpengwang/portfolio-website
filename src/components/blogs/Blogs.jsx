import React from "react";

import ContentContainer from "../content-container/ContentContainer";
import BlogPage from "./BlogPage";
import { Switch, Route, useParams } from "react-router-dom";

class Blogs extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={"/blogs/:blog"}>
            <ContentContainer>
              <BlogPage />
            </ContentContainer>
          </Route>
          <Route path={"/blogs"}>
            <ContentContainer>
              <h1>Blogs</h1>
              {blogData.map((blog, index) => {
                return (
                  <BlogList
                    date={blog.date}
                    link={blog.link}
                    title={blog.title}
                    key={index}
                  ></BlogList>
                );
              })}
            </ContentContainer>
          </Route>
        </Switch>
      </div>
    );
  }
}

function BlogList(props) {
  const styles = {
    minWidth: "250px",
    width: "30vw",
  };

  return (
    <h1>
      <span>{props.date}</span>
      <a href={props.link}>{props.title}</a>
    </h1>
  );
}

function Blog(props) {
  let blogTitle = useParams();

  return (
    <>
      <h1>{blogTitle.blog}</h1>
      <h2>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna
        dolor, tincidunt at urna ultricies, commodo tristique dolor. Nulla
        mollis, arcu eget fermentum egestas, mauris",
      </h2>
    </>
  );
}

const blogData = [
  {
    title: "blog1",
    date: "2020-01-01",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna dolor, tincidunt at urna ultricies, commodo tristique dolor. Nulla mollis, arcu eget fermentum egestas, mauris",
    link: "/blogs/blog1",
  },
  {
    title: "blog2",
    date: "2020-01-01",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna dolor, tincidunt at urna ultricies, commodo tristique dolor. Nulla mollis, arcu eget fermentum egestas, mauris",
    link: "/blogs/blog2",
  },
  {
    title: "blog3",
    date: "2020-01-01",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna dolor, tincidunt at urna ultricies, commodo tristique dolor. Nulla mollis, arcu eget fermentum egestas, mauris",
    link: "/blogs/blog3",
  },
];

export default Blogs;
