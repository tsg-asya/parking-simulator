import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ParkingLotTitle } from "../parkingLot/ParkingLotTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const ParkingSpaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="is_available" source="isAvailable" />
        <ReferenceInput
          source="parkingLotId.id"
          reference="ParkingLot"
          label="parking_lot_id"
        >
          <SelectInput optionText={ParkingLotTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reservation_id"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
