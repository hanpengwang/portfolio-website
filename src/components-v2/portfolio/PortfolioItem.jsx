import React from "react";

class PortfolioItem extends React.Component {
  render() {
    let {
      itemTitle,
      itemDesc,
      itemImgUrl,
      itemCategory,
      anchorAttrs,
    } = this.props.data;
    return (
      //   <div className="forfun hentry">
      //     <div className="media-box">
      //       <img src="images/portfolio/01.jpg" alt="portfolio-post" />
      //       <div className="mask">
      //         <a href="https://www.google.com" target="_blank" />
      //       </div>
      //     </div>
      //     <h4>Happy Bear</h4>
      //     <p className="category">some quick description</p>
      //   </div>

      <div className={itemCategory + " image hentry"}>
        <div className="media-box">
          <img src={itemImgUrl} alt="default-alt" />
          <div className="mask">
            <a {...anchorAttrs} />
          </div>
        </div>
        <h4>
          {itemTitle}
          </h4>
        <p className="category">{itemDesc}</p>
      </div>
    );
  }
}

export default PortfolioItem;

//back up item
// <div className="design hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/01.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     <a href="portfolio-item-01.html" className="ajax" />
//                   </div>
//                 </div>
//                 <h4>Happy Bear</h4>
//                 <p className="category">an illustration work</p>
//               </div>
//               {/* portfolio-item */}
//               {/* portfolio-item */}
//               <div className="coding hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/03.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     <a href="portfolio-item-02.html" className="ajax" />
//                   </div>
//                 </div>
//                 <h4>Old Guy Superman</h4>
//                 <p className="category">illustration by Dave Mottram</p>
//               </div>
//               {/* portfolio-item */}
//               {/* portfolio-item - lightbox video */}
//               <div className="coding video hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/07.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     {/* lightbox - video */}
//                     <a
//                       href="http://player.vimeo.com/video/37254322?badge=0&color=ffffff"
//                       title="Paper by FiftyThree"
//                       data-lightbox-gallery="fancybox-item-03"
//                       className="lightbox iframe"
//                     />
//                     {/* lightbox - video */}
//                   </div>
//                 </div>
//                 <h4>Paper by FiftyThree</h4>
//                 <p className="category">Lightbox Video</p>
//               </div>
//               {/* portfolio-item - lightbox video */}
//               {/* portfolio-item - lightbox image */}
//               <div className="design image hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/06.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     {/* lightbox - image */}
//                     <a
//                       href="images/portfolio/lightbox-01.jpg"
//                       title="Animal with love"
//                       data-lightbox-gallery="fancybox-item-01"
//                       className="lightbox"
//                     />
//                     {/* lightbox - image */}
//                   </div>
//                 </div>
//                 <h4>Lightbox Image</h4>
//                 <p className="category">a booking mobile app</p>
//               </div>
//               {/* portfolio-item - lightbox image */}
//               {/* portfolio-item - lightbox soundcloud */}
//               <div className="coding audio hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/05.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     {/* lightbox - soundcloud */}
//                     <a
//                       href="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F207988&"
//                       title="Soundcloud embed"
//                       data-lightbox-gallery="fancybox-item-04"
//                       className="lightbox iframe"
//                     />
//                     {/* lightbox - soundcloud */}
//                   </div>
//                 </div>
//                 <h4>Volume 2</h4>
//                 <p className="category">Lightbox Soundcloud</p>
//               </div>
//               {/* portfolio-item - lightbox soundcloud */}
//               {/* portfolio-item - lightbox gallery */}
//               <div className="logo image hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/02.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     {/* lightbox - gallery */}
//                     <a
//                       href="images/portfolio/lightbox-02.jpg"
//                       data-lightbox-gallery="fancybox-item-02"
//                       className="lightbox"
//                       title="Octopus is dangerous!"
//                     />
//                     <a
//                       href="images/portfolio/lightbox-04.jpg"
//                       data-lightbox-gallery="fancybox-item-02"
//                       className="hidden lightbox"
//                     />
//                     <a
//                       href="images/portfolio/lightbox-03.jpg"
//                       data-lightbox-gallery="fancybox-item-02"
//                       className="hidden lightbox"
//                       title="Dog have dreams"
//                     />
//                     {/* lightbox - gallery */}
//                   </div>
//                 </div>
//                 <h4>Lightbox Gallery</h4>
//                 <p className="category">Web Design, UI Design</p>
//               </div>
//               {/* portfolio-item - lightbox gallery */}
//               {/* portfolio-item - custom url */}
//               <div className="logo url hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/10.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     <a
//                       href="http://themeforest.net/user/pixelwars"
//                       target="_blank"
//                     />
//                   </div>
//                 </div>
//                 <h4>Character Sketches</h4>
//                 <p className="category">illustration / sketch</p>
//               </div>
//               {/* portfolio-item - custom url */}
//               {/* portfolio-item */}
//               <div className="coding hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/16.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     <a href="portfolio-item-03.html" className="ajax" />
//                   </div>
//                 </div>
//                 <h4>Cross Browser</h4>
//                 <p className="category">an illustration work</p>
//               </div>
//               {/* portfolio-item */}
//               {/* portfolio-item */}
//               <div className="design hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/14.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     <a href="portfolio-item-01.html" className="ajax" />
//                   </div>
//                 </div>
//                 <h4>404 Page</h4>
//                 <p className="category">an illustration work</p>
//               </div>
//               {/* portfolio-item */}
//               {/* portfolio-item */}
//               <div className="design hentry">
//                 <div className="media-box">
//                   <img src="images/portfolio/15.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     <a href="portfolio-item-02.html" className="ajax" />
//                   </div>
//                 </div>
//                 <h4>Rat</h4>
//                 <p className="category">an illustration work</p>
//               </div>
//               {/* portfolio-item */}
//               {/* portfolio-item */}
//               <div className="logo hentry x2">
//                 <div className="media-box">
//                   <img src="images/portfolio/11.jpg" alt="portfolio-post" />
//                   <div className="mask">
//                     <a href="portfolio-item-03.html" className="ajax" />
//                   </div>
//                 </div>
//                 <h4>Working Dudes</h4>
//                 <p className="category">an illustration work</p>
//               </div>
//               {/* portfolio-item */}
