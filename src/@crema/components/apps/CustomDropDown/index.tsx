import React from "react";
import { useField } from "formik";
import { Button, MenuItem, Select, Grid, FormControl, FormHelperText, InputLabel } from "@mui/material";

const CustomDropdown = ({ name, dropdownData, Header, setOpen }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { setValue } = helpers;
  const { error, touched } = meta;

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const handleOpen = () => setOpen(true);

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mb: { xs: 4, xl: 4 } }}>
      <Grid item xs={11} sm={9}>
        <FormControl fullWidth error={touched && Boolean(error)}>
          <InputLabel>{Header}</InputLabel>
          <Select
            // value={value}
            onChange={handleSelectChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>
              <em>{Header}</em>
            </MenuItem>
            {dropdownData.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          {touched && error ? <FormHelperText>{error}</FormHelperText> : null}
        </FormControl>
      </Grid>
      <Grid item xs={1} sm={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{
            height: 50,
            minWidth: 40,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default CustomDropdown;
