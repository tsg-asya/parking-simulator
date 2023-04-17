/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Reservation,
  Payment,
  User,
  ParkingSpace,
} from "@prisma/client";

export class ReservationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReservationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationFindManyArgs>
  ): Promise<number> {
    return this.prisma.reservation.count(args);
  }

  async findMany<T extends Prisma.ReservationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationFindManyArgs>
  ): Promise<Reservation[]> {
    return this.prisma.reservation.findMany(args);
  }
  async findOne<T extends Prisma.ReservationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationFindUniqueArgs>
  ): Promise<Reservation | null> {
    return this.prisma.reservation.findUnique(args);
  }
  async create<T extends Prisma.ReservationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationCreateArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.create<T>(args);
  }
  async update<T extends Prisma.ReservationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationUpdateArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.update<T>(args);
  }
  async delete<T extends Prisma.ReservationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationDeleteArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.delete(args);
  }

  async findPaymentsId(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.prisma.reservation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments_id(args);
  }

  async getCustomerId(parentId: string): Promise<User | null> {
    return this.prisma.reservation
      .findUnique({
        where: { id: parentId },
      })
      .customerId();
  }

  async getParkingSpaceId(parentId: string): Promise<ParkingSpace | null> {
    return this.prisma.reservation
      .findUnique({
        where: { id: parentId },
      })
      .parkingSpaceId();
  }
}
