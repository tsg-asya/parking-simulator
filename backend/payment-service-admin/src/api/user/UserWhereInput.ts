import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  reservationId?: ReservationListRelationFilter;
  username?: StringFilter;
};
