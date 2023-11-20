
import { Field, Form } from "formik";
import styled from "styled-components";
export const StylefForm = styled(Form)`
display: flex;
flex-direction: column;
min-width: 400px;
max-width: 600px;
margin: 0 auto;

  padding-left: 15px;
  padding-top: 15px;
`;
export const Label = styled.label`
  display: block;
      margin-bottom: 10px;
`;
export const StyleField = styled(Field)`
padding: 10px;
  margin-bottom: 10px;
`;
export const ButtonSubmit = styled.button`
display: block;
   background-color:#5050ea; 
      color: #fff;
     border:none;
      border-radius:10px;
      padding:10px;
      cursor: pointer;
`;


