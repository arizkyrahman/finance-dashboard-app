import { useMemo } from "react"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" heigiht="100%" padding="1rem 2rem 4rem 2rem">
          <Routes>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            <Route path="/" element={<div>dashboard page</div>} />
            <Route path="/predictions" element={<div>predictions page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  </div>
}

export default App
