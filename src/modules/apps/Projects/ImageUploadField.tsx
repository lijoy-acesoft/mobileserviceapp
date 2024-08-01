import React, { useState, useRef } from "react";
import { Box, Button, Typography, Card, CardMedia, Dialog, DialogContent, IconButton } from "@mui/material";
import { PhotoCamera, Close as CloseIcon } from "@mui/icons-material";

const ImageUploadField = ({ label, name, setFieldValue, preview, setPreview }) => {
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
    setFieldValue(name, file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
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

  return (
    <Box sx={{ mb: 2 }}>
      <Card variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', width: 400 }}>
        {preview ? (
          <CardMedia
            component="img"
            sx={{ width: 250, height: 230, objectFit: 'cover', borderRadius: 1, cursor: 'pointer' }}
            image={preview}
            alt="Preview"
            onClick={handleImageClick}
          />
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', width: 250, height: 240, border: '1px dashed gray', borderRadius: 1, justifyContent: 'center' }}>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
              No image selected
            </Typography>
          </Box>
        )}
        <input
          type="file"
          name={name}
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <Button
          variant="contained"
          component="span"
          startIcon={<PhotoCamera />}
          onClick={handleClick}
          sx={{ ml: 2 }}
        >
          Upload
        </Button>
      </Card>
      {fileName && (
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {fileName}
        </Typography>
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent sx={{ position: 'relative' }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <img src={preview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ImageUploadField;
