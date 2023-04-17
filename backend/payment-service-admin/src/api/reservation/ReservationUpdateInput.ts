import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ParkingSpaceWhereUniqueInput } from "../parkingSpace/ParkingSpaceWhereUniqueInput";
import { PaymentUpdateManyWithoutReservationsInput } from "./PaymentUpdateManyWithoutReservationsInput";

export type ReservationUpdateInput = {
  customerId?: UserWhereUniqueInput;
  endTime?: Date | null;
  parkingSpaceId?: ParkingSpaceWhereUniqueInput;
  payments_id?: PaymentUpdateManyWithoutReservationsInput;
  startTime?: Date | null;
};
