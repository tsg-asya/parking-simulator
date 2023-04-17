import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  paymentTime?: SortOrder;
  reservationIdId?: SortOrder;
  updatedAt?: SortOrder;
};
