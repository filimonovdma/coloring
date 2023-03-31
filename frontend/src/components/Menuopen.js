import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Menuopen = ({ onClose }) => {
  const navigate = useNavigate();

  const onMenuopenClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  return (
    <div
      className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[420px] h-[299px] overflow-hidden cursor-pointer max-w-full max-h-full text-left text-[inherit] text-[inherit] font-inherit"
      onClick={onMenuopenClick}
    >
      <div className="absolute top-[31px] left-[26px] [text-decoration:underline] leading-[15px]">
        <ul className="m-0 pl-[19px]">
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/art-humanities/"
              target="_blank"
            >{`Art & Humanities`}</a>
          </li>
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/digtal-marketing/"
              target="_blank"
            >
              Digtal Marketing
            </a>
          </li>
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/finance-accounting/"
              target="_blank"
            >{`Finance & Accounting`}</a>
          </li>
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/graphic-design/"
              target="_blank"
            >
              Graphic Design
            </a>
          </li>
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/it-and-software/"
              target="_blank"
            >
              IT and Software
            </a>
          </li>
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/personal-development/"
              target="_blank"
            >
              Personal Development
            </a>
          </li>
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/photohraphy/"
              target="_blank"
            >
              Photohraphy
            </a>
          </li>
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/sales-marketing/"
              target="_blank"
            >
              Sales Marketing
            </a>
          </li>
          <li className="mb-0">
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/social-sciences/"
              target="_blank"
            >
              Social Sciences
            </a>
          </li>
          <li>
            <a
              className="text-[inherit]"
              href="https://demoapus1.com/educrat/learnpress/course-category/web-development/"
              target="_blank"
            >
              Web Development
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menuopen;
