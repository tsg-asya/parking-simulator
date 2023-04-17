import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { ParkingLotList } from "./parkingLot/ParkingLotList";
import { ParkingLotCreate } from "./parkingLot/ParkingLotCreate";
import { ParkingLotEdit } from "./parkingLot/ParkingLotEdit";
import { ParkingLotShow } from "./parkingLot/ParkingLotShow";
import { ParkingSpaceList } from "./parkingSpace/ParkingSpaceList";
import { ParkingSpaceCreate } from "./parkingSpace/ParkingSpaceCreate";
import { ParkingSpaceEdit } from "./parkingSpace/ParkingSpaceEdit";
import { ParkingSpaceShow } from "./parkingSpace/ParkingSpaceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Payment Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="ParkingLot"
          list={ParkingLotList}
          edit={ParkingLotEdit}
          create={ParkingLotCreate}
          show={ParkingLotShow}
        />
        <Resource
          name="ParkingSpace"
          list={ParkingSpaceList}
          edit={ParkingSpaceEdit}
          create={ParkingSpaceCreate}
          show={ParkingSpaceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
