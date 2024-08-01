import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Form } from "formik";
import { Fonts } from "@crema/constants/AppEnums";
import AppTextField from "@crema/components/AppFormComponents/AppTextFieldSmall";
import AppGridContainer from "@crema/components/AppGridContainer";
import AppTextArea from "@crema/components/AppFormComponents/AppTextArea";

type Props = {
  values: any;
  setFieldValue: (name: string, value: any) => void;
  handleUpdateClose: () => void;
};




const CreateCategoryForm = (props: Props) => {
  const { values, setFieldValue, handleUpdateClose } = props;


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
              Update Category
            </Typography>
          </Box>

          <div>
            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={12}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Category Name"}
                  name="category"
                  value={values.category}
                  onChange={(e) => setFieldValue("productName", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <AppTextArea
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Description"}
                  name="description"
                  value={values.description}
                  onChange={(e) => setFieldValue("description", e.target.value)}
                />
              </Grid>
            </AppGridContainer>
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
          type="submit"
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
        >
          Cancel
        </Button>
      </Box>
    </Form>
  );
};

export default CreateCategoryForm;
