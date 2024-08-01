import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import AppCard from "@crema/components/AppCard";
import IntlMessages from "@crema/helpers/IntlMessages";
import { productCategory } from "@crema/mockapi/fakedb/ecommerce/ecommerceData";
import { useNavigate } from "react-router-dom";
import AppGridContainer from "@crema/components/AppGridContainer";
import AppScrollbar from "@crema/components/AppScrollbar";
import { Field } from "formik";
import Slide from "@mui/material/Slide";
import styled from "@emotion/styled";
import ReactQuill from "react-quill";
import {
  ProductInfoType,
  TagType,
} from "@crema/types/models/ecommerce/EcommerceApp";

const TagList: TagType[] = [
  {
    id: 1,
    name: "Fashion",
  },
  {
    id: 2,
    name: "Hotel",
  },
  {
    id: 3,
    name: "Event",
  },
];

const ReactQuillWrapper = styled(ReactQuill)(() => {
  return {
    "& .ql-editor, & .ql-container": {
      maxHeight: "100% !important",
    },
    "& .ql-toolbar": {
      borderRadius: "8px 8px 0 0",
    },
    "& .ql-container": {
      borderRadius: "0 0 8px 8px",
      minHeight: 150,
      maxHeight: 200,
    },
  };
});

type Props = {
  inStock?: boolean;
  productInfo: ProductInfoType[];
  productSpec: ProductInfoType[];
  setProductSpec: React.Dispatch<React.SetStateAction<ProductInfoType[]>>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  setProductInfo: React.Dispatch<React.SetStateAction<ProductInfoType[]>>;
  selectedTags: TagType[];
  setSelectedTags: React.Dispatch<React.SetStateAction<TagType[]>>;
  isEdit?: boolean;
};

const BlogSidebar = ({
  isEdit,
  inStock,
  productInfo,
  productSpec,
  setProductSpec,
  setFieldValue,
  setProductInfo,
  selectedTags,
  setSelectedTags,
}: Props) => {
  const inputLabel = React.useRef(null);
  const navigate = useNavigate();

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
      <Grid item xs={12} lg={4}>
        <AppScrollbar style={{ height: "700px" }}>
          <AppCard title="Additional Details">
            <FormControl
              sx={{
                width: "100%",
              }}
              variant="outlined"
            >
              <InputLabel
                ref={inputLabel}
                id="demo-simple-select-outlined-label"
              >
                Supplier
              </InputLabel>
              <Field
                name="supplier"
                label={"Supplier"}
                labelId="label-select-outlined-label"
                as={Select}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("category", event.target.value)
                }
              >
                {productCategory.map((category) => {
                  return (
                    <MenuItem
                      value={category.id}
                      key={category.id}
                      sx={{
                        cursor: "pointer",
                        inputVariant: "outlined",
                      }}
                    >
                      {category.name}
                    </MenuItem>
                  );
                })}
              </Field>
            </FormControl>

            <AppTextField
              name="document_number"
              variant="outlined"
              sx={{
                width: "100%",
                my: 4,
              }}
              label="Document Number"
            />
            <AppTextField
              name="document_date"
              variant="outlined"
              sx={{
                width: "100%",
                mb: 4,
              }}
              type="date"
            />

            <Box component="p" sx={{ mt: 3, fontSize: 16 }}>
              Remarks*
            </Box>
            <Box
              sx={{
                width: "100%",
                my: 2,
              }}
            >
              <ReactQuillWrapper
                // defaultValue={content}
                theme="snow"
                placeholder="Description here"
                onChange={(value) => setFieldValue("description", value)}
              />
            </Box>
          </AppCard>
        </AppScrollbar>
        <Stack
          spacing={3}
          direction="row"
          sx={{ justifyContent: "flex-end", mt: 4 }}
        >
          <Button
            sx={{
              minWidth: 100,
              color: "text.secondary",
            }}
            variant="text"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>

          <Button
            sx={{
              display: "block",
              minWidth: 100,
            }}
            color="primary"
            variant="contained"
            type="submit"
          >
            {isEdit ? "Update" : "Add"} Receipt
          </Button>
        </Stack>
      </Grid>
    </Slide>
  );
};

export default BlogSidebar;
