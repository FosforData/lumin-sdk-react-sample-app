// material-ui
import { Container, Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
    return (
        <Container maxWidth="xl">
            <Stack direction={'row'} justifyContent={'center'} spacing={2} textAlign={'center'}>
                <Typography variant="subtitle2" color="secondary" component="span">
                    &copy; Lumin SDK By&nbsp;
                    <Typography component={Link} variant="subtitle2" href="https://www.fosfor.com/lumin/" target="_blank" underline="hover">
                        Fosfor
                    </Typography>
                </Typography>
            </Stack>
        </Container>
    );
};

export default AuthFooter;
