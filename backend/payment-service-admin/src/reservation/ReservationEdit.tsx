import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ParkingSpaceTitle } from "../parkingSpace/ParkingSpaceTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customerId.id"
          reference="User"
          label="customer_id"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="end_time" source="endTime" />
        <ReferenceInput
          source="parkingSpaceId.id"
          reference="ParkingSpace"
          label="parking_space_id"
        >
          <SelectInput optionText={ParkingSpaceTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="payments_id"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="start_time" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
