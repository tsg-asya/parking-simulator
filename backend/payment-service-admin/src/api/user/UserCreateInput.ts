import { ReservationCreateNestedManyWithoutUsersInput } from "./ReservationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  reservationId?: ReservationCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
