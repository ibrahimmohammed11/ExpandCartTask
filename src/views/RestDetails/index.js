import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./Styles.module.css";

function RestDetails(props) {
  let { name } = useParams();
  let { brands } = props;
  let brand = brands.filter((item) => item.name === name);
  return (
    <Fragment>
      <div>
        {brand.map((brand, key) => {
          return (
            <div key={key}>
              <div>
                <div className={Styles.restCard}>
                  <div>
                    <img
                      src={brand.logo}
                      alt="brand"
                      className={Styles.restMainImg}
                    />
                  </div>
                  <div className={Styles.restData}>
                    <h3>{brand.name}</h3>
                    <p>{brand.description}</p>
                  </div>
                  <div>
                    <span className="mainColor fw-bold">Branches:</span>&nbsp;
                    {brand.branches.map((branch, key) => (
                      <span key={key}>{branch.name}&nbsp; </span>
                    ))}
                  </div>
                  <div className={Styles.tagsSection}>
                    {brand.tags.map((tag, key) => (
                      <div key={key} className={Styles.tagStyle}>
                        <img src={tag.image} alt="tag" />
                        <span>{tag.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row my-5">
                  {brand.items.map((item, key) => (
                    <div key={key} className="col-xl-4 col-md-6 mb-4">
                      <div className={`${Styles.brandItems} shadow`}>
                        <div className={Styles.itemsData}>
                          <h6>{item.name}</h6>
                          <p>{item.description}</p>
                          <p className={Styles.price}>{item.price}</p>
                        </div>
                        <div className="position-relative text-center">
                          <img src={item.image} alt="item" />
                          <div className={Styles.cartSty}>
                            <FontAwesomeIcon icon={faBagShopping} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

export default connect(mapStateToProps)(RestDetails);
