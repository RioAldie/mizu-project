import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepTwo from '../../molekuls/steptwo';
import StepOne from '../../molekuls/stepone';
import StepThree from '../../molekuls/stepthree';
import StepDone from '../../molekuls/step';
import { styled } from '@mui/system';
import { useState,useEffect } from 'react';
import { addDoc, collection,setDoc,doc } from "firebase/firestore";
import { auth,db } from "../../../firebase/firebase";
import Link from 'next/link';
import { async } from '@firebase/util';




const steps = ['Detail Produk', 'Data Pembeli', 'Pembayaran'];
const BoxStyled = styled(Box)({
  borderRadius: '10px',
  border: '#bfbfbf solid 3px'
});
const DivStyled = styled('div')({
  width: 260,
  height: 50,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
})
export default function StepOrder(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [customer, setCustomer ] = useState('');
  const [order, setOrder] = useState({});
  const {title,body,price,category,img,id} = props;
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState({});
  const [wallet, setWallet] = useState('dana');
  const [totalPrice, setTotalPrice] = useState()
  const [datauser, setDatuser] = useState({});
  const handleOrderOne = () =>{
    const user =JSON.parse(localStorage.getItem('user'));
    const useruid = user.uid;
    let dataOrder ={
      uid: useruid ,
      id: id,
      title : title,
      body : body,
      price : price,
      category : category,
      img: 'image/galon-tiga.png',
      id_order: new Date().getTime(),
      total: totalPrice
    }
    setUserId(useruid);    
    setOrder(dataOrder);
  }
 const handleOrderTwo = (dataOrder) =>{
 
    let data ={...dataOrder,userData}
    setOrder(data);
 }
 const handleOrderThree = (dataOrder) =>{
    const paydata = {
      wallet: wallet,
      id_pay: new Date().getTime(),
      status: 'pending'
    }
    let data = {...dataOrder,paydata};
    const date = new Date().getTime();
    const id = date.toString();
    return handlePostData(id,data);
 }
 const handlePostData = async (id,data) =>{
  try {
      const res =  await setDoc(doc(db, "orders",id), {
          ...data
      })
      console.log("berhasil menambahkan collection");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}
  const getUserData = () =>{
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    let userData = {
        username: userdata.username,
        password: userdata.password,
        email: userdata.email,
        adress: userdata.adress,
        phone: userdata.phone,
        customer: customer
    }
    setUserData(userData);
    return setDatuser(userData);
}

  useEffect(()=>{
    getUserData();
  },[customer,order,wallet])
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const handleStepBox = (step) =>{
      if(step === 0){
          return <StepTwo title={title} price={price} category={category} setTotalPrice={setTotalPrice}/>
      }
      if(step === 1){
        return <StepOne setCustomer={setCustomer} userdata={datauser} phone={datauser.phone} adress={datauser.adress} email={datauser.email}/>
      }
      if(step === 2){
      return <StepThree setWallet={setWallet} price={totalPrice}/>
      }
  }
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    if(activeStep === 0){
      console.log('step 1 complete');
      handleOrderOne();
    }
    if(activeStep === 1){
      console.log('step 2 complete');
      handleOrderTwo(order);
    }
    if(activeStep === 2){
      console.log('step 3 complete')
      handleOrderThree(order);
    }
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 ,justifyContent:'center'}}>
             <StepDone/>
            </Box>
            <Link href={'/profile#order'}>
              <Button sx={{ mr: 1 }}>
                Lihat Pesanan
              </Button>
            </Link>
              
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box  sx={{width: {xs: '100%', md: 450}, height: {xs: 500, md: 400}, display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems: 'center'}}>
                
                {
                    handleStepBox(activeStep)
                }
            </Box>
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
              
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
