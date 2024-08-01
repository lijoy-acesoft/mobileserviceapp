import { Box, Button, Select, Typography } from "@mui/material";
import { Field, Form } from "formik";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Fonts } from "@crema/constants/AppEnums";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppTextField from "@crema/components/AppFormComponents/AppTextFieldSmall";

import { useAppSelector } from "../../../../toolkit/hooks";

type Props = {
  values: any;
  userImage: string;
  setUserImage: (image: string) => void;
  setFieldValue: (name: string, value: any) => void;
  handleAddContactClose: () => void;
};

const AddContactForm = (props: Props) => {
  const { handleAddContactClose } = props;
  const labelList = useAppSelector(({ contactApp }) => contactApp.labelList);

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
            pb: 5,
            px: 5,
            mx: -5,
            mb: 5,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
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
              Edit Dealer
            </Typography>
          </Box>

          <div>
            <AppTextField
              sx={{
                width: "100%",
                mb: { xs: 4, xl: 6 },
              }}
              variant="outlined"
              label={"Dealership Name"}
              name="name"
            />

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Address"}
                  name="address"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Manager Phone Number"}
                  name="phone"
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
                  label={"Dealership Sales Person First Name"}
                  name="first_name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Dealership Sales Person Last Name"}
                  name="last_name"
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
                  label={"Dealership Sales Person Phone Number"}
                  name="phone2"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Dealership Sales Person Email Address"}
                  name="email"
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
                  label={"Omvic Number"}
                  name="omvic"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"HST Number"}
                  name="hst"
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
                  label={"Password"}
                  name="password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Confirm Password"}
                  name="cnfm_password"
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
                  label={"Bin Pin"}
                  name="bid_pin"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Confirm Bin Pin"}
                  name="cnfm_bid_pin"
                />
              </Grid>
            </AppGridContainer>

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
                    Default Dealer Make
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
                    {labelList.map((label) => {
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
            </AppGridContainer>

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
                    Province
                  </InputLabel>
                  <Field
                    name="label"
                    label={"Province"}
                    labelId="label-select-outlined-label"
                    as={Select}
                    sx={{
                      width: "100%",
                      mb: { xs: 4, xl: 6 },
                    }}
                  >
                    {labelList.map((label) => {
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
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Postal Code"}
                  name="postalcode"
                />
              </Grid>
            </AppGridContainer>

            <AppTextField
              sx={{
                width: "100%",
              }}
              variant="outlined"
              label={"Admin Name"}
              name="admin_name"
            />
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
          onClick={handleAddContactClose}
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

export default AddContactForm;
