/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ParkingSpaceWhereUniqueInput } from "../../parkingSpace/base/ParkingSpaceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ParkingSpaceCreateNestedManyWithoutParkingLotsInput {
  @Field(() => [ParkingSpaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParkingSpaceWhereUniqueInput],
  })
  connect?: Array<ParkingSpaceWhereUniqueInput>;
}

export { ParkingSpaceCreateNestedManyWithoutParkingLotsInput as ParkingSpaceCreateNestedManyWithoutParkingLotsInput };