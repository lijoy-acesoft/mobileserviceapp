import React, { ReactNode } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import IntlMessages from "@crema/helpers/IntlMessages";
import { Fonts } from "@crema/constants/AppEnums";

type CustomListEmptyResult = {
  title?: string | ReactNode;
  loading?: boolean;
  loader?: boolean;
  placeholder?: ReactNode;
  content?: string;
};

const CustomListEmptyResult: React.FC<CustomListEmptyResult> = ({
  loader,
  placeholder,
  loading,
  title,
  content,
}) => {
  if (loading || loader) {
    return (
      <React.Fragment>
        {placeholder ? (
          placeholder
        ) : (
          <Box
            sx={{
              flexDirection: "row",
              minHeight: "50px",
              height: "100%",
              flex: 1,
              display: "flex",
              p: 5,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "transparent",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <CircularProgress size={16} />
            <Box component="span" sx={{ ml: 2 }}>
              Loading...
            </Box>
          </Box>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <Box
        sx={{
          flexDirection: "column",
          minHeight: "150px",
          height: "100%",
          flex: 1,
          display: "flex",
          p: 5,
          justifyContent: "center",
          alignItems: "center",
          border: 1,
          borderColor: "transparent",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        {title ? (
          <Typography
            sx={{
              fontSize: 14,
              color: (theme) => theme.palette.text.secondary,
              fontWeight: Fonts.MEDIUM,
              mb: 2,
            }}
            component="h4"
            variant="h4"
          >
            {title}
          </Typography>
        ) : null}
        <Typography
          sx={{
            fontSize: 14,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          {content}
        </Typography>
      </Box>
    );
  }
};
CustomListEmptyResult.defaultProps = {
  title: <IntlMessages id="common.noRecordFound" />,
};

export default CustomListEmptyResult;
