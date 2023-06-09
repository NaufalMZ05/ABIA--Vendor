import React from "react";
import "./content.css";

const ContentHeader = ({ title }) => {
  return (
    <div className="w-full">
      <div className="header-box">
        <div className="ml-[15px]">{title}</div>
      </div>
    </div>
  );
};

export default ContentHeader;
