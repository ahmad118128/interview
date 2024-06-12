// import React from 'react';
// import { Field, Control, Path } from 'react-hook-form';
// import { StyledInputContainer } from '@/components/pages/dashboard/image-recognition/FilterChild/styled';
// import ControlledTimeDatePickerInput from '../TimeDatePicker/ControlledTimeDatePicker';
// import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
// import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
// export interface InputOption {
//   value: string;
//   label: string;
// }

// export interface Input {
//   typeInput: 'textField' | 'select' | 'datepicker';
//   options?: InputOption[];
//   name: Path<Field>;
//   value: string | undefined;
//   label?: string | undefined;
//   control: Control;
// }

// export interface DynamicInputsProps {
//   inputs: Input[];
// }

// const inputComponents: { [key: string]: React.ComponentType<any> } = {
//   textField: CustomInput,
//   select: CustomRHFAutocomplete,
//   datepicker: ControlledTimeDatePickerInput,
// };

// const DynamicInputs = <TField extends FieldValues>({
//   inputs,
// }: DynamicInputsProps) => {
//   return (
//     <>
//       {inputs?.map(
//         (
//           { typeInput, options, name, value, label, control, ...props },
//           index
//         ) => {
//           return (
//             <StyledInputContainer item xs={12} md={4} lg={3} key={index}>
//               {typeInput === 'select' && (
//                 <CustomRHFAutocomplete
//                   label={label ? label : ''}
//                   control={control}
//                   name={name}
//                   options={options ? options : []}
//                   {...props}
//                 />
//               )}
//               {typeInput === 'textField' && (
//                 c
//               )}
//               {typeInput === 'datepicker' && (
//                 <ControlledTimeDatePickerInput
//                   name={name}
//                   control={control}
//                   label={label ? label : ''}
//                   value={0}
//                   onChange={() => console.log('first')}
//                   rules={{ required: 'Require' }}
//                 />
//               )}
//             </StyledInputContainer>
//           );
//         }
//       )}
//     </>
//   );
// };

// export default DynamicInputs;
