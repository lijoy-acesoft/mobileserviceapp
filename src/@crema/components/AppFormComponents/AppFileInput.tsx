import { FieldHookConfig, useField } from "formik";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { InputAdornment, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const AppFileInput = (props: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  const errorText = meta.error && meta.touched ? meta.error : "";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setValue(event.currentTarget.files[0].name);
    }
  };

  return (
    <TextField
      {...props}
      {...field}
      type="text"
      helperText={errorText}
      error={!!errorText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <input
              style={{ display: "none" }}
              id="file-input"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file-input">
              <IconButton component="span">
                <AttachFileIcon />
              </IconButton>
            </label>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default AppFileInput;
