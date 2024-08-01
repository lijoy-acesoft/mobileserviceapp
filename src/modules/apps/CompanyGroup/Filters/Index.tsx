import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Zoom,
  Grid,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "35%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface FilterModalProps {
  open: boolean;
  handleClose: () => void;
  handleApplyFilters?: (filters: Filters) => void;
}

interface Filters {
  groupCode: string;
  groupName: string;
  showDeleted: boolean;
}

const FilterModal: React.FC<FilterModalProps> = ({
  open,
  handleClose,
  handleApplyFilters,
}) => {
  const [groupCode, setGroupCode] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");
  const [showDeleted, setShowDeleted] = useState<boolean>(false);

  const handleApply = () => {
    const filters: Filters = {
      groupCode,
      groupName,
      showDeleted,
    };
    // handleApplyFilters(filters);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="filter-modal-title"
      aria-describedby="filter-modal-description"
    >
      <Zoom in={open}>
        <Box sx={style}>
          <Typography
            id="filter-modal-title"
            variant="h5"
            component="h2"
            sx={{ mb: 5 }}
          >
            Filter Options
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="group-code"
                  label="Group Code"
                  variant="outlined"
                  fullWidth
                  value={groupCode}
                  onChange={(e) => setGroupCode(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="group-name"
                  label="Group Name"
                  variant="outlined"
                  fullWidth
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showDeleted}
                      onChange={(e) => setShowDeleted(e.target.checked)}
                      name="showDeleted"
                      color="primary"
                    />
                  }
                  label="Show Deleted"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleApply}
                >
                  Apply
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Zoom>
    </Modal>
  );
};

export default FilterModal;
