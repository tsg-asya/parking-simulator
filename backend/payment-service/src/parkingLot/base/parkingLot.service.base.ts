/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ParkingLot, ParkingSpace } from "@prisma/client";

export class ParkingLotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ParkingLotFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingLotFindManyArgs>
  ): Promise<number> {
    return this.prisma.parkingLot.count(args);
  }

  async findMany<T extends Prisma.ParkingLotFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingLotFindManyArgs>
  ): Promise<ParkingLot[]> {
    return this.prisma.parkingLot.findMany(args);
  }
  async findOne<T extends Prisma.ParkingLotFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingLotFindUniqueArgs>
  ): Promise<ParkingLot | null> {
    return this.prisma.parkingLot.findUnique(args);
  }
  async create<T extends Prisma.ParkingLotCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingLotCreateArgs>
  ): Promise<ParkingLot> {
    return this.prisma.parkingLot.create<T>(args);
  }
  async update<T extends Prisma.ParkingLotUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingLotUpdateArgs>
  ): Promise<ParkingLot> {
    return this.prisma.parkingLot.update<T>(args);
  }
  async delete<T extends Prisma.ParkingLotDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParkingLotDeleteArgs>
  ): Promise<ParkingLot> {
    return this.prisma.parkingLot.delete(args);
  }

  async findParkingSpaceId(
    parentId: string,
    args: Prisma.ParkingSpaceFindManyArgs
  ): Promise<ParkingSpace[]> {
    return this.prisma.parkingLot
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .parking_space_id(args);
  }
}