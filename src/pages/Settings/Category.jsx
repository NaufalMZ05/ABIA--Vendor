import React, { useEffect } from "react";
import FormLayout from "../../components/FormLayout";
import SingleSelect from "../../third-party-packs/singleSelect";
import Dropdown from "../../third-party-packs/dropDown";

import { primaryCategory } from "../../data/CategoryItems";

const Category = () => {


  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="category-container">
      <div>
        <p className="text-[14px]">
          Only select categories that your business services.
        </p>
      </div>
      <div className="mt-[20px]">
        <form className="">
          <div className="space-y-2">
            <label className="font-semibold">Primary Category</label>
            <br />
            <div className="relative lg:w-[52%] category-single-select">
              <SingleSelect options={primaryCategory} />
            </div>
            <br />
          </div>
          <div className="space-y-2">
            <label className="font-semibold">Additional Categories</label>
            <br />
            <div className="relative lg:w-[52%] category-multi-select">
              <Dropdown options={primaryCategory} />
            </div>
            <br />
          </div>
          <div className="relative">
            <button className="submit-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Category;
