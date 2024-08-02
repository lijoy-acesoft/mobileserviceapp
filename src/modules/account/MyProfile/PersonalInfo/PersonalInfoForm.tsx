import React, { useState } from 'react';
import { alpha, Box, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useDropzone } from 'react-dropzone';
import { Form } from 'formik';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Fonts } from '@crema/constants/AppEnums';

const AvatarViewWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  '& .edit-icon': {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
    border: `solid 2px ${theme.palette.background.paper}`,
    backgroundColor: alpha(theme.palette.primary.main, 0.7),
    color: theme.palette.primary.contrastText,
    borderRadius: '50%',
    width: 26,
    height: 26,
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
      fontSize: 16,
    },
  },
  '&.dropzone': {
    outline: 0,
    '&:hover .edit-icon, &:focus .edit-icon': {
      display: 'flex',
    },
  },
}));

type PersonalInfoFormProps = {
  setFieldValue: (field: string, data: any) => void;
  values: any;
};

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  values,
  setFieldValue,
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setFieldValue('photoURL', URL.createObjectURL(acceptedFiles[0]));
    },
  });

  return (
    <Form noValidate autoComplete='off'>

      <Typography
        component='h3'
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 4 },
        }}
      >
        Company Info
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: { xs: 5, lg: 6 },
        }}
      >
        <AvatarViewWrapper {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            <Avatar
              sx={{
                width: { xs: 50, lg: 64 },
                height: { xs: 50, lg: 64 },
                cursor: 'pointer',
              }}
              src={values.photoURL}
            />
            <Box className='edit-icon'>
              <EditIcon />
            </Box>
          </label>
        </AvatarViewWrapper>
        <Box
          sx={{
            ml: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {values.organizationName || 'John Doe'}
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {values.email || 'johndoe@example.com'}
          </Typography>
        </Box>
      </Box>
      <Button
        onClick={() => setEditMode(!isEditMode)}
        color='primary'
        variant='contained'
        sx={{ mb: 3 }}
      >
        {isEditMode ? "Cancel Edit" : <IntlMessages id='common.edit' />}
      </Button>
      <AppGridContainer spacing={4}>
        {isEditMode ? (
          <>

            <Grid item xs={12} md={6} sx={{ mt: 5 }}>
              <AppTextField
                name='organizationName'
                fullWidth
                label="Organization Name"
                defaultValue={values.organizationName || ''}
                onChange={(e) => setFieldValue('organizationName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: 5 }}>
              <AppTextField
                name='address'
                fullWidth
                label={<IntlMessages id='common.address' />}
                defaultValue={values.address || ''}
                onChange={(e) => setFieldValue('address', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name='phone'
                fullWidth
                label={<IntlMessages id='common.phone' />}
                defaultValue={values.phone || ''}
                onChange={(e) => setFieldValue('phone', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name='email'
                fullWidth
                label={<IntlMessages id='common.email' />}
                defaultValue={values.email || ''}
                onChange={(e) => setFieldValue('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name='website'
                fullWidth
                label={<IntlMessages id='common.website' />}
                defaultValue={values.website || ''}
                onChange={(e) => setFieldValue('website', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name='country'
                fullWidth
                label={<IntlMessages id='common.country' />}
                defaultValue={values.country || ''}
                onChange={(e) => setFieldValue('country', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name='currency'
                fullWidth
                label={<IntlMessages id='common.currency' />}
                defaultValue={values.currency || ''}
                onChange={(e) => setFieldValue('currency', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name='decimal'
                fullWidth
                label={<IntlMessages id='common.decimal' />}
                defaultValue={values.decimal || ''}
                onChange={(e) => setFieldValue('decimal', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name='vat'
                fullWidth
                label={<IntlMessages id='common.vat' />}
                defaultValue={values.vat || ''}
                onChange={(e) => setFieldValue('vat', e.target.value)}
              />
            </Grid>
          </>
        ) : (
          <Grid container spacing={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: { xs: 5, lg: 6 },
              ml: 5,
              mt: 5
            }}>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Organization Name:</strong> {values.organizationName || 'Acme Corp'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Address:</strong> {values.address || '123 Main St, Anytown, USA'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Phone:</strong> {values.phone || '+1 234 567 890'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Email:</strong> {values.email || 'contact@acmecorp.com'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Website:</strong> {values.website || 'www.acmecorp.com'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Country:</strong> {values.country || 'USA'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Currency:</strong> {values.currency || 'USD'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Decimal:</strong> {values.decimal || '2'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>VAT:</strong> {values.vat || '10%'}
              </Typography>
            </Grid>
          </Grid>
        )}
        {isEditMode && (
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Button
                sx={{
                  position: 'relative',
                  minWidth: 100,
                }}
                color='primary'
                variant='contained'
                type='submit'
              >
                <IntlMessages id='common.saveChanges' />
              </Button>
            </Box>
          </Grid>
        )}
      </AppGridContainer>
    </Form>
  );
};

// Dummy data
const dummyValues = {
  displayName: 'John Doe',
  email: 'johndoe@example.com',
  organizationName: 'Acme Corp',
  address: '123 Main St, Anytown, USA',
  phone: '+1 234 567 890',
  website: 'www.acmecorp.com',
  country: 'USA',
  currency: 'USD',
  decimal: '2',
  vat: '10%',
};

export default (values, setFieldValue) => (
  <PersonalInfoForm
    setFieldValue={(field, data) => console.log(field, data)}
    values={dummyValues}
  />
);
