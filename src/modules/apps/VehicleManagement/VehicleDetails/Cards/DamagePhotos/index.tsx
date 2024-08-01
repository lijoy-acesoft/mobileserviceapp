import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppCard from "@crema/components/AppCard";
import AppGrid from "@crema/components/AppGrid";
import AppMediaViewer from "@crema/components/AppMediaViewer";
import { Fonts } from "@crema/constants/AppEnums";
import clsx from "clsx";
import { styled } from "@mui/material/styles";

const StyledImage = styled("img")(({ theme }: any) => ({
  borderRadius: theme.cardRadius,
  display: "block",
  width: "100%",
  cursor: "pointer",
}));

interface SlideBasicProps {}

const DamagePhotos: React.FC<SlideBasicProps> = () => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  let slideBasic = [
    {
      id: 3,
      url: "/assets/images/slick-slider/carousel-5.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },
    {
      id: 4,
      url: "/assets/images/slick-slider/carousel-3.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },

    {
      id: 9,
      url: "/assets/images/slick-slider/carousel-6.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },
    {
      id: 2,
      url: "/assets/images/slick-slider/carousel-2.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },
    {
      id: 1,
      url: "/assets/images/slick-slider/carousel-1.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },

    {
      id: 6,
      url: "/assets/images/slick-slider/carousel-1.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },
    {
      id: 5,
      url: "/assets/images/slick-slider/carousel-6.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },
    {
      id: 8,
      url: "/assets/images/slick-slider/carousel-3.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },

    {
      id: 7,
      url: "/assets/images/slick-slider/carousel-5.jpg",
      title: "Slide Basic",
      mime_type: "image/*",
    },
  ];
  return (
    <AppCard>
      <Box fontSize={16} fontWeight={Fonts.BOLD} marginBottom={3}>
        Damage Photos
      </Box>
      <AppGrid
        data={slideBasic}
        column={3}
        itemPadding={4}
        responsive={{
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        renderRow={(photo, index) => (
          <StyledImage
            onClick={() => setIndex(index)}
            className={clsx("card-hover")}
            key={index}
            src={photo.url}
            alt="user"
          />
        )}
      />
      <AppMediaViewer
        index={index}
        medias={slideBasic.map((data) => {
          return {
            url: data.url,
            mime_type: "image/*",
          };
        })}
        onClose={onClose}
      />
    </AppCard>
  );
};

export default DamagePhotos;
