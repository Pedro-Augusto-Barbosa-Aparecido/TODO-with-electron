import { 
  Form, 
  LoginContainer, 
  ImageContainer, 
  FormContainer 
} from "./styles";

import loginBackImage from "../../../assets/login-image.jpg";

export function Login () {
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
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
          </div>
        </Form>
      </FormContainer>
    </LoginContainer>

  );

}