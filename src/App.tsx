// App.tsx
import { FC } from 'react';
import AppRoutes from './AppRoutes';
import GlobalStyle from './GlobalStyle';

const App: FC = () => {
    return (
        <>
            <GlobalStyle/>
            <AppRoutes />
        </>
    );
};

export default App;

