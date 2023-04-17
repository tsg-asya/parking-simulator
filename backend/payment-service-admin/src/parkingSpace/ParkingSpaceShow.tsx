import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PARKINGSPACE_TITLE_FIELD } from "./ParkingSpaceTitle";
import { PARKINGLOT_TITLE_FIELD } from "../parkingLot/ParkingLotTitle";

export const ParkingSpaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_available" source="isAvailable" />
        <ReferenceField
          label="parking_lot_id"
          source="parkinglot.id"
          reference="ParkingLot"
        >
          <TextField source={PARKINGLOT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reservation"
          target="ParkingSpaceId"
          label="reservations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer_id"
              source="user.id"
              reference="User"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
