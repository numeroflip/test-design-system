import React from 'react';
import styled from 'styled-components';

export type FormInputBaseProps = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
};

type FormControlProps = FormInputBaseProps & {
  children: React.ReactNode | React.ReactNode[];
};

export const FormControl: React.FC<FormControlProps> = ({
  error,
  disabled,
  required,
  children,
}) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as any, { error, disabled, required });
    }
    return child;
  });

  let classes = ['hc-form-control'];
  if (disabled) {
    classes.push('hc-form-control--disabled');
  }
  if (error) {
    classes.push('hc-form-control--error');
  }
  if (required) {
    classes.push('hc-form-control--required');
  }

  return (
    <FormWrapper className={classes.join(' ')}>{childrenWithProps}</FormWrapper>
  );
};

const FormWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing(2)}px;
`;
