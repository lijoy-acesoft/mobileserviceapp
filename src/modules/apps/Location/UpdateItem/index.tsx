import { Formik } from "formik";
import * as yup from "yup";
import UpdateForm from "./UpdateForm";
import AppDialog from "@crema/components/AppDialog";

type Props = {
  toggleUpdate: boolean;
  handleUpdateClose: () => void;
};

const UpdateItem = (props: Props) => {
  const { toggleUpdate, handleUpdateClose } = props;

  const validationSchema = yup.object({
    group_code: yup.string().required("Required"),
    group_name: yup.string().required("Required"),
  });

  return (
    <AppDialog
      sxStyle={{
        "& .MuiDialog-paperWidthSm": {
          maxWidth: 500,
          // height: 600,
        },
      }}
      maxScrollHeight={600}
      open={toggleUpdate}
      onClose={() => handleUpdateClose()}
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
          handleUpdateClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue }) => (
          <UpdateForm
            values={values}
            setFieldValue={setFieldValue}
            handleUpdateClose={handleUpdateClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default UpdateItem;
