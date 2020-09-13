import React, {Fragment} from 'react'
import {Typography, Grid, TextField, FormControlLabel, Checkbox} from '@material-ui/core'
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";
import {makeStyles} from "@material-ui/core/styles";
import { useDispatch, useSelector } from 'react-redux';
import { getServiceCostByProvider } from '../../redux/Providers/providers-management';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Details = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const provider = useSelector(store => store.providers.provider)

    const handleServicesChange = () => (event, newExpanded) => {
       if (newExpanded){
           dispatch(getServiceCostByProvider(provider.id))
       }
       else {console.log("Cerrando");}

    }
    return provider ? (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Detalles Proveedor
            </Typography>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography className={classes.heading}>Perfil</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="businessName"
                                name="businessName" wev
                                label="Business Name"
                                fullWidth
                                autoComplete="given-name"
                                value={provider.businessName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="rut"
                                name="rut"
                                label="RUT"
                                fullWidth
                                autoComplete="family-name"
                                value={provider.rut}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="user"
                                name="user"
                                label="User"
                                fullWidth
                                autoComplete="given-name"
                                value={provider.user.user}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="family-name"
                                value={provider.user.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="shipping address-line2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                value={provider.user.userProfile.city}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="state" name="state" label="State/Province/Region" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                value={provider.user.userProfile.country}
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleServicesChange()}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography className={classes.heading}>Servicios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    ) : null
}

export default Details
