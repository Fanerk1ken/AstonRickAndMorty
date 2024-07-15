import { Input } from "rsuite";
import { Form } from "rsuite";
import { FieldText } from "../../../../types/modal-types.ts";

const Field = (props: FieldText) => {
  return (
    <Form.Group>
      <Input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        size={props.size || "md"}
      />
      <Form.ErrorMessage show={!!props.error} placement="bottomStart">
        {props.error}
      </Form.ErrorMessage>
    </Form.Group>
  );
};

export default Field;
