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
import { ParkingLotWhereInput } from "./ParkingLotWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ParkingLotListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ParkingLotWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingLotWhereInput)
  @IsOptional()
  @Field(() => ParkingLotWhereInput, {
    nullable: true,
  })
  every?: ParkingLotWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParkingLotWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingLotWhereInput)
  @IsOptional()
  @Field(() => ParkingLotWhereInput, {
    nullable: true,
  })
  some?: ParkingLotWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParkingLotWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingLotWhereInput)
  @IsOptional()
  @Field(() => ParkingLotWhereInput, {
    nullable: true,
  })
  none?: ParkingLotWhereInput;
}
export { ParkingLotListRelationFilter as ParkingLotListRelationFilter };
