import React, { ReactNode } from "react";

import { Box } from "@mui/material";

type AppsHeaderProps = {
  children: ReactNode;
};

const AppsHeaderLight: React.FC<AppsHeaderProps> = ({ children }) => {
  return (
    <Box
      sx={{
        height: 60,
        display: "flex",
        alignItems: "center",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
      className="apps-header"
    >
      {children}
    </Box>
  );
};

export default AppsHeaderLight;
