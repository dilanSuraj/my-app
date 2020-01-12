import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OrderTable from '../../subcomponents/_table/table';
import {orderPage_useStyles} from '../../../styles/styles';

export default function MaterialTableDemo() {
    const classes = orderPage_useStyles();
 
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <OrderTable/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}