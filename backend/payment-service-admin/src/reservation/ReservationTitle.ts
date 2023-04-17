import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "id";

export const ReservationTitle = (record: TReservation): string => {
  return record.id || String(record.id);
};
