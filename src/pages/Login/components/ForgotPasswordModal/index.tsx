import * as Dialog from "@radix-ui/react-dialog";
import { Overlay } from "../styles";

export function ForgotPasswordModal () {
  return (
    <Dialog.Portal>
      <Overlay />
    </Dialog.Portal>
  );

}
