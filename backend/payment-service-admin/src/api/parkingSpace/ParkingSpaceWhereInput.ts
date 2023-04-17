import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ParkingLotWhereUniqueInput } from "../parkingLot/ParkingLotWhereUniqueInput";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type ParkingSpaceWhereInput = {
  id?: StringFilter;
  isAvailable?: BooleanFilter;
  parkingLotId?: ParkingLotWhereUniqueInput;
  reservation_id?: ReservationListRelationFilter;
};
