import React from "react";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import AppGridContainer from "@crema/components/AppGridContainer";
import AppCard from "@crema/components/AppCard";
import ImgUpload from "./ImageUpload";
import "react-quill/dist/quill.snow.css";
import AppScrollbar from "@crema/components/AppScrollbar";
import Slide from "@mui/material/Slide";
import { FileType } from "@crema/types/models/ecommerce/EcommerceApp";
import { Field } from "formik";
import ProductTable from "../ProductTable/Index";

type Props = {
  content: string;
  uploadedFiles: FileType[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<FileType[]>>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
};

const ProductContent = ({
  content,
  uploadedFiles,
  setUploadedFiles,
  setFieldValue,
}: Props) => {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Grid item xs={12} lg={8}>
        <AppScrollbar style={{ height: "700px" }}>
          <AppCard sxStyle={{ mb: 8 }}>
            <Grid item xs={12} md={12}>
              <FormControl
                variant="outlined"
                size="medium"
                sx={{
                  width: "100%",
                }}
              >
                <InputLabel id="label-select-outlined-label">
                  Select Site
                </InputLabel>
                <Field
                  name="label"
                  label={"Select Site"}
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
                  // label={"Receipt Date"}
                  name="receipt_date"
                  type="date"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant="outlined"
                  size="medium"
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="label-select-outlined-label">
                    Receipt Against
                  </InputLabel>
                  <Field
                    name="label"
                    label={"Receipt Against"}
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
            </AppGridContainer>

            <Box component="p" sx={{ mt: 3, mb: 2, fontSize: 16 }}>
              Documents
            </Box>
            <ImgUpload
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
            />
          </AppCard>
          <ProductTable />
        </AppScrollbar>
      </Grid>
    </Slide>
  );
};

export default ProductContent;
