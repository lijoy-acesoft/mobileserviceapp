import { useEffect } from "react";
import { Grid } from "@mui/material";
import AppGridContainer from "@crema/components/AppGridContainer";
import AppAnimate from "@crema/components/AppAnimate";
import AppComponentCard from "@crema/components/AppComponentCard";
import GeneralStats from "./GeneralStats";

import SiteWiseAssetCount from "./SiteWiseAssetCount/TinyBarChart";
import BuildingWiseAssetCount from "./BuildingWiseAssetCount/TinyBarChart";

import { onGetAnalyticsData } from "../../../toolkit/actions";
import { useAppDispatch, useAppSelector } from "../../../toolkit/hooks";
import AppLoader from "@crema/components/AppLoader";

const Analytics = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onGetAnalyticsData());
  }, [dispatch]);

  const { analyticsData } = useAppSelector(({ dashboard }) => dashboard);

  return analyticsData ? (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppGridContainer>
        <Grid item xs={12} lg={12}>
          <AppGridContainer>
            <Grid item xs={12} sm={3}>
              <GeneralStats
                stats={{
                  id: 1,
                  title: "Total Projects",
                  count: "42",
                  new: "New $50",
                  badgeColor: "#0A8FDC",
                  bgcolor: "#E7F4FB",
                  icon: "BiBasket",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <GeneralStats
                stats={{
                  id: 2,
                  title: "Planned Annual Cost",
                  count: "AED 3901",
                  new: "New $50",
                  badgeColor: "#0A8FDC",
                  bgcolor: "#E7F4FB",
                  icon: "FcGraduationCap",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <GeneralStats
                stats={{
                  id: 3,
                  title: "Total Annual Cost",
                  count: "AED 2309",
                  new: "New $50",
                  badgeColor: "#0A8FDC",
                  bgcolor: "#E7F4FB",
                  icon: "GiBookshelf",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <GeneralStats
                stats={{
                  id: 4,
                  title: "Cost Variance",
                  count: "AED 3901",
                  new: "New $50",
                  badgeColor: "#0A8FDC",
                  bgcolor: "#E7F4FB",
                  icon: "metricsIcons/revenue.svg",
                }}
              />
            </Grid>
          </AppGridContainer>

          <AppGridContainer sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <AppComponentCard title="Admin" component={SiteWiseAssetCount} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppComponentCard
                title="CNC"
                component={BuildingWiseAssetCount}
              />
            </Grid>
          </AppGridContainer>
          <AppGridContainer sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <AppComponentCard
                title="Assembly"
                component={SiteWiseAssetCount}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppComponentCard
                title="Design"
                component={BuildingWiseAssetCount}
              />
            </Grid>
          </AppGridContainer>
        </Grid>
      </AppGridContainer>
    </AppAnimate>
  ) : (
    <AppLoader />
  );
};

export default Analytics;
