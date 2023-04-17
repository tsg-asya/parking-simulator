import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type ReservationWhereInput = {
  customerId?: UserWhereUniqueInput;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  payments_id?: PaymentListRelationFilter;
  startTime?: DateTimeNullableFilter;
};
