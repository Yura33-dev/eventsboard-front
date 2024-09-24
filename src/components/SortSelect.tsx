import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface ISortSelectProps {
  sortBy: string;
  handleSortChange: (event: SelectChangeEvent) => void;
}

const SortSelect = ({ sortBy, handleSortChange }: ISortSelectProps) => {
  return (
    <Box>
      <InputLabel id="sort-label">Sort by</InputLabel>
      <Select
        labelId="sort-label"
        id="sort-select"
        value={sortBy}
        onChange={handleSortChange}
        label="Sort by"
        sx={{ minWidth: '131px' }}
      >
        <MenuItem value={'date'}>Nearest first</MenuItem>
        <MenuItem value={'name'}>Name</MenuItem>
        <MenuItem value={'promoter'}>Organizer</MenuItem>
      </Select>
    </Box>
  );
};

export default SortSelect;
