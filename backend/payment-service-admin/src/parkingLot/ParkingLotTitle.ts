import { ParkingLot as TParkingLot } from "../api/parkingLot/ParkingLot";

export const PARKINGLOT_TITLE_FIELD = "name";

export const ParkingLotTitle = (record: TParkingLot): string => {
  return record.name || String(record.id);
};
