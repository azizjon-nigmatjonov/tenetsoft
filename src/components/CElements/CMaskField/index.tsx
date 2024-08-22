import React from "react";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";

interface Props {
  control: any;  // Type control from react-hook-form
  name: string;
  required?: boolean;
  rules?: any;
  mask?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  alwaysShowMask?: boolean;
  maskChar?: string;
}

const CMaskField = ({
  control,
  name = "",
  required = false,
  rules = {},
  mask = "99999",
  label,
  placeholder = "",
  defaultValue = "",
  alwaysShowMask = false,
  maskChar = "",
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{
        required: required ? "required_field" : false,
        ...rules,
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <InputMask
          mask={mask}
          maskChar={maskChar}
          value={value}
          alwaysShowMask={alwaysShowMask}
          onChange={onChange}
        >
          {/* Correctly render the child component */}
          <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        </InputMask>
      )}
    />
  );
};

export default CMaskField;
