import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

interface CheckBoxesProps {
  onCheckboxChange: (checkedBoxes: string[]) => void;
}

const CheckBoxes: React.FC<CheckBoxesProps> = ({ onCheckboxChange }) => {
  const checkboxes = Array.from({ length: 16 }).map((_, index) => ({
    id: `checkbox-${index + 1}`,
    name: `Checkbox ${index + 1}`,
  }));

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setCheckedItems((prev) => {
      const newCheckedItems = checked
        ? [...prev, id]
        : prev.filter((item) => item !== id);
      onCheckboxChange(newCheckedItems);
      return newCheckedItems;
    });
  };
  return (
    <Box sx={{ padding: 2, height: '100%' }}>
      <FormGroup>
        {checkboxes.map((checkbox) => (
          <FormControlLabel
            key={checkbox.id}
            control={
              <Checkbox id={checkbox.id} onChange={handleCheckboxChange} />
            }
            label={checkbox.name}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CheckBoxes;
