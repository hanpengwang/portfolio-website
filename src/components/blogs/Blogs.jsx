import React from "react";
import "./Blog.css";
import ContentContainer from "../content-container/ContentContainer";
import BlogPage from "./BlogPage";
import BlogCard from "./BlogCard";
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
              <div className="blog-wrapper">
                <h1>Blogs</h1>
                {blogData.map((blog, index) => {
                  return (
                    <BlogCard
                      summary={blog.summary}
                      image="data:image/jpeg;base64,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"
                      link={blog.link}
                      title={blog.title}
                      key={index}
                    ></BlogCard>
                  );
                })}
              </div>
            </ContentContainer>
          </Route>
        </Switch>
      </div>
    );
  }
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
  {
    title: "blog3",
    date: "2020-01-01",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna dolor, tincidunt at urna ultricies, commodo tristique dolor. Nulla mollis, arcu eget fermentum egestas, mauris",
    link: "/blogs/blog3",
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
