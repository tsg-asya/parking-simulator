import { ReservationUpdateManyWithoutUsersInput } from "./ReservationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reservationId?: ReservationUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
