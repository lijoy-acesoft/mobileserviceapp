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
  handleAddClose: () => void;
};

const AddForm = (props: Props) => {
  const { handleAddClose } = props;

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
              Create Supplier
            </Typography>
          </Box>

          <div>
            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Supplier Code"}
                  name="supplier_code"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Supplier Name"}
                  name="supplier_name"
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
                  label={"Contact Person"}
                  name="contact_person"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Designation"}
                  name="designation"
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
                  label={"Contact Number"}
                  name="contact_number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Contact Email"}
                  name="contact_email"
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
                  label={"Location Latitude"}
                  name="location_latitude"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Location Longitude"}
                  name="location_longitude"
                />
              </Grid>
            </AppGridContainer>
            <Grid item xs={12} md={12}>
              <AppTextField
                sx={{
                  width: "100%",
                  mb: { xs: 4, xl: 6 },
                }}
                variant="outlined"
                label={"Website"}
                name="website"
              />
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
          Create
        </Button>
        <Button
          sx={{
            position: "relative",
            minWidth: 100,
          }}
          onClick={handleAddClose}
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

export default AddForm;
