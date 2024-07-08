import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UrlCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
