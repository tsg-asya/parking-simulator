import { ParkingLotWhereUniqueInput } from "../parkingLot/ParkingLotWhereUniqueInput";
import { ReservationUpdateManyWithoutParkingSpacesInput } from "./ReservationUpdateManyWithoutParkingSpacesInput";

export type ParkingSpaceUpdateInput = {
  isAvailable?: boolean;
  parkingLotId?: ParkingLotWhereUniqueInput;
  reservation_id?: ReservationUpdateManyWithoutParkingSpacesInput;
};
