import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const SnackBar = (props) => {

    return (
        <Fragment>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                open={props.status}
                autoHideDuration={6000}
                onClose={props.clickClose}
                message={props.message}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={props.clickClose}>
                            UNDO
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={props.clickClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </Fragment>
    )
}

export default SnackBar;