import * as React from "react";
import Modal from "@cloudscape-design/components/modal";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";

function ModalCE() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Modal
      onDismiss={() => setVisible(false)}
      visible={visible}
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link">Cancel</Button>
            <Button variant="primary">Ok</Button>
          </SpaceBetween>
        </Box>
      }
      header="Modal title"
    >
      <FormField
        label="Form field label"
        description="This is a description"
      >
        <Input />
      </FormField>
    </Modal>
  );
}
export default ModalCE;