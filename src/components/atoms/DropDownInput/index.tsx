// import { cloneElement, useState } from 'react';
// import { Controller } from 'react-hook-form';
// // import ArrowSelect from 'components/SvgIcons/ArrowSelect';
// import { FormControl, InputLabel, Select as MuiSelect } from '@mui/material';
// import { SelectProps } from './type';
// import {
//   StyledErrorMessage,
//   StyledFormControl,
//   StyledInputLabel,
//   StyledMenuItem,
//   StyledItemMenuItem,
// } from './styled';

// export const Select = (props: SelectProps) => {
//   const {
//     control,
//     name,
//     element,
//     label,
//     options,
//     rules,
//     disabled,
//     readOnly,
//     defaultValue,
//   } = props;
//   const [icone, setIcone] = useState('');

//   return (
//     <Controller
//       control={control}
//       name={name}
//       rules={rules}
//       defaultValue={defaultValue}
//       render={({ field: { onChange, ...others }, fieldState }) => {
//         const onChangeSelect = (e: any) => {
//           setIcone(e.target.value);
//           onChange(e);
//         };
//         return (
//           <>
//             {!element ? (
//               <StyledFormControl
//                 error={fieldState.error ? true : false}
//                 fullWidth
//                 disabled={disabled}
//                 readOnly={readOnly}
//               >
//                 <InputLabel>
//                   <StyledInputLabel>
//                     {rules?.required ? `${label} *` : label}
//                   </StyledInputLabel>
//                 </InputLabel>
//                 <MuiSelect
//                   {...others}
//                   IconComponent={ArrowSelect}
//                   fullWidth
//                   variant="standard"
//                   onChange={(e) => onChangeSelect(e)}
//                   readOnly={readOnly}
//                 >
//                   {options?.map((item, index) => {
//                     return (
//                       <StyledMenuItem key={index} value={item.value}>
//                         <StyledItemMenuItem>{item.label}</StyledItemMenuItem>
//                         {item.value === icone && (
//                           <img src="/icons/svg/checkmark.svg" alt="" />
//                         )}
//                       </StyledMenuItem>
//                     );
//                   })}
//                 </MuiSelect>
//               </StyledFormControl>
//             ) : (
//               <FormControl
//                 error={fieldState.error ? true : false}
//                 fullWidth
//                 disabled={disabled}
//               >
//                 <InputLabel>{label}</InputLabel>
//                 {cloneElement(element, {
//                   ...others,
//                   onChange,
//                 })}
//               </FormControl>
//             )}
//             <StyledErrorMessage>{fieldState.error?.message}</StyledErrorMessage>
//           </>
//         );
//       }}
//     />
//   );
// };
