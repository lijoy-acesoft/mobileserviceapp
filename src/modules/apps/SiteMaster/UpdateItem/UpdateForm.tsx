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
              Update Site
            </Typography>
          </Box>

          <div>
            <Grid item xs={12} md={12}>
              <FormControl
                variant="outlined"
                size="small"
                sx={{
                  width: "100%",
                }}
              >
                <InputLabel id="label-select-outlined-label">
                  Company Group
                </InputLabel>
                <Field
                  name="label"
                  label={"Company Group"}
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

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Site Code"}
                  name="site_code"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Site Name"}
                  name="site_name"
                />
              </Grid>
            </AppGridContainer>

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Address Line 1"}
                  name="address_line_1"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Address Line 2"}
                  name="address_line_2"
                />
              </Grid>
            </AppGridContainer>

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"City"}
                  name="city"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Sequence Prefix"}
                  name="sequence_prefix"
                />
              </Grid>
            </AppGridContainer>

            <Grid item xs={12} md={12}>
              <FormControl
                variant="outlined"
                size="small"
                sx={{
                  width: "100%",
                }}
              >
                <InputLabel id="label-select-outlined-label">
                  Site Email Ids
                </InputLabel>
                <Field
                  name="label"
                  label={"Default Dealer Make"}
                  labelId="label-select-outlined-label"
                  as={Select}
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                >
                  {[{ id: 1, name: "Test" }].map((label) => {
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
