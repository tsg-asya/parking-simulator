import { ParkingSpace } from "../parkingSpace/ParkingSpace";

export type ParkingLot = {
  capacity: number;
  createdAt: Date;
  hourlyRate: number;
  id: string;
  location: string;
  name: string;
  parking_space_id?: Array<ParkingSpace>;
  updatedAt: Date;
};
