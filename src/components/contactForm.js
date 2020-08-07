import React, { useState }  from "react"
import axios from "axios";
// import Link from "../components/link"
import { Grid, Button, FormControl, Input, InputLabel, Typography, FormGroup, FormControlLabel, Checkbox } from "@material-ui/core"

const ContactFormTut = () => {
    
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      form.reset()
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/e6fbff81-ae54-403c-9dc0-14bbd1571009",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  const [ pronouns, setPronouns ] = useState({
    they: true,
    she: false,
    he: false
  })

  const handlePronounsChange = (event) => {
    setPronouns({ ...pronouns, [event.target.name]: event.target.checked })
  }

  const { they, she, he } = pronouns
  const error = [they, she, he].filter((v) => v).length !== 2
  
  return (
    <React.Fragment>
      <Typography variant="h3">Contact</Typography>
      <form onSubmit={handleOnSubmit} action="https://getform.io/f/e6fbff81-ae54-403c-9dc0-14bbd1571009">
        <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={2}>
          <Grid item lg={9} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="name-input">What do you like to be called?</InputLabel>
              <Input id="form-name" name="name" type="text" required aria-describedby="nameHelp" autoComplete/>
            </FormControl>              
          </Grid>
          <Grid item lg={9} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="email-input">What's the best email to reach you on?</InputLabel>
              <Input id="form-email" name="email" type="email" required aria-describedby="emailHelp" autoComplete/>
            </FormControl>              
          </Grid>
          
          <Grid item lg={9} xs={12}> 
          <InputLabel component="legend">What are your pronouns?</InputLabel>

            <FormControl component="fieldset" required error={error}>
              <FormGroup>
                <Grid container direction="row">
                  <FormControlLabel
                    control={<Checkbox onChange={handlePronounsChange} name="they" />}
                    label="they/them"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handlePronounsChange} name="she" />}
                    label="she/her"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handlePronounsChange} name="he" />}
                    label="he/him"
                  />
                </Grid>
              </FormGroup>
            </FormControl>
          </Grid>  
          <Grid item lg={9} xs={12}>            
            <FormControl fullWidth>
              <InputLabel htmlFor="email-message">Tell me how I can help you:</InputLabel>
              <Input id="form-message" name="message" type="text" multiline required aria-describedby="theMessage" autoComplete/>
            </FormControl>              
          </Grid>
          <Grid item lg={9} xs={12}>
            <FormControl fullWidth>
              <Button>
                <Input id="form-submit" type="submit" value="HIT&nbsp;SEND" disableUnderline aria-describedby="submit your message" disabled={serverState.submitting}/>
              </Button>
            </FormControl>
          </Grid>
          <Grid item lg={9} xs={12}>
            <Typography variant="h5">
              {serverState.status && (
                  <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                  </p>
              )}
            </Typography>
          </Grid>
        </Grid>
      </form>
         
  </React.Fragment>
     
  )
}

export default ContactFormTut;
