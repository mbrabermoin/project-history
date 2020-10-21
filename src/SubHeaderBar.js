import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import { FilterList } from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 250,
        height: 35,
        marginTop: 10,
        marginLeft: 10,
        border: "solid",
        borderWidth: 1,
        borderColor: grey[900],
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        color: grey[300],
    },
    divider: {
        height: 28,
        margin: 4,
    },
    button: {
        background: grey[800],
        color: 'white',
        float: "right",
        marginLeft: 1300,
        fontFamily: "Arial",
        textTransform: "none",
        height: 50,
    },
    button2: {
        background: grey[800],
        color: 'white',
        float: "right",
        marginLeft: 10,
        textTransform: "none",
        height: 50,
    },
    subheader: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 1880,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
    },
    modal: {
        width: 600,
        marginLeft: 1225,
        marginTop: 130,
    },
    mainPanel: {
        backgroundColor: 'white',
        height: 500,
    },
    subtitles: {
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 18,
    },
    labels: {
        fontWeight: "bold",
        fontSize: 14,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <div className={classes.subheader}>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Project Name"
                    inputProps={{ 'aria-label': 'Project Name' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Button variant="contained" className={classes.button} startIcon={<AddIcon />}>
                Add New
      </Button>
            <Button variant="contained" className={classes.button2} startIcon={<FilterList />} onClick={handleOpen}>
                More Filters
      </Button>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Paper>
                            <div className={classes.mainPanel}>
                                <div>
                                    <h3 id="transition-modal-title">Advanced Filters:</h3>
                                </div>
                                <div id="containerCheckButtons-DatePickers">
                                    <Typography className={classes.subtitles}>Date</Typography>
                                    <FormGroup class="checkboxes">
                                        <FormControlLabel
                                            control={<Checkbox icon={<RadioButtonUncheckedIcon fontSize="small" />} checkedIcon={<RadioButtonCheckedIcon fontSize="small" />} name="checkedH" onChange={handleChange} />}
                                            label={<Typography className={classes.labels}>Starting From</Typography>}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox icon={<RadioButtonUncheckedIcon fontSize="small" />} checkedIcon={<RadioButtonCheckedIcon fontSize="small" />} name="checkedH" onChange={handleChange} />}
                                            label={<Typography className={classes.labels}>Range</Typography>}
                                        />
                                    </FormGroup>
                                    <div>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">
                                                <KeyboardDatePicker
                                                    disableToolbar
                                                    size="small"
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    label="From"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                                <KeyboardDatePicker
                                                    size="small"
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    label="To"
                                                    format="MM/dd/yyyy"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </div>
                                <div id="containerCheckButtons">
                                    <Typography className={classes.subtitles}>Status:</Typography>
                                </div>
                            </div>
                        </Paper>
                    </Fade>
                </Modal>
            </div>
        </div>

    );
}