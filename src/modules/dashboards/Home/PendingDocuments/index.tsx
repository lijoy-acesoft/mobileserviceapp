import React from "react";
import AppCard from "@crema/components/AppCard";
import AppSelect from "@crema/components/AppSelect";
import { useIntl } from "react-intl";
import ActivityGraph from "./ActivityGraph";
import { YourActivityType } from "@crema/types/models/dashboards/HealthCare";
import { Height } from "@mui/icons-material";

type Props = {
  data: YourActivityType[];
};

const YourActivity = ({ data }: Props) => {
  const handleChange = (value: string) => {
    console.log("value", value);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      title={"Pending Documents For Approval"}
      sxStyle={{
        height: "100%",
      }}
    >
      <ActivityGraph data={data} />
    </AppCard>
  );
};

export default YourActivity;
