import { SortOrder } from "../../util/SortOrder";

export type ParkingSpaceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isAvailable?: SortOrder;
  parkingLotIdId?: SortOrder;
  updatedAt?: SortOrder;
};
