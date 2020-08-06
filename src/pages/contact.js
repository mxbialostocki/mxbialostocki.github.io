import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'

const ContactPage = () => {
  const { primary } = useStyles()
  return (
    <React.Fragment>
      <Layout>
        <SEO title='Contact'/>
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5">
              There is a range of ways we can work together. Drop me a note to book dev work or a photography contract, or give me a call on <span className={primary}>+64 0274 658 977</span>.
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Layout>
    </React.Fragment>
  )
}

export default ContactPage
