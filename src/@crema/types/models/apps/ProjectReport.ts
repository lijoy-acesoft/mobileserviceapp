export type ProjectReportType = {
  id: number;
  activity: string;
  employee: string;
  per_hour_cost: number;
  actual_hours: number;
  actual_total_cost: number;
  planned_hours: number;
  planned_total_cost: number;
  cost_variance: number;
};
