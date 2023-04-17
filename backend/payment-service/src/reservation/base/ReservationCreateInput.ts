/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ParkingSpaceWhereUniqueInput } from "../../parkingSpace/base/ParkingSpaceWhereUniqueInput";
import { PaymentCreateNestedManyWithoutReservationsInput } from "./PaymentCreateNestedManyWithoutReservationsInput";

@InputType()
class ReservationCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  customerId!: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

  @ApiProperty({
    required: true,
    type: () => ParkingSpaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpaceWhereUniqueInput)
  @Field(() => ParkingSpaceWhereUniqueInput)
  parkingSpaceId!: ParkingSpaceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutReservationsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutReservationsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutReservationsInput, {
    nullable: true,
  })
  payments_id?: PaymentCreateNestedManyWithoutReservationsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date | null;
}

export { ReservationCreateInput as ReservationCreateInput };
