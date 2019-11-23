import React, { useState, useEffect } from "react";

// Components
import ContentComponent from "./components/ContentComponent";
import Carousel from "./components/carousel/Carousel";

// CSS
import "./styles/index.css";
import "./styles/containers.css";
import "./styles/contentComponent.css";
import "./styles/carouselComponent.css";

const URL0 =
  "https://vimeo.com/api/oembed.json?url=https://vimeo.com/185441790";
const URL1 =
  "https://vimeo.com/api/oembed.json?url=https://vimeo.com/129902448";
const URL2 =
  "https://vimeo.com/api/oembed.json?url=https://vimeo.com/181725879";

function App() {
  const [loading, setLoading] = useState(true);
  const [content0, setContent0] = useState({});
  const [content1, setContent1] = useState({});
  const [content2, setContent2] = useState({});

  function loadDummyData() {
    setContent0(contentData0);
    setContent1(contentData1);
    setContent2(contentData2);
    setLoading(false);
  }
  function fetchContent() {
    const promises = [];
    const p0 = fetch(URL0);
    const p1 = fetch(URL1);
    const p2 = fetch(URL2);
    promises.push(p0);
    promises.push(p1);
    promises.push(p2);

    Promise.all(promises)
      .then(results => {
        let dataPromises = [];
        try {
          results.forEach(res => {
            if (res.status < 200 || res.status > 299) {
              loadDummyData();
              dataPromises = null;
              throw Error("Error loading data");
            }
            dataPromises.push(res.json());
          });
        } catch (e) {
          // Ignore error
        }
        if (dataPromises) {
          Promise.all(dataPromises)
            .then(results => {
              results.forEach(data => {
                if (typeof data.title === "string") {
                  let video = {};
                  /*
                   * The code within this switch statement is not best practice but
                   * I had no option since the content that needed to be retrieved
                   * was very specific.
                   */
                  switch (data.title) {
                    case "Monsoon III (4K)":
                      video = {
                        imgSrc:
                          data.thumbnail_url.split("_")[0] + "_505x160.jpg",
                        altMessage: data.title,
                        contentTitle: data.title,
                        contentBody:
                          data.description
                            .split("-----------------\n\n")[1]
                            .substring(0, 350) + "..."
                      };
                      setContent0(video);
                      break;
                    case "Beams":
                      video = {
                        imgSrc:
                          data.thumbnail_url.split("_")[0] + "_530x315.jpg",
                        altMessage: data.title,
                        contentTitle: data.title,
                        contentBody:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio temporibus aperiam molestiae facilis minima, nulla inventore unde autem pariatur magnam quo alias veniam iusto beatae in! Provident, minima voluptate?"
                      };
                      setContent1(video);
                      break;
                    case "The Big Picture - Move 2":
                      video = {
                        imgSrc:
                          data.thumbnail_url.split("_")[0] + "_530x315.jpg",
                        altMessage: data.title,
                        contentTitle: data.title,
                        contentBody: data.description.substring(0, 350) + "..."
                      };
                      setContent2(video);
                      break;
                    default:
                      break;
                  }
                }
              });
            })
            .catch(e => console.error(e));
          setLoading(false);
        }
      })
      .catch(e => console.error(e));
  }

  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="containers">
        <ContentComponent {...content0} />
      </div>
      <div className="gradientContainer1">
        <ContentComponent {...content1} contentReversed={true} />
      </div>
      <div className="gradientContainer2">
        <ContentComponent {...content2} />
      </div>
      <Carousel />
    </>
  );
}

// Dummy Data
const contentData0 = {
  imgSrc: "https://i.vimeocdn.com/video/595198868_505x160.jpg",
  altMessage: "MONSOON III",
  contentTitle: "MONSOON III",
  contentBody:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio iste, officiis voluptate possimus error, quo harum corporis veniam obcaecati reprehenderit ut dicta voluptatibus magni fuga nobis. Aspernatur, tempore ipsa."
};
const contentData1 = {
  imgSrc: "https://i.vimeocdn.com/video/589972810_530x315.jpg",
  altMessage: "BEAMS",
  contentTitle: "BEAMS",
  contentBody:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolorum impedit quisquam sequi quidem facere eveniet necessitatibus vel saepe tenetur. Blanditiis aut magni qui incidunt laudantium enim beatae minus! Mollitia."
};
const contentData2 = {
  imgSrc: "https://i.vimeocdn.com/video/590587169_530x315.jpg",
  altMessage: "MOVE 2",
  contentTitle: "MOVE 2",
  contentBody:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolorum impedit quisquam sequi quidem facere eveniet necessitatibus vel saepe tenetur. Blanditiis aut magni qui incidunt laudantium enim beatae minus! Mollitia."
};

export default App;
