import React from "react"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"

import theme from "./theme"

// const useStyles = makeStyles((theme) => ({
//   root: {
//     [theme.breakpoints.down('sm')]: {
//       backgroundColor: theme.palette.secondary.main,
//     },
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: theme.palette.primary.main,
//     },
//     [theme.breakpoints.up('lg')]: {
//       backgroundColor: green[500],
//     },
//   },
//   viewWidthWrapper: {
//     [theme.breakpoints.down('sm')]: {
//       maxWidth: '90vw'
//     }
//   }
// }));

export const wrapRootElement = ({ element }) => {
  console.info(`theme`, theme)
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}