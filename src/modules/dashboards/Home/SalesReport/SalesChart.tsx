import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { useTheme } from "@mui/material";

const data = [
  {
    days: "P228",
    Occupied: 14000,
    Empty: 2400,
  },
  {
    days: "P226",
    Occupied: 22000,
    Empty: 14398,
  },
  {
    days: "Head Office",
    Occupied: 9800,
    Empty: 2000,
  },
  {
    days: "BIOLITEC",
    Occupied: 11000,
    Empty: 12000,
  },
  {
    days: "Central Store Sharjah",
    Occupied: 10000,
    Empty: 4000,
  },
  {
    days: "P230",
    Occupied: 12780,
    Empty: 10900,
  },
  {
    days: "P229",
    Occupied: 12000,
    Empty: 4300,
  },
  {
    days: "Central Store Dubai",
    Occupied: 12000,
    Empty: 14900,
  },
  {
    days: "Labor Camp",
    Occupied: 18000,
    Empty: 1398,
  },
  {
    days: "P227",
    Occupied: 17000,
    Empty: 9800,
  },
  {
    days: "11th",
    Occupied: 12780,
    Empty: 3908,
  },
  {
    days: "12th",
    Occupied: 20900,
    Empty: 12800,
  },
  {
    days: "13th",
    Occupied: 17000,
    Empty: 4900,
  },
  {
    days: "14th",
    Occupied: 7000,
    Empty: 4000,
  },
  {
    days: "15th",
    Occupied: 17000,
    Empty: 9800,
  },
];

const SalesChart = () => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 1"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="days" />
        {/*<YAxis />*/}
        <Tooltip
          labelStyle={{ color: "black" }}
          contentStyle={{
            borderRadius: 12,
            borderColor: "#31354188",
            background: "#FFFFFFCA",
          }}
        />
        <Bar
          stackId="a"
          dataKey="Empty"
          fill={theme.palette.secondary.main}
          barSize={8}
        />
        <Bar
          stackId="a"
          dataKey="Occupied"
          fill={theme.palette.primary.main}
          // margin={{bottom: -15}}
          barSize={8}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
