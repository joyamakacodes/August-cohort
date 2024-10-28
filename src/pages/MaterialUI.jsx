import { Button, Switch } from "@mui/material";
import './material.css'
import { BarChart } from '@mui/x-charts/BarChart';

const MaterialUI = () => {
 const style={
  background: 'green'
 }

 
 
  return (
    <div>
      <Button variant="contained" style={style}>Contained</Button>
      <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={190}
      width={500}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    <Switch defaultChecked  color="success"/>


    </div>

  );
}

export default MaterialUI;
