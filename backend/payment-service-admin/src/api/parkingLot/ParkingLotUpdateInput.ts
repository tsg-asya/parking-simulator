import { ParkingSpaceUpdateManyWithoutParkingLotsInput } from "./ParkingSpaceUpdateManyWithoutParkingLotsInput";

export type ParkingLotUpdateInput = {
  capacity?: number;
  hourlyRate?: number;
  location?: string;
  name?: string;
  parking_space_id?: ParkingSpaceUpdateManyWithoutParkingLotsInput;
};
