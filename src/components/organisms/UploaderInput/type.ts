import { Control, FieldValues, Path, PathValue } from 'react-hook-form';

export type DragAndDropUploadProps<TField extends FieldValues> = {
  name: Path<TField>;
  control: Control<TField>;
  defaultValue?: PathValue<TField, Path<TField>>;
};
