import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center'
}));

const JustifyBox = styled(FlexBox)(() => ({
    maxWidth: 600,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
}));

const NotFoundRoot = styled(FlexBox)(() => ({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh !important'
}));

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <NotFoundRoot>
            <JustifyBox>
                <Typography variant="h2" gutterBottom>
                    Page not found
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page or login to see your
                    dashboard
                </Typography>
                <Button color="primary" variant="contained" sx={{ textTransform: 'capitalize' }} onClick={() => navigate(-1)}>
                    Back to dashboard
                </Button>
            </JustifyBox>
        </NotFoundRoot>
    );
};

export default NotFound;
