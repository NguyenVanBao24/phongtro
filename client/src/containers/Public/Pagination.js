import React, { useEffect, useState } from "react";
import { PageNumber } from "../../components";
import { useSelector } from "react-redux";
import icon from "../../ultils/icon";
import { useSearchParams } from "react-router-dom";

const { MdNavigateNext, GrFormPrevious } = icon;

const Pagination = () => {
  const [searchParam] = useSearchParams();
  const { count, posts } = useSelector((state) => state.post);
  const [currentNumber, setcurrentNumber] = useState(1);
  const [arrPanigation, setarrPanigation] = useState([]);
  const [isHideEnd, setisHideEnd] = useState(true);
  const [isHideStart, setisHideStart] = useState(true);
  const maxPage = Math.floor(count / posts.length);
  useEffect(() => {
    const valueSearch = searchParam.get("page");
    valueSearch > 0 ? setcurrentNumber(+valueSearch) : setcurrentNumber(1);
  }, [searchParam]);

  useEffect(() => {
    const end = currentNumber + 1 > maxPage ? currentNumber : currentNumber + 1;
    currentNumber + 1 > maxPage ? setisHideEnd(false) : setisHideEnd(true);
    const start = currentNumber - 1 <= 0 ? currentNumber : currentNumber - 1;
    console.log("start", start);
    currentNumber - 1 <= 0 ? setisHideStart(false) : setisHideStart(true);
    const temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setarrPanigation(temp);
  }, [count, posts, currentNumber]);

  return (
    <div className="flex gap-2 items-center py-5 justify-center ">
      {isHideStart && <PageNumber icon={<GrFormPrevious />} number={1} />}
      {isHideStart && <PageNumber icon={"..."} />}

      {arrPanigation.length > 0 &&
        arrPanigation.map((i) => <PageNumber key={i} number={i} currentNumber={currentNumber} />)}
      {isHideEnd && <PageNumber icon={"..."} />}
      {isHideEnd && <PageNumber icon={<MdNavigateNext />} number={maxPage} />}
    </div>
  );
};

export default Pagination;
