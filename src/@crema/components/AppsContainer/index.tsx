import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import AppInfoView from "../AppInfoView";
import {
  Box,
  Grid,
  Slide,
  Theme,
  Zoom,
  Collapse,
  Typography,
} from "@mui/material";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { FaPlus } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SiGooglesheets } from "react-icons/si";
import { BsFilePdfFill } from "react-icons/bs";
import { IoFilterCircleSharp } from "react-icons/io5";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

import AppSidebar from "./AppSidebar";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import { Fonts, NavStyle } from "@crema/constants/AppEnums";
import AppContainerWrapper from "./AppContainerWrapper";
import { SxProps } from "@mui/system";
import { useLocation } from "react-router-dom";

type AppsContainerProps = {
  title: string | ReactNode;
  subtitle?: string;
  isbutton?: boolean;
  buttontext?: string;
  onButtonClick?: () => void;
  isbutton2?: boolean;
  button2text?: string;
  onButton2Click?: () => void;
  sidebarContent?: ReactNode;
  fullView?: boolean;
  children: ReactNode;
  sxStyle?: SxProps<Theme>;
  cardStyle?: CSSProperties;
};

const AppsContainer: React.FC<AppsContainerProps> = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };

  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  const { footer } = useLayoutContext();
  const { navStyle } = useLayoutContext();
  const {
    title,
    subtitle,
    sidebarContent,
    fullView,
    children,
    isbutton,
    buttontext,
    onButtonClick,
    onButton2Click,
  } = props;

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        margin: -4,
        padding: 4,
        ...props.sxStyle,
      }}
    >
      <Box
        sx={{
          marginTop: fullView ? 0 : -4,
          display: "flex",
          alignItems: "center",
          mb: {
            xs: fullView ? 4 : 2,
            lg: 4,
          },
          mt: {
            xs: fullView ? 0 : -4,
            lg: 0,
          },
        }}
      >
        {fullView ? null : (
          <Hidden lgUp>
            <IconButton
              edge="start"
              sx={{
                marginRight: (theme) => theme.spacing(2),
              }}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleNavCollapsed}
              size="large"
            >
              <MenuIcon
                sx={{
                  width: 35,
                  height: 35,
                }}
              />
            </IconButton>
          </Hidden>
        )}
        <Zoom in style={{ transitionDelay: "300ms" }}>
          <Box
            component="h2"
            sx={{
              width: "100%",
              fontSize: 16,
              color: "text.primary",
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <Grid item xs>
              {subtitle && (
                <Grid sx={{ display: "flex" }}>
                  <Typography sx={{ marginBlock: "auto" }}>
                    {subtitle}
                  </Typography>
                  {/* <IconButton onClick={() => navigate("/apps/projects")}>
                    <IoArrowBackCircleOutline />
                  </IconButton> */}
                </Grid>
              )}
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs>
                {title}
              </Grid>
              {isbutton && (
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2,
                  }}
                >
                  {/* <Collapse
                    in={showButtons}
                    orientation="horizontal"
                    timeout="auto"
                    unmountOnExit
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={onButton2Click}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <IoFilterCircleSharp
                        size={22}
                        style={{
                          color: "white",
                          marginRight: "5px",
                        }}
                      />
                    </Button>
                  </Collapse>
                  <Collapse
                    in={showButtons}
                    orientation="horizontal"
                    timeout="auto"
                    unmountOnExit
                  >
                    <Button
                      variant="contained"
                      onClick={onButtonClick}
                      size="large"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <SiGooglesheets
                        size={18}
                        style={{
                          color: "white",
                          marginRight: "5px",
                        }}
                      />
                    </Button>
                  </Collapse>
                  <Collapse
                    in={showButtons}
                    orientation="horizontal"
                    timeout="auto"
                    unmountOnExit
                  >
                    <Button
                      variant="contained"
                      onClick={onButtonClick}
                      size="large"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <BsFilePdfFill
                        size={18}
                        style={{
                          color: "white",
                          marginRight: "5px",
                        }}
                      />
                    </Button>
                  </Collapse>
                  {!showButtons && (
                    <IconButton onClick={() => setShowButtons(!showButtons)}>
                      <FaCircleChevronLeft color="#0a8fdc" />
                    </IconButton>
                  )}
                  {showButtons && (
                    <IconButton onClick={() => setShowButtons(!showButtons)}>
                      <FaCircleChevronRight color="#0a8fdc" />
                    </IconButton>
                  )} */}
                  <Button
                    variant="contained"
                    onClick={onButtonClick}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaPlus
                      style={{
                        color: "white",
                        marginRight: "5px",
                      }}
                    />
                    {buttontext}
                  </Button>
                </Grid>
              )}
            </Grid>
          </Box>
        </Zoom>
      </Box>

      <AppContainerWrapper navStyle={navStyle as NavStyle} footer={footer}>
        {sidebarContent ? (
          <AppSidebar
            isAppDrawerOpen={isNavCollapsed}
            footer={footer}
            fullView={fullView}
            sidebarContent={sidebarContent}
            toggleNavCollapsed={toggleNavCollapsed}
          />
        ) : null}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: {
              xs: "100%",
            },
          }}
        >
          <Slide direction="left" in mountOnEnter unmountOnExit>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                ...props.cardStyle,
              }}
            >
              {children}
            </Card>
          </Slide>
          <AppInfoView />
        </Box>
      </AppContainerWrapper>
    </Box>
  );
};

export default AppsContainer;
