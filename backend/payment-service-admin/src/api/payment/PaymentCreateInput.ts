import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type PaymentCreateInput = {
  amount: number;
  paymentMethod: "Upi" | "Cash" | "Netbanking" | "Sudexo";
  paymentTime: Date;
  reservationId?: ReservationWhereUniqueInput | null;
};
