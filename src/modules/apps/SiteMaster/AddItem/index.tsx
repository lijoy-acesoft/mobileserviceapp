import { Formik } from "formik";
import * as yup from "yup";
import AddForm from "./AddForm";
import AppDialog from "@crema/components/AppDialog";

type Props = {
  toggleAdd: boolean;
  handleAddClose: () => void;
};

const CreateItem = (props: Props) => {
  const { toggleAdd, handleAddClose } = props;

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
      open={toggleAdd}
      onClose={() => handleAddClose()}
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
          handleAddClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue }) => (
          <AddForm
            values={values}
            setFieldValue={setFieldValue}
            handleAddClose={handleAddClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default CreateItem;
