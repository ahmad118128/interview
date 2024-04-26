export interface IStyledCheckbox {
  error?: boolean;
  disabled?: boolean;
}

export interface ICustomCheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  error?: boolean;
  onChange?: (event?: any) => void;
}
