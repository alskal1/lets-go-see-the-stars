import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MobileStepper,
  Typography,
} from '@mui/material';

const BuildingDialog = ({ buildingInfos, building, open, setOpen }) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = buildingInfos.length;

  useEffect(() => {
    setActiveStep(0);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      navigate(`/${building}`);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Dialog fullWidth maxWidth="md" open={open}>
      <DialogTitle>
        <Typography
          component="h1"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {buildingInfos[activeStep].title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography
          component="body1"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {buildingInfos[activeStep].description}
        </Typography>
      </DialogContent>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<Button></Button>}
        backButton={<Button></Button>}
      />
      <DialogActions>
        <Button
          variant="outlined"
          sx={{ m: 1, width: '50%' }}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            이전
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ m: 1, width: '50%' }}
          onClick={handleNext}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            {activeStep === maxSteps - 1 ? '입장하기' : '다음'}
          </Typography>
        </Button>
        <Button
          sx={{ position: 'absolute', top: '8px', right: '8px' }}
          onClick={handleClose}
        >
          SKIP
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BuildingDialog;