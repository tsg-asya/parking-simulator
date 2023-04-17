import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RESERVATION_TITLE_FIELD } from "./ReservationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PARKINGSPACE_TITLE_FIELD } from "../parkingSpace/ParkingSpaceTitle";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="customer_id" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="end_time" source="endTime" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="parking_space_id"
          source="parkingspace.id"
          reference="ParkingSpace"
        >
          <TextField source={PARKINGSPACE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="start_time" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payment"
          target="ReservationId"
          label="payments"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="payment_method" source="paymentMethod" />
            <DateField source="paymentTime" label="payment_time" />
            <ReferenceField
              label="reservation_id"
              source="reservation.id"
              reference="Reservation"
            >
              <TextField source={RESERVATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
