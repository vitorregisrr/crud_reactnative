import React from 'react';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';

import Navigation from './src/components/Navigation';

const App = () => {
    return (
        <PaperProvider>
            <Appbar.Header>
                <Appbar.Content
                    title="CRUD de Carros"
                    subtitle="Projeto básico de estudos de aplicação serverless"/>
            </Appbar.Header>
            <Navigation></Navigation>
        </PaperProvider>
    )
}

export default App;