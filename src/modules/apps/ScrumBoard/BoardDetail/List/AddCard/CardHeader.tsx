import React from 'react';
import Box from '@mui/material/Box';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useDropzone } from 'react-dropzone';
import { Fonts } from '@crema/constants/AppEnums';
import IconButton from '@mui/material/IconButton';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';

type Props = {
  onClickDeleteIcon: (event: React.MouseEvent<HTMLElement>) => void;
  onAddAttachments: (files: Array<any>) => void;
  onCloseAddCard: () => void;
};

const CardHeader = (props: Props) => {
  const { onClickDeleteIcon, onCloseAddCard, onAddAttachments } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) => {
        return {
          id: generateRandomUniqueNumber(),
          file,
          preview: URL.createObjectURL(file),
        };
      });
      onAddAttachments(files);
    },
  });

  return (
    <Box
      sx={{
        py: 2,
        px: { xs: 5, lg: 8, xl: 10 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Box
        component='h5'
        sx={{
          pr: 2,
          fontWeight: Fonts.BOLD,
          fontSize: 16,
        }}
      >
        <IntlMessages id='scrumboard.board' />
      </Box>
      <Box
        sx={{
          pl: 2,
          mr: { xs: -2, lg: -3, xl: -4 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            onClick={onClickDeleteIcon}
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            onClick={() => onCloseAddCard()}
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CardHeader;
