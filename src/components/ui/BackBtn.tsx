import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

interface BackBtnProps {
  text: string;
}

const BackBtn = ({ text }: BackBtnProps) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Button
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackOutlinedIcon />
        <Typography component="span" fontSize="14px">
          {text}
        </Typography>
      </Button>
    </Container>
  );
};

export default BackBtn;
