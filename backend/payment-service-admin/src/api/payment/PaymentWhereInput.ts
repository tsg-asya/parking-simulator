import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatFilter;
  id?: StringFilter;
  paymentTime?: DateTimeFilter;
  reservationId?: ReservationWhereUniqueInput;
};
