import React, {useState} from 'react';
import Navbar from "./Navbar/Navbar";
import Box from "@mui/material/Box";
import {Step, StepLabel, Stepper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Height from "./Step/Height";
import Maxspeed from "./Step/Maxspeed";
import Range from "./Step/Range";
import Battarycap from "./Step/Battarycap";
import Vizor from "./Step/Vizor";
import Fpv from "./Step/Fpv";
import {useNavigate} from "react-router-dom";

const Steper = () => {
    const navigate = useNavigate();
    const steps = ['Висота', 'Максимальна швидкість', 'Дальність', 'Ємність батареї', 'Тепловізор', 'Fpv'];
    const [height, setHeight] = useState(null);
    const [speed, setSpeed] = useState(null);
    const [range, setRange] = useState(null);
    const [battary, setBattary] = useState(null);
    const [vizor, setVizor] = useState(null);
    const [fpv, setFpv] = useState(null);

    const getheight = (data) => {
        setHeight(data)
    };
    const getspeed = (data) => {
        setSpeed(data)
    };
    const getrange = (data) => {
        setRange(data)
    };
    const getbattary = (data) => {
        setBattary(data)
    };
    const getvizor = (data) => {
        setVizor(data)
    };
    const getfpv = (data) => {
        setFpv(data)
    };
    function finalfound(){
        let paramstring="?";
        if (height!==null && height!=="null"){
            paramstring+="height="+height+"&"
        }
        if (speed!==null && speed!=="null"){
            paramstring+="maxspeed="+speed+"&"
        }
        if (range!==null && range!=="null"){
            paramstring+="range="+range+"&"
        }
        if (battary!==null && battary!=="null"){
            paramstring+="battary="+battary+"&"
        }

        if (vizor!==null &&  vizor!=="null"){
            paramstring+="vizor="+vizor+"&"
        }
        if (fpv!==null &&  fpv!=="null" ){
            paramstring+="fpv="+fpv+"&"
        }
        navigate('/sortedrones'+paramstring.slice(0,paramstring.length-1))
    }
    const compon=[
        <Height onChange={getheight}/>,
        <Maxspeed onChangespeed={getspeed}/>,
        <Range onChangerange={getrange}/>,
        <Battarycap onChangebattary={getbattary} />,
        <Vizor onChangevizor={getvizor}/>,
        <Fpv onChangefpv={getfpv} />
    ]
        const [activeStep, setActiveStep] = React.useState(0);
        const [skipped, setSkipped] = React.useState(new Set());

        const isStepOptional = (step) => {
            return 1;
        };

        const isStepSkipped = (step) => {
            return skipped.has(step);
        };

        const handleNext = () => {
            let newSkipped = skipped;
            if (isStepSkipped(activeStep)) {
                newSkipped = new Set(newSkipped.values());
                newSkipped.delete(activeStep);
            }

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
        };

        const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        const handleSkip = () => {
            if (!isStepOptional(activeStep)) {
                // You probably want to guard against something like this,
                // it should never occur unless someone's actively trying to break something.
                throw new Error("You can't skip a step that isn't optional.");
            }

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped((prevSkipped) => {
                const newSkipped = new Set(prevSkipped.values());
                newSkipped.add(activeStep);
                return newSkipped;
            });
        };

        const handleReset = () => {
            setActiveStep(0);
        };

        return (
        <div>
            <Navbar/>
            <div>
                <Box sx={{
                    m: 7,
                }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                                <Button onClick={finalfound}>Знайти дрон</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>{compon[activeStep]}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )}

                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
                <h1>Висота:{height}</h1>
                <h1>Швидкість:{speed}</h1>
                <h1>Дальність:{range}</h1>
                <h1>Ємність батареї:{battary}</h1>
                <h1>Наявність тепловізора:{vizor}</h1>
                <h1>Наявність технології fpv:{fpv}</h1>
            </div>
        </div>
    );
};

export default Steper;