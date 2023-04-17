import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ParkingSpaceTitle } from "../parkingSpace/ParkingSpaceTitle";

export const ParkingLotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="capacity" source="capacity" />
        <NumberInput step={1} label="hourly_rate" source="hourlyRate" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="parking_space_id"
          reference="ParkingSpace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParkingSpaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
