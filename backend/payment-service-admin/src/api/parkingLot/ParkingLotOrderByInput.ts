import { SortOrder } from "../../util/SortOrder";

export type ParkingLotOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  hourlyRate?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
