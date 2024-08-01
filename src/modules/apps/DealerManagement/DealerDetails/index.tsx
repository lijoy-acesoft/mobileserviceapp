import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AppDialog from "@crema/components/AppDialog";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import { DialogActions } from "@mui/material";
import Button from "@mui/material/Button";
import ContactActions from "./ContactActions";
import ContactTitle from "./Title";
import OtherDetails from "./OtherDetails";
import PersonalDetails from "./PersonalDetails";

type Props = {
  isShowDetail: boolean;
  onShowDetail: (show: boolean) => void;
};

const DealerDetails = (props: Props) => {
  const { isShowDetail, onShowDetail } = props;

  return (
    <AppDialog
      sxStyle={{
        "& .MuiPaper-root:hover": {
          "& .btn-action-view": {
            opacity: 1,
            visibility: "visible",
          },
        },
      }}
      onClose={() => onShowDetail(false)}
      hideClose
      open={isShowDetail}
      title={<ContactTitle />}
    >
      <div>
        <Box
          sx={{
            pt: 5,
          }}
        >
          <AppGridContainer>
            <Grid item xs={12} md={6}>
              <PersonalDetails />
            </Grid>

            <Grid item xs={12} md={6}>
              <OtherDetails />
            </Grid>
          </AppGridContainer>
        </Box>
      </div>

      <DialogActions>
        <ContactActions />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          sx={{ width: 100 }}
          onClick={() => onShowDetail(false)}
        >
          Close
        </Button>
      </DialogActions>
    </AppDialog>
  );
};

export default DealerDetails;
