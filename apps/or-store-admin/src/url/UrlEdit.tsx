import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UrlEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
