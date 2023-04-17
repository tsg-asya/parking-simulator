import { Module } from "@nestjs/common";
import { ParkingLotModuleBase } from "./base/parkingLot.module.base";
import { ParkingLotService } from "./parkingLot.service";
import { ParkingLotResolver } from "./parkingLot.resolver";

@Module({
  imports: [ParkingLotModuleBase],
  providers: [ParkingLotService, ParkingLotResolver],
  exports: [ParkingLotService],
})
export class ParkingLotModule {}
