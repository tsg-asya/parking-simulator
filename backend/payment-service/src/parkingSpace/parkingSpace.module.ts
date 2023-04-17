import { Module } from "@nestjs/common";
import { ParkingSpaceModuleBase } from "./base/parkingSpace.module.base";
import { ParkingSpaceService } from "./parkingSpace.service";
import { ParkingSpaceResolver } from "./parkingSpace.resolver";

@Module({
  imports: [ParkingSpaceModuleBase],
  providers: [ParkingSpaceService, ParkingSpaceResolver],
  exports: [ParkingSpaceService],
})
export class ParkingSpaceModule {}
