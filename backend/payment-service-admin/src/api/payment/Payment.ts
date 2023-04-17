import { Reservation } from "../reservation/Reservation";

export type Payment = {
  amount: number;
  createdAt: Date;
  id: string;
  paymentMethod?: "Upi" | "Cash" | "Netbanking" | "Sudexo";
  paymentTime: Date;
  reservationId?: Reservation | null;
  updatedAt: Date;
};
