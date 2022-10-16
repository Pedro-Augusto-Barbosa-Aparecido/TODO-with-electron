import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ModalInput } from "../../../../components/ModalInput";
import { CloseButton, Content, Overlay } from "../styles";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { delay } from "../../../../utils/delay";

const createUserFormSchema = z.object({
  password: z.string().min(8).max(20),
  "confirm-password": z.string().min(8).max(20),
  email: z.string().email().min(10),
  username: z.string().min(8).max(20)
});

type CreateUserFormInputs = z.infer<typeof createUserFormSchema>

export function CreateUserModal () {
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<CreateUserFormInputs>({
    resolver: zodResolver(createUserFormSchema),
  });

  const handleCreateUser = async (data: CreateUserFormInputs) => {
    await delay(400);
  }

  return (
    <Dialog.Portal>
      <Overlay />
      
      <Content>
        <Dialog.Title>
          Cadastra-se e começar a usar...
        </Dialog.Title>
        <CloseButton>
          <X weight="bold" size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateUser)}>
          <ModalInput>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="User name..."
              required
              {...register("username")}
            />
          </ModalInput>
          <ModalInput>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              placeholder="seuemail@server.com"
              required
              {...register("email")}
            />
          </ModalInput>
          <ModalInput>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Type your password..."
              required
              {...register("password")}
            />
          </ModalInput>
          <ModalInput>
            <label htmlFor="confirm-password">Confirm password:</label>
            <input
              type="password"
              placeholder="Confirm your password..."
              required
              {...register("confirm-password")}
            />
          </ModalInput>
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )

}
