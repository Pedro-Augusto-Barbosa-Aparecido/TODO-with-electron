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

export function Login () {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const colors = useTheme();

  const handleShowPasswordOrNot = () => setShowPassword(state => !state);

  return (
    <LoginContainer>
      <ImageContainer>
        <img src={loginBackImage} alt="" />
      </ImageContainer>
      <FormContainer>
        <h2>Faça seu login </h2>
        
        <Form>
          <div>
            <label htmlFor="email">Email: </label>
            <input 
              type="text" 
              id="email" 
              name="email" 
            />
          </div>
          <div id="password-container">
            <label htmlFor="password">Password: </label>
            <input 
              type={showPassword ? "text" : "password"}
              id="password" 
              name="password"   
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
          </div>
          <button type="submit">
            Sign In
          </button>
        </Form>
      </FormContainer>
    </LoginContainer>

  );

}