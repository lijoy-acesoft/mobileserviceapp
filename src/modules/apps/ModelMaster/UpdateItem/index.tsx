import { useLocation } from "react-router-dom";
import { Box, Button, Card, CardMedia, Dialog, DialogContent, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import AppsContainer from "@crema/components/AppsContainer";
import { PhotoCamera, Close as CloseIcon } from "@mui/icons-material";
import { makeStyles } from '@material-ui/core/styles';
import { useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  textField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#000',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    marginBottom: theme.spacing(2), // Add spacing between fields
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    marginBottom: theme.spacing(2), // Add spacing below the card
  },
  dialogImage: {
    width: '100%',
    height: 'auto',
  },
}));

const TableListing = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeCode: '',
    nationality: '',
    dob: '',
    maritalStatus: '',
    gender: '',
    designation: '',
    qualification: '',
    joiningDate: '',
    salaryPackage: '',
    salaryType: '',
    terminationDate: '',
    bankName: '',
    bankAc: '',
    branch: '',
    branchCode: '',
    contract: '',
    insurance: '',
    details: '',
    passportNumber: '',
    passportExpiry: '',
    emiratesId: '',
    emiratesExpiry: '',
    visaNumber: '',
    visaExpiry: ''
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);
  const classes = useStyles();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : '');
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
    <h1>Update Technician</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" className={classes.card}>
              {imagePreview ? (
                <CardMedia
                  component="img"
                  style={{ width: 250, height: 230, objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
                  image={imagePreview}
                  alt="Preview"
                  onClick={handleImageClick}
                />
              ) : (
                <Box style={{ display: 'flex', alignItems: 'center', width: 250, height: 240, border: '1px dashed gray', borderRadius: '4px', justifyContent: 'center' }}>
                  <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                    No image selected
                  </Typography>
                </Box>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <div style={{ marginTop: '16px' }}>
                <Button
                  variant="contained"
                  startIcon={<PhotoCamera />}
                  onClick={handleClick}
                  style={{ marginRight: '8px' }}
                >
                  Upload
                </Button>
                <Button variant="contained" onClick={() => setImagePreview(null)}>Clear</Button>
              </div>
              {fileName && (
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                  {fileName}
                </Typography>
              )}
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              name="employeeName"
              label="Employee Name"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.employeeName}
              onChange={handleInputChange}
            />
            <TextField
              name="employeeCode"
              label="Employee Code"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.employeeCode}
              onChange={handleInputChange}
            />
            <TextField
              select
              name="nationality"
              label="Nationality"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.nationality}
              onChange={handleInputChange}
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="India">India</MenuItem>
            </TextField>
            <TextField
              name="dob"
              label="Date of Birth"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              className={classes.textField}
              value={formData.dob}
              onChange={handleInputChange}
            />
            <TextField
              name="maritalStatus"
              label="Marital Status"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.maritalStatus}
              onChange={handleInputChange}
            />
            <TextField
              name="gender"
              label="Gender"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.gender}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              select
              name="designation"
              label="Designation"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.designation}
              onChange={handleInputChange}
            >
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Designer">Designer</MenuItem>
            </TextField>
            <TextField
              name="qualification"
              label="Qualification"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.qualification}
              onChange={handleInputChange}
            />
            <TextField
              name="joiningDate"
              label="Joining Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              className={classes.textField}
              value={formData.joiningDate}
              onChange={handleInputChange}
            />
            <TextField
              name="salaryPackage"
              label="Salary Package"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.salaryPackage}
              onChange={handleInputChange}
            />
            <TextField
              name="salaryType"
              label="Salary Type"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.salaryType}
              onChange={handleInputChange}
            />
            <TextField
              name="terminationDate"
              label="Termination Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              className={classes.textField}
              value={formData.terminationDate}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <DialogContent style={{ position: 'relative' }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              style={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#000',
              }}
            >
              <CloseIcon />
            </IconButton>
            <img src={imagePreview} alt="Preview" className={classes.dialogImage} />
          </DialogContent>
        </Dialog>

        <Grid container spacing={3} style={{ marginTop: '16px' }}>
          <Grid item xs={12}>
            <Typography variant="h6">Salary Account Details</Typography>
            <TextField
              name="bankName"
              label="Bank Name"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.bankName}
              onChange={handleInputChange}
            />
            <TextField
              name="bankAc"
              label="Bank Account"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.bankAc}
              onChange={handleInputChange}
            />
            <TextField
              name="branch"
              label="Branch"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.branch}
              onChange={handleInputChange}
            />
            <TextField
              name="branchCode"
              label="Branch Code"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.branchCode}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Statutory Details</Typography>
            <TextField
              name="contract"
              label="Contract"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.contract}
              onChange={handleInputChange}
            />
            <TextField
              name="insurance"
              label="Insurance"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.insurance}
              onChange={handleInputChange}
            />
            <TextField
              name="details"
              label="Details"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.details}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Other Details</Typography>
            <TextField
              name="passportNumber"
              label="Passport Number"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.passportNumber}
              onChange={handleInputChange}
            />
            <TextField
              name="passportExpiry"
              label="Passport Expiry"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              className={classes.textField}
              value={formData.passportExpiry}
              onChange={handleInputChange}
            />
            <TextField
              name="emiratesId"
              label="Emirates ID"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.emiratesId}
              onChange={handleInputChange}
            />
            <TextField
              name="emiratesExpiry"
              label="Emirates Expiry"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              className={classes.textField}
              value={formData.emiratesExpiry}
              onChange={handleInputChange}
            />
            <TextField
              name="visaNumber"
              label="Visa Number"
              fullWidth
              variant="outlined"
              className={classes.textField}
              value={formData.visaNumber}
              onChange={handleInputChange}
            />
            <TextField
              name="visaExpiry"
              label="Visa Expiry"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              className={classes.textField}
              value={formData.visaExpiry}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" marginTop={3}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default TableListing;
