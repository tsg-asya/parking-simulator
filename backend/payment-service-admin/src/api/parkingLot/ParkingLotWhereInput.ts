import { StringFilter } from "../../util/StringFilter";
import { ParkingSpaceListRelationFilter } from "../parkingSpace/ParkingSpaceListRelationFilter";

export type ParkingLotWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  parking_space_id?: ParkingSpaceListRelationFilter;
};
