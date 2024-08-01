import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import { Box, Grid, Button, Divider, FormControlLabel, Checkbox } from "@mui/material";
import * as Yup from 'yup';
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import AppTextArea from "@crema/components/AppFormComponents/AppTextArea";
import CustomDropdown from "@crema/components/apps/CustomDropDown";
import AddNewCustomer from "@crema/components/apps/AddNewCustomer";
import AddNewComplaint from "@crema/components/apps/AddNewComplaints";
import AddNewModel from "@crema/components/apps/AddNewModel";
import AddNewStatus from "@crema/components/apps/AddNewStatus";
import AddNewAccessories from "@crema/components/apps/AddNewAccessories";
import ImageUploadField from "./ImageUploadField"; // Import your new component
import { generatePDF } from "./servicepdf";

// Validation schema
const validationSchema = Yup.object({
  service_no: Yup.string().required('Service No is required'),
  date: Yup.date().required('Date is required'),
  selectedCustomer: Yup.string().required('Customer is required'),
  company: Yup.string().required('Company is required'),
  model: Yup.string().required('Model is required'),
  current_status: Yup.string().required('Current Status is required'),
  colour: Yup.string().required('Colour is required'),
  body: Yup.string().required('Body is required'),
  slno: Yup.string().required('SLNO is required'),
  imei: Yup.string().required('IMEI is required'),
  remark: Yup.string().required('Remark is required'),
  complaint: Yup.string().required('Complaint is required'),
  due_date: Yup.date().required('Due Date is required'),
  cash_ac: Yup.string().required('Cash A/C is required'),
  estimate_amount: Yup.number().required('Estimate Amount is required').positive('Estimate Amount must be positive'),
  advance_amount: Yup.number().required('Advance Amount is required').positive('Advance Amount must be positive'),
  image: Yup.mixed().required('Image is required') // Add validation for image
});

// Reusable Field Components
const CustomTextField = ({ label, name, getFieldProps, touched, errors, type = "text" }) => (
  <AppTextField
    sx={{ width: "90%", mb: { xs: 4, xl: 4 } }}
    variant="outlined"
    label={label}
    name={name}
    {...getFieldProps(name)}
    type={type}
    error={touched[name] && Boolean(errors[name])}
    helperText={touched[name] && errors[name]}
    InputLabelProps={type === "date" ? { shrink: true } : {}}
  />
);

