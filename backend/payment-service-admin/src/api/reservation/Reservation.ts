import { User } from "../user/User";
import { ParkingSpace } from "../parkingSpace/ParkingSpace";
import { Payment } from "../payment/Payment";

export type Reservation = {
  createdAt: Date;
  customerId?: User;
  endTime: Date | null;
  id: string;
  parkingSpaceId?: ParkingSpace;
  payments_id?: Array<Payment>;
  startTime: Date | null;
  updatedAt: Date;
};
