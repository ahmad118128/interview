import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SideMenu = () => {
  return (
    <section className="side">
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="1" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="2" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="3" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="4" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="5" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="6" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="7" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="8" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="9" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="10" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="11" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="12" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="13" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="14" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="15" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="16" />
      </FormGroup>
    </section>
  );
};

export default SideMenu;
