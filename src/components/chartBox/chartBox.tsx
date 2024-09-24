import { Box, Typography } from '@mui/material';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IParticipant } from '../../types/participantType';
import useChartBox from './usechartBox';

interface IChartBoxProps {
  parts: IParticipant[];
  isLoading: boolean;
}

const ChartBox = ({ parts, isLoading }: IChartBoxProps) => {
  const { chartData } = useChartBox({ parts });

  if (chartData.length === 0) {
    return (
      <Box>
        {!isLoading && (
          <Typography component="h4" variant="h4" textAlign="center" mt={4}>
            No available data to chart display
          </Typography>
        )}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 3,
        mt: 4,
      }}
    >
      <Typography component="h4" variant="h4">
        Number of registrations for this event by day
      </Typography>
      <ResponsiveContainer
        width="100%"
        height={300}
        style={{ maxWidth: '700px' }}
      >
        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="registrations" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ChartBox;
