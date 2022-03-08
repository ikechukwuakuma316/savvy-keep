import React, {Fragment} from 'react';
import './App.css';
import MainLayout from "./layouts/MainLayout";
import NewNote from "./components/NewNote";
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import TextField from "@mui/material/TextField";

function App() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <MainLayout>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth
                    maxWidth="md"
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <DialogContent>
                        <DialogContentText>
                            <NewNote/>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
                <section
                    onClick={() => setOpen(true)}
                    style={{display: "flex", justifyContent: "center", marginTop: 30}}>
                    <TextField disabled id="outlined-basic" label="Write something .." variant="outlined"/>
                </section>
            </MainLayout>
        </Fragment>
    );
}

export default App;
