import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  customerIdId?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  parkingSpaceIdId?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
