import React from "react";

interface IInputLoginProps {
  label: string;
  value: string;
  type: string;
  name: string;
  onPressEnter?: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        ref={ref}
        type={props.type}
        name={props.name}
        placeholder={props.name}
        value={props.value}
        onChange={ e => props.onChange(e) }
        onKeyDown={ e => e.key === 'Enter'
          ? props.onPressEnter && props.onPressEnter()
          : undefined}
      />
    </label>
  );
});