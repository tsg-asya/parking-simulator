import { ParkingLotWhereUniqueInput } from "../parkingLot/ParkingLotWhereUniqueInput";
import { ReservationCreateNestedManyWithoutParkingSpacesInput } from "./ReservationCreateNestedManyWithoutParkingSpacesInput";

export type ParkingSpaceCreateInput = {
  isAvailable: boolean;
  parkingLotId: ParkingLotWhereUniqueInput;
  reservation_id?: ReservationCreateNestedManyWithoutParkingSpacesInput;
};
