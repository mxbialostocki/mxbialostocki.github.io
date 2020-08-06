import React from "react"
import { Grid, Typography, Button, TextField, FormControl } from "@material-ui/core"

import useStyles from "../../plugins/custom-mui-theme/theme/custom"

import Link from '../components/link'

const ContactForm = () => {

  const { primary } = useStyles()

  return (
    <React.Fragment>
      <form method="post" action="https://getform.io/f/e6fbff81-ae54-403c-9dc0-14bbd1571009">
        <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={2}>
        
          <Grid item lg={9} xs={12}>
            <label id="form-user">
              <FormControl fullWidth>
                <Typography variant="subtitle1">What's your name?</Typography>
                <TextField id="form-user" autoComplete defaultValue="" />
              </FormControl>              
            </label>
          </Grid>
          <Grid item lg={9} xs={12}>
            <label id="form-email">
              <FormControl fullWidth>
                <Typography variant="subtitle1">What's your email address?</Typography>
                <TextField id="form-email" autoComplete defaultValue="" />
              </FormControl>              
            </label>
          </Grid>
          <Grid item lg={9} xs={12}>
            <label id="form-content">
              <FormControl fullWidth>
                <Typography variant="subtitle1">Tell me how I can help you:</Typography>
                <TextField id="form-content" variant="outlined" multiline rows={9} defaultValue="" />
              </FormControl>              
            </label>
          </Grid>
          <Grid item lg={9} xs={12}>
            <label id="form-submit">
              <FormControl fullWidth>
                <Button type="submit" xs={6}>hit send</Button>
              </FormControl>              
            </label>
          </Grid>

        </Grid>
      </form>
    </React.Fragment>
  )
}

export default ContactForm
