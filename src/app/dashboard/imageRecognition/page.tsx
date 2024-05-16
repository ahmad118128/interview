'use client';
import { UsersTab } from '@/components/pages/UI/UsersTab';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function ImageRecognition() {
  return (
    <>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <UsersTab
          radioButton={
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              sx={{ marginRight: 0 }}
            />
          }
        />
      </RadioGroup>
    </>
  );
}
