import { ChangeEvent, useState } from 'react';
import { IParticipant } from '../../types/participantType';

interface UseFilterHookProps {
  parts: IParticipant[];
}

const UseFilterHook = ({ parts }: UseFilterHookProps) => {
  const [searchString, setSearchString] = useState('');

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const filteredItems = parts.filter((participant) => {
    const searchLower = searchString.toLowerCase();
    return (
      searchString === '' ||
      participant.fullName.toLowerCase().includes(searchLower) ||
      participant.email.toLowerCase().includes(searchLower)
    );
  });

  return { searchString, handleFilter, filteredItems };
};

export default UseFilterHook;
