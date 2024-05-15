import {
  SecondaryCustomInput,
  StyledItem,
} from './controlledCustomInput/styled';

const CustomSelect = (props: any) => {
  return (
    <>
      <SecondaryCustomInput
        select={true}
        label={props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="custom-select"
      >
        {props.items &&
          props.items.map((item: any, key: number) => (
            <StyledItem key={key} value={item.value}>
              {item.name}
            </StyledItem>
          ))}
      </SecondaryCustomInput>
    </>
  );
};

export default CustomSelect;
