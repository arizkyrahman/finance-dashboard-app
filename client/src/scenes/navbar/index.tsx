import { useState } from "react"
import { Link } from "react-router-dom"
import { Box, Typography,  } from "@mui/material"
import { useTheme } from "@emotion/react"

type Props = {}

const Navbar = (props: Props) => {
  const { pallete } = useTheme()
  return (
  <Box 
    display="flex" 
    justifyContent="space-between" 
    alignItems="center"
  ></Box>
  )
}

export default Navbar