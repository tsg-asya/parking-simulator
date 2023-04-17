import { ParkingSpaceCreateNestedManyWithoutParkingLotsInput } from "./ParkingSpaceCreateNestedManyWithoutParkingLotsInput";

export type ParkingLotCreateInput = {
  capacity: number;
  hourlyRate: number;
  location: string;
  name: string;
  parking_space_id?: ParkingSpaceCreateNestedManyWithoutParkingLotsInput;
};
