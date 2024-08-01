import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import AddContactForm from "./UpdateForm";
import AppDialog from "@crema/components/AppDialog";
import { useIntl } from "react-intl";

type Props = {
  isAddContact: boolean;
  handleAddContactClose: () => void;
};

const UpdateDealer = (props: Props) => {
  const { isAddContact, handleAddContactClose } = props;
  const { messages } = useIntl();

  const validationSchema = yup.object({
    name: yup.string().required(String(messages["validation.nameRequired"])),
    email: yup
      .string()
      .email(String(messages["validation.emailFormat"]))
      .required(String(messages["validation.emailRequired"])),
    contact: yup
      .string()
      .required(String(messages["validation.phoneNumberRequired"])),
  });

  const [userImage, setUserImage] = useState("/assets/images/placeholder.jpg");

  return (
    <AppDialog
      sxStyle={{
        "& .MuiDialog-paperWidthSm": {
          maxWidth: 900,
          height: 600,
        },
      }}
      maxScrollHeight={600}
      open={isAddContact}
      onClose={() => handleAddContactClose()}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          name: "",
          email: "",
          contact: "",
          birthday: null,
          website: "",
          company: "",
          address: "",
          facebookId: "",
          twitterId: "",
          notes: "",
          label: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleAddContactClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue }) => (
          <AddContactForm
            setUserImage={setUserImage}
            userImage={userImage}
            values={values}
            setFieldValue={setFieldValue}
            handleAddContactClose={handleAddContactClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default UpdateDealer;
