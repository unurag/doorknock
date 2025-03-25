import { Flex, Icon, Text } from '@chakra-ui/react'
import { PinInput } from '@/components/ui/pin-input'
import React, { useEffect, useState } from 'react'
import { IoChevronBackOutline } from "react-icons/io5";

const Onetimepassword = ({ setShowOTPComponent, phoneNumber }) => {

    const [ otpValue, setOTPValue ] = useState(["", "", "", ""]);
    const [resendTimer, setResendTimer] = useState(120);

    useEffect (() => {
        if(resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer]);

    useEffect(() => {
        if (otpValue.every(digit => digit !=="")) {
            submitOTP();
        }
    }, [otpValue])

    const submitOTP = () => {
        console.log("OTP submitted: ", otpValue.join(""))
    };

  return (
    <Flex
        bg="#fff"
        color="text"
        w='100dvw'
        h='100dvh'
        flexDirection='column'
    >
        
        <Flex w='100%' h='3rem' pos='relative' alignItems={'center'} justifyContent={'center'}>

            <Icon as={IoChevronBackOutline} aria-label='back' boxSize={6} pos={"absolute"} left={"16px"} cursor="pointer" onClick={() => setShowOTPComponent(false)} />
            
            <Text color='text' fontWeight='500' fontSize='18px'>OTP Verification</Text>

        </Flex>

        <Flex w='100%' h='50%'
        //  bg='tomato'
        flexDirection='column'
        alignItems='center'
         >
            <Flex w='100%' h='fit-content'
            //  bg='green.400' 
             textAlign='center' justifyContent='center' pt='4rem' flexDir='column'
             pb='4.5rem'
             >
                <Text color='text.secondary' fontWeight='300' >We have sent a verification code to</Text>
                <Text color='text' letterSpacing='0.5px' fontWeight='600'>{"+91 " + phoneNumber}</Text>
            </Flex>
            <Flex
                w='100%'
                flexDir='column'
                alignItems='center'
            >
                <PinInput value={otpValue} placeholder="" size='lg' onValueChange={(e) => setOTPValue(e.value)} disabled={true} otp />

                {resendTimer > 0 ? (
                <Text color='inactive' mt={5}>Resend OTP in {resendTimer}</Text>
                ) : (
                    <Text color='id.activeblue' cursor='pointer' mt={5} onClick={() => setResendTimer(120)}>Resend OTP</Text>
                )}

            </Flex>
        </Flex>

    </Flex>
  )
}

export default Onetimepassword