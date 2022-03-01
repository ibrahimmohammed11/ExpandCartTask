import React, { Fragment, Component, useEffect, useState } from "react";
import { setTagsAction } from "../../../../Redux/ActionCreators/setTagsAction";
import { connect } from "react-redux";
import { handleTagsFilter } from "../../../../Redux/ActionCreators/SearchFilterAction";
import Styles from "./Styles.module.css";

function TagsFilter(props) {
  const [currIndex, setindex] = useState(0);
  let { tagsSet, setTagsAction, handleTagsFilter } = props;

  useEffect(() => {
    setTagsAction();
  }, []);
  return (
    <Fragment>
      <div className="btn-container">
        <div className={Styles.tagsSection}>
          {tagsSet.map((tag, index) => {
            return (
              <div
                key={index}
                className={`${Styles.tagStyle} ${
                  index == currIndex && Styles.active
                }`}
                onClick={() => {
                  handleTagsFilter(tag.name);
                  setindex(index);
                }}
              >
                <img src={tag.image} alt="tag" />
                <span>{tag.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    tagsSet: state.SetTagsReducer.brandsTags,
  };
}

export default connect(mapStateToProps, {
  setTagsAction,
  handleTagsFilter,
})(TagsFilter);
