/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsDate,
  IsString,
  IsEnum,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPaymentPaymentMethod } from "./EnumPaymentPaymentMethod";
import { Reservation } from "../../reservation/base/Reservation";

@ObjectType()
class Payment {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  amount!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumPaymentPaymentMethod,
  })
  @IsEnum(EnumPaymentPaymentMethod)
  @Field(() => EnumPaymentPaymentMethod, {
    nullable: true,
  })
  paymentMethod?: "Upi" | "Cash" | "Netbanking" | "Sudexo";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  paymentTime!: Date;

  @ApiProperty({
    required: false,
    type: () => Reservation,
  })
  @ValidateNested()
  @Type(() => Reservation)
  @IsOptional()
  reservationId?: Reservation | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Payment as Payment };
