import { ParkingLot } from "../parkingLot/ParkingLot";
import { Reservation } from "../reservation/Reservation";

export type ParkingSpace = {
  createdAt: Date;
  id: string;
  isAvailable: boolean;
  parkingLotId?: ParkingLot;
  reservation_id?: Array<Reservation>;
  updatedAt: Date;
};
