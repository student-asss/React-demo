import React, { useState } from "react";
import items from "../pages/allData";
import FilterMenu from "../components/FilterMenu";
import FilterButton from "../components/FilterButton";
import Fade from 'react-reveal/Fade';

const allCategories = ["All", ...new Set(items.map(item => item.category))];
  console.log(allCategories);

const Portfolio = () => {

    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (button) => {

      if(button === "All") {
        setMenuItem(items);
        return;
      }

      const filterData = items.filter(item => item.category === button);
      setMenuItem(filterData)
    }

  // render() {
    return (
      <div className="portfolio">
        <div className="container-fluid bcontent">

          <div className="row">
          <Fade bottom>
            <FilterButton button={buttons} filter={filter} /> 
            <FilterMenu menuItem={menuItem} />
          </Fade>
          </div>
          
        </div>
      </div>
    );
  }
// }

export default Portfolio;