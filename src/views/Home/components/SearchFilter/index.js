import React, { Fragment } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { SearchFilterAction } from "../../../../Redux/ActionCreators/SearchFilterAction";
import Styles from "./Styles.module.css";

function SearchFilter(props) {
  let { SearchFilterAction } = props;
  return (
    <Fragment>
      <div className={Styles.formIcon}>
        <label className={Styles.labelSt}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input
          type="text"
          className={Styles.inputSty}
          placeholder="What would you like to buy?"
          onChange={SearchFilterAction}
        />
      </div>
    </Fragment>
  );
}

export default connect(null, { SearchFilterAction })(SearchFilter);
