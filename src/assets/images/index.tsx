import React from "react";
import noResults from "./no_results_found.png"
import {Image} from "react-bootstrap";

export const NoResultsFound = () => (
    <Image rounded src={noResults} fluid/>
)