import React from 'react';

import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';

type Props = {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
  title: string;
  text: string;
};
const Popup = ({
  showPopup,
  setShowPopup,
  title,
  text,
}: Props): JSX.Element => {
  return (
    <>
      <Portal>
        <Portal>
          <Dialog
            dismissable={true}
            visible={showPopup}
            onDismiss={() => setShowPopup(false)}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{text}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setShowPopup(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Portal>
    </>
  );
};

export default Popup;
