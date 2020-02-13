import React from "react";
import { useSelector } from "react-redux";

const PortfolioImage = () => {
  let images = useSelector(state => state.images.items);

  function filterMe(c, e) {
    e.preventDefault();

    //call filterSelection
    filterSelection(c);

    // Add active class to the current control button (highlight it)
    var btnContainer = document.getElementById("portfolio-filter");
    var btns = btnContainer.getElementsByClassName("filter-buttons");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("current");
        current[0].className = current[0].className.replace(" current", "");
        this.className += " current";
      });
    }
  }
  const filterSelection = c => {
    var x, i;
    x = document.getElementsByClassName("portfolio-item");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "hide");

      if (x[i].className.indexOf(c) > -1) {
        continue;
      } else {
        w3AddClass(x[i], "hide");
      }
    }
  };

  // Show filtered elements
  const w3AddClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  };

  // Hide elements that are not selected
  const w3RemoveClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  };

  return (
    <div className="portfolio-images">
      <ul
        id="portfolio-filter"
        className="portfolio-filter list-inline text-center"
      >
        <li className="filter-buttons current">
          <a href="" data-filter="*" onClick={e => filterMe("all", e)}>
            All Works
          </a>
        </li>
        <li className="filter-buttons">
          <a
            href=""
            data-filter=".wedding"
            onClick={e => filterMe("wedding", e)}
          >
            Wedding
          </a>
        </li>
        <li className="filter-buttons">
          <a
            href=""
            data-filter=".fashion"
            onClick={e => filterMe("hairstyle", e)}
          >
            Hairstyle
          </a>
        </li>
        <li className="filter-buttons">
          <a
            href=""
            data-filter=".nature"
            onClick={e => filterMe("commercial", e)}
          >
            Commercial
          </a>
        </li>
        <li className="filter-buttons">
          <a href="" data-filter=".studio" onClick={e => filterMe("studio", e)}>
            Studio
          </a>
        </li>
      </ul>
      <div className="portfolio-items row">
        {images.data &&
          images.data.map((image, index) => (
            <div
              key={index}
              className={
                `portfolio-item item ` +
                image.type +
                ` col-xs-12 col-sm-6 col-md-4`
              }
            >
              <div
                className="a-img"
                style={{ backgroundImage: `url(` + image.url + `)` }}
              ></div>
              <a href={image.url} className="mfp-image">
                <i className="fa fa-search"></i>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PortfolioImage;
