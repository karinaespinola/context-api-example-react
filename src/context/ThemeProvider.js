import React from 'react'

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
    const themes = {
        color: 'white',
        background: 'red'
    }
    const [theme, setTheme] = React.useState(themes);

    React.useEffect(() => {
        if(localStorage.getItem('themeLocal')) {
            const themeLocal = JSON.parse(localStorage.getItem('themeLocal'));
            setTheme(themeLocal);
        }
    }, []);

    const cambioColor = (valor) => {
        console.log(valor);
        setTheme(valor);
        localStorage.setItem('themeLocal', JSON.stringify(valor));
    }

    return (
        <ThemeContext.Provider value={{theme, cambioColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
