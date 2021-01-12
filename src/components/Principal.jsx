import React from 'react';
import {ThemeContext} from '../context/ThemeProvider';

const Principal = () => {
    const {theme} = React.useContext(ThemeContext);

    return (
        <div style={{
            background: theme.background,
            color: theme.color
        }}>
            <h1>Contenido del website</h1>
        </div>
    )
}

export default Principal
