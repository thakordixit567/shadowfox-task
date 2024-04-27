import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";
import Data from "../products.json";
import Productcards from "./Productcards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const showingResult = "Showing 01 - 12 of 139 Results";

const shop = () => {
  const [Gridlist, setGridlist] = useState(true);
  const [product, setproduct] = useState(Data);

  const [currentpage, setcurrentpage] = useState(1);
  const productperpage = 12;

  const indexoflastproduct = currentpage * productperpage;
  const indexoffirstpage = indexoflastproduct - productperpage;
  const currentproduct = product.slice(indexoffirstpage, indexoflastproduct);

  const paginate = (pageNumber) => {
    setcurrentpage(pageNumber);
  };

  const [selectedCategory,setselectedCategory] = useState("All");
  const menuItem = [...new Set(Data.map((Val) => Val.category ))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })

    setselectedCategory(curcat);
    setproduct(newItem);
  }

  return (
    <div>
      <PageHeader title="Our Shop Page" curpage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showingResult}</p>
                  <div
                    className={`product-view-mode ${
                      Gridlist ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridlist(!Gridlist)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridlist(!Gridlist)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <Productcards Gridlist={Gridlist} product={currentproduct} />
                </div>

                <Pagination
                  productperpage={productperpage}
                  tottalproduct={product.length}
                  paginate={paginate}
                  activePage={currentpage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search product={product} Gridlist={Gridlist} />
                <ShopCategory 
                 filterItem = {filterItem}
                 setItem = {setproduct}
                 menuItem = {menuItem}
                 setproduct = {setproduct}
                 selectedCategory = {selectedCategory}
                />
                <PopularPost/>
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
