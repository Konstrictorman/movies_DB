import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Grid, IconButton, MenuItem, Modal, Select, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import esLocale from "date-fns/locale/es";

export const ActionModal = ({
	action,
	open,
	handleAction,
	handleClose,
	movie,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const [value, setValue] = useState(null);

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="modalWrapper"
				//sx={{overflowY: 'scroll'}} disableScrollLock={false}
			>
				<Box className="modalBox">
					<div className="modalHeader">
						<div className="right"></div>

						<IconButton className="right" onClick={handleClose}>
							<CloseIcon sx={{ color: "white" }} />
						</IconButton>
					</div>
					<span className="modalTitle">{action} MOVIE</span>

					<div className="modalFormContainer">
						<form onSubmit={handleSubmit}>
							<Grid container spacing={4}>
								<Grid item xs={8}>
									<div className="modalItem">
										<label className="modalLabel">TITLE</label>
										<TextField
											id="title"
											type="text"
											name="title"
											size="normal"
											className="modalInput"
											inputProps={{
												style: {
													color: "white",
													lineHeight: "24px",
													mixBlendMode: "normal",
													opacity: 0.3,
													fontWeight: 400,
													fontSize: "20px",
													fontFamily: "Montserrat",
												},
											}}
										/>
									</div>
								</Grid>

								<Grid item xs={4}>
									<div className="modalItem">
										<label className="modalLabel">RELEASE DATE</label>
										<LocalizationProvider
											dateAdapter={AdapterDateFns}
											adapterLocale={esLocale}
										>
											<DesktopDatePicker
												value={value}
												//minDate={dayjs('2017-01-01')}
												onChange={(newValue) => {
													setValue(newValue);
												}}
												renderInput={(params) => (
													<TextField {...params} 
                                       id="releaseDate"
                                       type="text"
                                       name="releaseDate"
                                       size="normal"
                                       className="modalInput"
                                       placeholder="Select date"		
                                       inputProps={{
                                          style: {
                                             color: "white",
                                             lineHeight: "24px",
                                             mixBlendMode: "normal",
                                             opacity: 0.3,
                                             fontWeight: 400,
                                             fontSize: "20px",
                                             fontFamily: "Montserrat",
                                          },
                                       }}/>
												)}
											/>											
										</LocalizationProvider>
									</div>
								</Grid>

								<Grid item xs={8}>
									<div className="modalItem">
										<label className="modalLabel">MOVIE URL</label>
										<TextField
											id="url"
											type="text"
											name="url"
											size="normal"
											className="modalInput"
											placeholder="http://"
											inputProps={{
												style: {
													color: "white",
													lineHeight: "24px",
													mixBlendMode: "normal",
													opacity: 0.3,
													fontWeight: 400,
													fontSize: "20px",
													fontFamily: "Montserrat",
												},
											}}
										/>
									</div>
								</Grid>

								<Grid item xs={4}>
									<div className="modalItem">
										<label className="modalLabel">RATING</label>
										<TextField
											id="rating"
											type="text"
											name="rating"
											size="normal"
											className="modalInput"
											inputProps={{
												style: {
													color: "white",
													lineHeight: "24px",
													mixBlendMode: "normal",
													opacity: 0.3,
													fontWeight: 400,
													fontSize: "20px",
													fontFamily: "Montserrat",
												},
											}}
										/>
									</div>
								</Grid>

								<Grid item xs={8}>
									<div className="modalItem">
										<label className="modalLabel">GENRE</label>
										<Select
											id="genre"
											type="text"
											name="genre"
											size="normal"
											className="modalInput"
                                 value={value}
                                 onChange={()=>{}}
                                 placeholder="Select Genre"
                                 inputProps={{

                                    MenuProps: {
                                        MenuListProps: {
                                            sx: {
                                                backgroundColor: '#232323',
                                                color: "#555555",
                                                lineHeight: "24px",
                                                mixBlendMode: "normal",
                                                //opacity: 0.3,
                                                fontWeight: 400,
                                                fontSize: "20px",
                                                fontFamily: "Montserrat",
                                            }
                                        }
                                    }
                                }}
										>
                                 <MenuItem value="Comedy">COMEDY</MenuItem>
                                 <MenuItem value="Drama">DRAMA</MenuItem>
                                 <MenuItem value="Adventure">ADVENTURE</MenuItem>

                              </Select>
									</div>
								</Grid>

								<Grid item xs={4}>
									<div className="modalItem">
										<label className="modalLabel">RUNTIME</label>
										<TextField
											id="runtime"
											type="text"
											name="runtime"
											size="normal"
											className="modalInput"
											placeholder="minutes"
											inputProps={{
												style: {
													color: "white",
													lineHeight: "24px",
													mixBlendMode: "normal",
													opacity: 0.3,
													fontWeight: 400,
													fontSize: "20px",
													fontFamily: "Montserrat",
												},
											}}
										/>
									</div>
								</Grid>

								<Grid item xs={12}>
									<div className="modalItem">
										<label className="modalLabel">OVERVIEW</label>
										<TextField
											id="overview"
											type="text"
											name="overview"
											size="normal"
											className="modalInput"
											minRows={5}
											maxRows={5}
											multiline={true}
											placeholder="Movie description"
											inputProps={{
												style: {
													color: "white",
													lineHeight: "24px",
													mixBlendMode: "normal",
													opacity: 0.3,
													fontWeight: 400,
													fontSize: "20px",
													fontFamily: "Montserrat",
												},
											}}
										/>
									</div>
								</Grid>
							</Grid>
						</form>
					</div>
					<div className="modalFooter right">
						<Button
							color="error"
							variant="outlined"
							className="mx-2 modalResetBtn"
							onClick={handleClose}
						>
							RESET
						</Button>
						<Button
							color="error"
							variant="Contained"
							className="mx-2 modalSubmitBtn"
							type="submit"
							onClick={handleAction}
						>
							SUBMIT
						</Button>
					</div>
				</Box>
			</Modal>
		</>
	);
};

ActionModal.propTypes = {
	action: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	handleAction: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
};
