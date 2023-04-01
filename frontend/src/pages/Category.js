import React, { useState, useRef, useCallback, useEffect} from "react";
import Menuopen from "../components/Menuopen";
import PortalPopup from "../components/PortalPopup";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import TopDiv from "../components/TopDiv";
import FilterDiv from "../components/FilterDiv";
import DrawingCourseCard from "../components/DrawingCourseCardNew";



const Category = () => {
  const spanRef = useRef(null);
  const [isMenuopenOpen, setMenuopenOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const openMenuopen = useCallback(() => {
    setMenuopenOpen(true);
  }, []);

  const closeMenuopen = useCallback(() => {
    setMenuopenOpen(false);
  }, []);

  const openSearch = useCallback(() => {
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
  }, []);

  const onSpan1Click = useCallback(() => {
    navigate("/span");
  }, [navigate]);

  const onPoductClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [collorings, setCollorings] = useState([])
    const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/posts/")
    const data = await response.json()
    setCollorings(data)
  }

  useEffect(() => {
    fetchData()
  }, []);





  return (
    <>
      <div className="relative box-border w-full flex flex-col items-start justify-start border-[1px] border-solid border-black">
        <Header
          imageDimensionIds="/logosvg1.svg"
          smallImageDimensionIds="/mask-group2@2x.png"
          logosvgCursor="unset"
          aPadding="0"
          aFlex="1"
          openMenuopen={openMenuopen}
          openSearch={openSearch}
          onSpan1Click={onSpan1Click}
        />
        <CourseCard
          iconArrowIosForward="/-icon-arrow-ios-forward1.svg"
          iconArrowIosForward1="/-icon-arrow-ios-forward2.svg"
        />
        <TopDiv />
        <FilterDiv />
        <main className='grid grid-cols-5 overflow-hidden py-[55px] px-[60px] items-center justify-center gap-[46px] 
                         lg:grid-cols-5 
                         md:grid-cols-3 md:px-[20px] md:gap-[20px]
                         sm:grid-cols-1'
                         >
                          
{collorings.map(coloring => (
          <DrawingCourseCard
            title={coloring.title}
            url={coloring.slug}
            header_image={'http://localhost:8000' + coloring.header_image.url}
            x435jpg="/23615x435jpg@2x.jpg"
            c33a229685c37eb0eab4a17bf="/c33a229685c37eb0eab4a17bf9a115a0jpeg@2x.png"
            x435jpg1="/23615x435jpg1@2x.png"
            c33a229685c37eb0eab4a17bf1="/c33a229685c37eb0eab4a17bf9a115a0jpeg@2x.png"
            x435jpg2="/23615x435jpg1@2x.png"
            c33a229685c37eb0eab4a17bf2="/c33a229685c37eb0eab4a17bf9a115a0jpeg@2x.png"
            x435jpg3="/23615x435jpg1@2x.png"
            c33a229685c37eb0eab4a17bf3="/c33a229685c37eb0eab4a17bf9a115a0jpeg@2x.png"
            onPoductClick={onPoductClick}
          />
))}
          
        
        </main>
      </div>
      {isMenuopenOpen && (
        <PortalPopup
          placement="Top left"
          top={-370}
          left={-60}
          relativeLayerRef={spanRef}
          onOutsideClick={closeMenuopen}
        >
          <Menuopen onClose={closeMenuopen} />
        </PortalPopup>
      )}
      {isSearchOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeSearch}>
          <Search onClose={closeSearch} />
        </PortalPopup>
      )}
    </>
  );
};

export default Category;
