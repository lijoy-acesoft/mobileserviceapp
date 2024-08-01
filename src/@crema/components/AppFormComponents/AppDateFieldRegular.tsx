import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { alpha, TextField } from "@mui/material";

const DateBox = styled(TextField)(({ theme }) => ({
  marginLeft: 8,
  marginTop: 6,
  cursor: "pointer",
  fontSize: 14,
  height: 24,
  "& .MuiInputBase-input": {
    paddingLeft: 5,
    paddingTop: 1,
    paddingBottom: 3,
    color: theme.palette.text.secondary,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&.Mui-focused": {
    backgroundColor: alpha(theme.palette.common.black, 0.03),
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
  },
}));

type AppDatePickerProps = {
  onChange: (date: string) => void;
  defaultValue?: string;
};

const AppDatePicker: React.FC<AppDatePickerProps> = ({
  onChange,
  defaultValue = "",
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(defaultValue);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <DateBox
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      className="date-box"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: "1900-01-01", // Optional: Set a minimum date
        max: "2100-12-31", // Optional: Set a maximum date
      }}
    />
  );
};

export default AppDatePicker;
