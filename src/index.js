import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

//lumin-sdk import
import { LuminSDKProvider } from '@lumin/lumin-sdk-react';

// project import
import App from './App';
import { store } from 'store';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <StrictMode>
        <LuminSDKProvider>
            <ReduxProvider store={store}>
                <BrowserRouter basename="/">
                    <App />
                </BrowserRouter>
            </ReduxProvider>
        </LuminSDKProvider>
    </StrictMode>
);
