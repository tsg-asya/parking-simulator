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
import { ParkingSpaceWhereInput } from "./ParkingSpaceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ParkingSpaceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ParkingSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpaceWhereInput)
  @IsOptional()
  @Field(() => ParkingSpaceWhereInput, {
    nullable: true,
  })
  every?: ParkingSpaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParkingSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpaceWhereInput)
  @IsOptional()
  @Field(() => ParkingSpaceWhereInput, {
    nullable: true,
  })
  some?: ParkingSpaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParkingSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpaceWhereInput)
  @IsOptional()
  @Field(() => ParkingSpaceWhereInput, {
    nullable: true,
  })
  none?: ParkingSpaceWhereInput;
}
export { ParkingSpaceListRelationFilter as ParkingSpaceListRelationFilter };
