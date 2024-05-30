import { Routes, Route } from "react-router-dom";
import { path } from "./ultils/constants";
import {
  Home,
  Login,
  RentalApartment,
  RentalHouse,
  RentalSpace,
  RentalRomm,
  Homepages,
} from "./containers/Public";

function App() {
  return (
    <div className=" bg-primary ">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={`*`} element={<Homepages />} />
          <Route path={path.HOME__PAGE} element={<Homepages />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRomm />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
