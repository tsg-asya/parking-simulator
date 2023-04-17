import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number;
  paymentMethod?: "Upi" | "Cash" | "Netbanking" | "Sudexo";
  paymentTime?: Date;
  reservationId?: ReservationWhereUniqueInput | null;
};
