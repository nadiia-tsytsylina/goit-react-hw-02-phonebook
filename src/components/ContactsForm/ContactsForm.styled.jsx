import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px;
  border: 2px solid #245852;
  border-radius: 12px;
  background-color: #ccebe2;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Label = styled.label`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
`;
export const Input = styled.input`
  border: 2px solid #245852;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 16px;
  line-height: 1.2;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:focus {
    box-shadow: 0px 6px 6px rgba(12, 4, 35, 0.1);
  }
`;
export const SubmitButton = styled.button`
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
  padding: 8px;
  background-color: #245852;
  color: #ffffff;
  font-weight: 600;
  border: 0;
  border-radius: 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
    background-color: #153532;
  }
`;