const TableListing = () => {
  const [dropdownData, setDropdownData] = useState(["Item 1", "Item 2", "Item 3"]);
  const [openCreateCustomer, setOpenCreateCustomer] = useState(false);
  const [openCreateCompany, setOpenCreateCompany] = useState(false);
  const [openCreateModel, setOpenCreateModel] = useState(false);
  const [openCreateStatus, setOpenCreateStatus] = useState(false);
  const [openCreateComplains, setOpenCreateComplains] = useState(false);
  const [openCreateAccessories, setOpenCreateAccessories] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleOpen = () => setOpenCreateCustomer(true);

  const handleSetOpen = (header) => {
    switch (header) {
      case 'Company':
        setOpenCreateCompany(true);
        break;
      case 'Model':
        setOpenCreateModel(true);
        break;
      case 'Current Status':
        setOpenCreateStatus(true);
        break;
      default:
        break;
    }
  };

  return (
    <Grid>
      <h3 style={{ marginBlock: "auto" }}>Service Entry</h3>
      <Formik
        initialValues={{
          service_no: '',
          date: '',
          selectedCustomer: '',
          company: '',
          model: '',
          current_status: '',
          colour: '',
          body: '',
          slno: '',
          imei: '',
          remark: '',
          complaint: '',
          due_date: '',
          cash_ac: '',
          estimate_amount: '',
          advance_amount: '',
          accessories: {}, // Initial value for accessories
          image: null // Initial value for image
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const selectedAccessories = {};
          for (let key in values.accessories) {
            if (values.accessories[key]) {
              selectedAccessories[key] = true;
            }
          }
          values.accessories = Object.keys(selectedAccessories).length > 0 ? selectedAccessories : null;

          console.log('Form Values:', values);

          // Reset the form after submission
          resetForm();
          setPreview(null); // Reset the image preview
        }}
      >
        {({ getFieldProps, errors, touched, resetForm, setFieldValue }) => (
          <Form>
            <Grid container spacing={2} p={10}>
              {/* Service Details */}
              <Grid container item spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomTextField label="Service No" name="service_no" getFieldProps={getFieldProps} touched={touched} errors={errors} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomTextField label="Date" name="date" getFieldProps={getFieldProps} touched={touched} errors={errors} type="date" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomDropdown
                    Header="Select A Customer"
                    dropdownData={dropdownData}
                    name="selectedCustomer"
                    setOpen={handleOpen}
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* Item Details */}
              <Grid container item spacing={2}>
                <Grid item xs={12} md={8}>
                  <Box mb={2}>
                    <h3>Item Details</h3>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid container item xs={12} sm={6} spacing={2}>
                      {['Company', 'Model', 'Current Status'].map((header, index) => (
                        <Grid item xs={12} key={index}>
                          <CustomDropdown
                            Header={header}
                            dropdownData={dropdownData}
                            name={header.toLowerCase().replace(' ', '_')}
                            setOpen={() => handleSetOpen(header)}
                          />
                        </Grid>
                      ))}

                    </Grid>
                    <Grid container item xs={12} sm={6} spacing={2}>
                      <Grid item xs={12}>
                        <CustomDropdown
                          Header="Colour"
                          dropdownData={dropdownData}
                          name="colour"
                          setOpen={handleOpen}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextField label="Body" name="body" getFieldProps={getFieldProps} touched={touched} errors={errors} />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextField label="SLNO" name="slno" getFieldProps={getFieldProps} touched={touched} errors={errors} />
                      </Grid>
                      <Grid item xs={12}>
                        <CustomTextField label="IMEI" name="imei" getFieldProps={getFieldProps} touched={touched} errors={errors} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box mb={2}>
                    <h3>Accessories</h3>
                  </Box>
                  <Grid container spacing={2} sx={{ maxHeight: '350px', overflowY: 'auto' }}>
                    {["Charger", "Phone Box", "Laptop Bag", "Headphones", "Charger", "Phone Box", "Laptop Bag", "Headphones", "Charger", "Phone Box", "Laptop Bag", "Headphones"].map((accessory, index) => (
                      <Grid item xs={12} key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name={`accessories.${accessory}`}
                              onChange={(e) => setFieldValue(`accessories.${accessory}`, e.target.checked)}
                            />
                          }
                          label={accessory}
                        />
                      </Grid>
                    ))}
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setOpenCreateAccessories(!openCreateAccessories)}
                      >
                        + Add New Accessories
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>


              {/* Complaints and Remarks */}
              <Grid container spacing={2} mt={3}>
                {/* Left Section */}
                <Grid item xs={12} md={8}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <CustomDropdown
                        Header="Complaint"
                        dropdownData={dropdownData}
                        name="complaint"
                        setOpen={() => setOpenCreateComplains(true)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <AppTextArea
                        sx={{ width: "90%", mb: { xs: 4, xl: 4 }, '& textarea': { lineHeight: '1' } }}
                        variant="outlined"
                        label="Remark"
                        name="remark"
                        {...getFieldProps('remark')}
                        error={touched.remark && Boolean(errors.remark)}
                        helperText={touched.remark && errors.remark}
                      />
                    </Grid>
                    <Grid container item spacing={2}>
                      {[
                        { label: "Due Date", name: "due_date", type: "date" },
                        { label: "Cash A/C", name: "cash_ac" },
                        { label: "Estimate Amount", name: "estimate_amount" },
                        { label: "Advance Amount", name: "advance_amount" }
                      ].map((field, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                          <CustomTextField
                            label={field.label}
                            name={field.name}
                            getFieldProps={getFieldProps}
                            touched={touched}
                            errors={errors}
                            type={field.type}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>

                {/* Right Section */}
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field name="image">
                        {({ field, form }) => (
                          <ImageUploadField
                            label="Upload Image"
                            name="image"
                            setFieldValue={form.setFieldValue}
                            preview={preview}
                            setPreview={setPreview}
                          />
                        )}
                      </Field>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* Submit and Reset Buttons */}
              <Grid item xs={12} display="flex" justifyContent="center" gap={2}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
                <Button type="button" variant="contained" color="secondary" onClick={() => resetForm()}>
                  Reset
                </Button>
                <Button type="button" variant="contained" color="success" onClick={() => generatePDF()}>
                  Download Receipt
                </Button>

              </Grid>
            </Grid>
            <AddNewCustomer open={openCreateCustomer} handleClose={() => setOpenCreateCustomer(false)} />
            <AddNewComplaint open={openCreateCompany} handleClose={() => setOpenCreateCompany(false)} />
            <AddNewModel open={openCreateModel} handleClose={() => setOpenCreateModel(false)} />
            <AddNewStatus open={openCreateStatus} handleClose={() => setOpenCreateStatus(false)} />
            <AddNewComplaint open={openCreateComplains} handleClose={() => setOpenCreateComplains(false)} />
            <AddNewAccessories open={openCreateAccessories} handleClose={() => setOpenCreateAccessories(false)} />
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default TableListing;
