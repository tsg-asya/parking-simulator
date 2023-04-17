import { Reservation } from "../reservation/Reservation";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reservationId?: Array<Reservation>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
