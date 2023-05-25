import styled from '@emotion/styled';

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  padding: 0 16px;
`;
export const Label = styled.label`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
`;
export const Input = styled.input`
  border: 2px solid #ccebe2;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 16px;
  line-height: 1.2;
  outline: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: 0px 4px 4px rgba(12, 4, 35, 0.1);
  }
`;
