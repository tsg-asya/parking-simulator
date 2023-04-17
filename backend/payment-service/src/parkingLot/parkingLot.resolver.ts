import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParkingLotResolverBase } from "./base/parkingLot.resolver.base";
import { ParkingLot } from "./base/ParkingLot";
import { ParkingLotService } from "./parkingLot.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParkingLot)
export class ParkingLotResolver extends ParkingLotResolverBase {
  constructor(
    protected readonly service: ParkingLotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
