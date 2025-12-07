import React, { useEffect } from 'react'
import './App.css'
import Card from './component/Card'
import ThemeButton from './component/ThemeButton'
import useTheme, { ThemeProvider } from './context/Theme'

function App() {

    const [themeMode, setThemeMode] = React.useState("light");

    const lightTheme = () => {
        setThemeMode("light");
    };
    const darkTheme = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        if (themeMode === "dark") {
            document.documentElement.classList.remove("light"); 
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeButton />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
        </div>
    </ThemeProvider>
  )
}

export default App
