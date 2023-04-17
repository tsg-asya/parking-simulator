import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ParkingSpaceWhereUniqueInput } from "../parkingSpace/ParkingSpaceWhereUniqueInput";
import { PaymentCreateNestedManyWithoutReservationsInput } from "./PaymentCreateNestedManyWithoutReservationsInput";

export type ReservationCreateInput = {
  customerId: UserWhereUniqueInput;
  endTime?: Date | null;
  parkingSpaceId: ParkingSpaceWhereUniqueInput;
  payments_id?: PaymentCreateNestedManyWithoutReservationsInput;
  startTime?: Date | null;
};
