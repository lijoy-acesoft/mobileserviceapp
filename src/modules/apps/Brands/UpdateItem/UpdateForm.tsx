import {
  Box,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Grid,
  InputLabel,
} from "@mui/material";
import { Form, Field } from "formik";
import { Fonts } from "@crema/constants/AppEnums";
import AppTextField from "@crema/components/AppFormComponents/AppTextFieldSmall";
import AppTextArea from "@crema/components/AppFormComponents/AppTextArea";
import AppFileInput from "@crema/components/AppFormComponents/AppFileInput";
import AppGridContainer from "@crema/components/AppGridContainer";

type Props = {
  values: any;
  setFieldValue: (name: string, value: any) => void;
  handleUpdateClose: () => void;
};

const UpdateForm = (props: Props) => {
  const { handleUpdateClose } = props;

  return (
    <Form noValidate autoComplete="off">
      <Box
        sx={{
          padding: 5,
          ml: -6,
          mr: -6,
        }}
      >
        <Box
          sx={{
            pt: 5,
            pb: 3,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            component="h6"
            sx={{
              mb: { xs: 4, xl: 6 },
              fontSize: 20,
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <Typography variant="h3" fontWeight={600}>
              Update Project
            </Typography>
          </Box>

          <div>
            {/* <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="label-select-outlined-label">
                    Asset Category
                  </InputLabel>
                  <Field
                    name="label"
                    label={"Asset Category"}
                    labelId="label-select-outlined-label"
                    as={Select}
                    sx={{
                      width: "100%",
                      mb: { xs: 4, xl: 6 },
                    }}
                  >
                    {[
                      { id: 1, name: "Group 1" },
                      { id: 2, name: "Group 2" },
                    ].map((label) => {
                      return (
                        <MenuItem
                          value={label.id}
                          key={label.id}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          {label.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="label-select-outlined-label">
                    Asset Sub Category
                  </InputLabel>
                  <Field
                    name="label"
                    label={"Asset Sub Category"}
                    labelId="label-select-outlined-label"
                    as={Select}
                    sx={{
                      width: "100%",
                      mb: { xs: 4, xl: 6 },
                    }}
                  >
                    {[
                      { id: 1, name: "Group 1" },
                      { id: 2, name: "Group 2" },
                    ].map((label) => {
                      return (
                        <MenuItem
                          value={label.id}
                          key={label.id}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          {label.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
              </Grid>
            </AppGridContainer> */}

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={12}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 4 },
                  }}
                  variant="outlined"
                  label={"Project Name"}
                  name="project_name"
                />
              </Grid>
            </AppGridContainer>

            <AppGridContainer spacing={3}>
              <Grid item xs={12} md={6}>
                <InputLabel sx={{ mb: 2 }}>Start Date</InputLabel>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  name="start_date"
                  type="date"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel sx={{ mb: 2 }}>Deadline</InputLabel>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  name="deadline"
                  type="date"
                />
              </Grid>
            </AppGridContainer>
            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={12}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Customer Name"}
                  name="customer_name"
                />
              </Grid>
            </AppGridContainer>

            {/* <Grid item xs={12} md={12}>
              <AppTextArea
                sx={{
                  width: "100%",
                  mb: { xs: 4, xl: 6 },
                }}
                variant="outlined"
                label={"Product Desc"}
                name="product_desc"
              />
            </Grid>
            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="label-select-outlined-label">
                    Product Type
                  </InputLabel>
                  <Field
                    name="label"
                    label={"Product Type"}
                    labelId="label-select-outlined-label"
                    as={Select}
                    sx={{
                      width: "100%",
                      mb: { xs: 4, xl: 6 },
                    }}
                  >
                    {[
                      { id: 1, name: "000001 Head Office" },
                      { id: 2, name: "000002 Labour Camp" },
                    ].map((label) => {
                      return (
                        <MenuItem
                          value={label.id}
                          key={label.id}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          {label.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="label-select-outlined-label">
                    Handling Type
                  </InputLabel>
                  <Field
                    name="label"
                    label={"Handling Type"}
                    labelId="label-select-outlined-label"
                    as={Select}
                    sx={{
                      width: "100%",
                      mb: { xs: 4, xl: 6 },
                    }}
                  >
                    {[
                      { id: 1, name: "000001 Head Office" },
                      { id: 2, name: "000002 Labour Camp" },
                    ].map((label) => {
                      return (
                        <MenuItem
                          value={label.id}
                          key={label.id}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          {label.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
              </Grid>
            </AppGridContainer>

            <Grid item xs={12} md={12}>
              <AppFileInput
                sx={{
                  width: "100%",
                  mb: { xs: 4, xl: 6 },
                }}
                variant="outlined"
                label={"Attach Image"}
                name="image"
              />
            </Grid> */}
          </div>
        </Box>
      </Box>

      <Box
        sx={{
          pb: 4,
          mx: -1,
          textAlign: "right",
          display: "flex",
          justifyContent: "flex-end",
          gap: 3,
        }}
      >
        <Button
          sx={{
            position: "relative",
            minWidth: 100,
          }}
          color="primary"
          variant="contained"
        >
          Update
        </Button>
        <Button
          sx={{
            position: "relative",
            minWidth: 100,
          }}
          onClick={handleUpdateClose}
          color="primary"
          variant="outlined"
          type="submit"
        >
          Cancel
        </Button>
      </Box>
    </Form>
  );
};

export default UpdateForm;
