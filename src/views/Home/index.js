import { Fragment } from "react";
import ListBrands from "./components/ListBrands";
import TagsFilter from "./components/TagsFilter";
import SearchFilter from "./components/SearchFilter";

function Home() {
  return (
    <Fragment>
      <div>
        <SearchFilter />
        <TagsFilter />
        <div className="section-center">
          <h4 className="headTxt">Restaurants</h4>
          <ListBrands />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
