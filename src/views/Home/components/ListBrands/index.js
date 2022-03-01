import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Styles from "./Styles.module.css";

function ListBrands(props) {
  let { brands } = props;
  return (
    <Fragment>
      <div className="d-flex justify-content-evenly align-items-center flex-wrap">
        {brands.map((brand, key) => {
          return (
            <div key={key} className={`${Styles.restWidth} mb-4`}>
              <Link
                to={`/restaurant/${brand.name}`}
                className={`${Styles.restCard} shadow`}
              >
                <div>
                  <img src={brand.logo} alt="brand" />
                </div>
                <div>
                  <div className={Styles.resNames}>{brand.name}</div>
                  <div className="d-flex flex-wrap">
                    {brand.tags.map((tag, key) => (
                      <div key={key} className={Styles.restags}>
                        {tag.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    brands: state.DataReducer.brandsData,
  };
}

export default connect(mapStateToProps)(ListBrands);
