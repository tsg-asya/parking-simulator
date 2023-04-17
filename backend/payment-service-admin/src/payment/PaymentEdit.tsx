import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <SelectInput
          source="paymentMethod"
          label="payment_method"
          choices={[
            { label: "UPI", value: "Upi" },
            { label: "CASH", value: "Cash" },
            { label: "NETBANKING", value: "Netbanking" },
            { label: "SUDEXO", value: "Sudexo" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="payment_time" source="paymentTime" disabled />
        <ReferenceInput
          source="reservationId.id"
          reference="Reservation"
          label="reservation_id"
        >
          <SelectInput optionText={ReservationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
