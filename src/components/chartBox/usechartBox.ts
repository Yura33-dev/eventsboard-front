import { useEffect, useState } from 'react';
import { IParticipant } from '../../types/participantType';

interface ChartBoxProps {
  parts: IParticipant[];
}

interface ChartBoxState {
  date: string;
  registrations: number;
}

const useChartBox = ({ parts }: ChartBoxProps) => {
  const [chartData, setChartData] = useState<ChartBoxState[]>([]);

  useEffect(() => {
    const data = groupRegistrationsByDay(parts);
    setChartData(data);
  }, [parts]);

  const groupRegistrationsByDay = (participants: IParticipant[]) => {
    const registrationMap: { [date: string]: number } = {};

    participants.forEach((participant) => {
      const date = new Date(participant.createdAt).toLocaleDateString();
      if (registrationMap[date]) {
        registrationMap[date]++;
      } else {
        registrationMap[date] = 1;
      }
    });

    const data = Object.keys(registrationMap).map((date) => ({
      date,
      registrations: registrationMap[date],
    }));
    return data;
  };
  return { chartData };
};

export default useChartBox;
