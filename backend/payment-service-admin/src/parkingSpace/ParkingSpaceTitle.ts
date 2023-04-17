import { ParkingSpace as TParkingSpace } from "../api/parkingSpace/ParkingSpace";

export const PARKINGSPACE_TITLE_FIELD = "id";

export const ParkingSpaceTitle = (record: TParkingSpace): string => {
  return record.id || String(record.id);
};
