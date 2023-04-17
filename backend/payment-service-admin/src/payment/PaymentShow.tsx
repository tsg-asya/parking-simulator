import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RESERVATION_TITLE_FIELD } from "../reservation/ReservationTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
