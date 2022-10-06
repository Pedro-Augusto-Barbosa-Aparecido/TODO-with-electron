import { 
  Form, 
  LoginContainer, 
  ImageContainer, 
  FormContainer 
} from "./styles";

import loginBackImage from "../../../assets/login-image.jpg";

import { useState } from "react";
import { Eye, EyeClosed } from "phosphor-react";
import { useTheme } from "styled-components";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";

import { ErrorMessage as ErrorMessageComponent } from "../../components/Error";

import { delay } from "../../utils/delay";
import { Spinner } from "../../components/Spinner";

const loginFormSchema = z.object({
  email: z.string({
    required_error: "Email não preenchido!"
  }).email({
    message: "Preencha o email corretamente!!!"
  }).min(10, {
    message: "O email precisa ter no mínimo 10 caracteres!"
  }),
  password: z.string({
    required_error: "Preencha a senha!!"
  }).max(20, {
    message: "São permitidos no máximo 20 caracteres!!"
  }).min(8, {
    message: "É necessário que a senha tenha 8 caracteres no mínimo!!"
  })
});

type LoginFormInputs = z.infer<typeof loginFormSchema>;

export function Login () {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const colors = useTheme();

  const { 
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema)
  });

  const handleShowPasswordOrNot = () => setShowPassword(state => !state);
  const handleLogin = async (data: LoginFormInputs) => {
    await delay(5000)

  }

  return (
    <LoginContainer>
      <ImageContainer>
        <img src={loginBackImage} alt="" />
      </ImageContainer>
      <FormContainer
        onSubmit={handleSubmit(handleLogin)}
      >
        <h2>Faça seu login </h2>
        
        <Form>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Você não preencheu o email!!",

              })}
            />
            <ErrorMessage 
              errors={errors} 
              name="email"
              render={({ message }) => {
                return <ErrorMessageComponent
                        typeError="warning"
                        message={message}
                        key={message}  
                      />
              }}
            />
          </div>
          <div id="password-container">
            <label htmlFor="password">Password: </label>
            <section>
              <input 
                type={showPassword ? "text" : "password"}
                id="password" 
                {...register("password")}   
              />
              {
                showPassword ? <Eye 
                      size={25} 
                      color={colors["gray-400"]}
                      onClick={handleShowPasswordOrNot}
                    /> : <EyeClosed 
                      size={25} 
                      color={colors["gray-400"]}
                      onClick={handleShowPasswordOrNot}
                    />
              }   
            </section>
            <ErrorMessage 
              errors={errors} 
              name="password"
              render={({ message }) => {
                return <ErrorMessageComponent
                        typeError="warning"
                        message={message}
                        key={message}  
                      />
              }}
            />        
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </button>
        </Form>
      </FormContainer>
      {isSubmitting && <Spinner />}
    </LoginContainer>

  );

}