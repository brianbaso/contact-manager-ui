import React, { useState, useEffect } from "react";
import axios from "axios";
import Magnifying_Glass from "../../icons/magnifying_glass.png";
import ContactCard from "./ContactCard";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

const Hit = props => {
  return (
    <div>
      <ContactCard
        key={props.hit.id}
        name={props.hit.name ? props.hit.name : ""}
        address={props.hit.address ? props.hit.address : ""}
        phoneNumber={props.hit.phoneNumber ? props.hit.phoneNumber : ""}
      />
    </div>
  );
};

const SearchBar = () => {
  const searchClient = algoliasearch(
    "B1JJN0FQXD",
    "43e46f3981e262a43fc2a0c433d79b21"
  );

  return (
    <div className="pepega">
      <InstantSearch indexName="contacts" searchClient={searchClient}>
        <SearchBox styles={styles.searchbar} />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
};

const styles = {
  searchWrapper: {
    margin: "auto",
    width: "80%"
  },
  searchbar: {
    margin: "auto",
    width: "100%",
    borderRadius: "3px",
    textAlign: "right",
    padding: "5px",
    paddingRight: "15px",
    paddingLeft: "15px"
  },
  imageWrapper: {
    position: "absolute",
    padding: "10px",
    pointerEvents: "none"
  },
  image: {
    width: "7%",
    height: "7%",
    position: "relative",
    bottom: "7px",
    right: "1%"
  }
};

export default SearchBar;
