import { Flex, Icon, Text, Alert } from "@chakra-ui/react";
import { PinInput } from "@/components/ui/pin-input";
import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import axios from "axios";

const Onetimepassword = ({ setShowOTPComponent, phoneNumber }) => {
  const [otpValue, setOTPValue] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(120);
  const [error, setError] = useState("");

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    if (otpValue.every((digit) => digit !== "")) {
      submitOTP();
    }
  }, [otpValue]);

  const submitOTP = async () => {
    const data = {
      phone: phoneNumber,
      otp: otpValue.join(""),
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_SERVER_URL}/v1/accounts/verify/code`,
        data
      );
      if (res.data.success) {
        setError(res.data.message || "Verification was successful");

        setTimeout(() => {
          setError("");
        }, 7000);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.message || "Server error occurred.");
      } else if (err.request) {
        setError("Network error. Please check your connection.");
      } else {
        setError(err.response.data?.message  || "An unexpected error occurred.");
      }
      setTimeout(() => {
        setError("");
      }, 7000);
    }
  };

  //   const submitOTP = async () => {
  //     const data = {
  //       phone: phoneNumber,
  //       otp: otpValue.join(""),
  //     };
  //     console.log(data);
  //     await axios
  //       .post(
  //         `${import.meta.env.VITE_BACKEND_SERVER_URL}/v1/accounts/verify/code`,
  //         data
  //       )
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <Flex bg="#fff" color="text" w="100dvw" h="100dvh" flexDirection="column">
      <Flex
        w="100%"
        h="3rem"
        pos="relative"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Icon
          as={IoChevronBackOutline}
          aria-label="back"
          boxSize={6}
          pos={"absolute"}
          left={"16px"}
          cursor="pointer"
          onClick={() => setShowOTPComponent(false)}
        />

        <Text color="text" fontWeight="500" fontSize="18px">
          OTP Verification
        </Text>
      </Flex>

      <Flex
        w="100%"
        h="50%"
        //  bg='tomato'
        flexDirection="column"
        alignItems="center"
      >
        {error && (
          <Alert.Root status="neutral" title="Some error has occurred!">
            <Alert.Indicator />
            <Alert.Title>{error}</Alert.Title>
          </Alert.Root>
        )}

        <Flex
          w="100%"
          h="fit-content"
          //  bg='green.400'
          textAlign="center"
          justifyContent="center"
          pt="4rem"
          flexDir="column"
          pb="4.5rem"
        >
          <Text color="text.secondary" fontWeight="300">
            We have sent a verification code to
          </Text>
          <Text color="text" letterSpacing="0.5px" fontWeight="600">
            {"+91-" + phoneNumber}
          </Text>
        </Flex>
        <Flex w="100%" flexDir="column" alignItems="center">
          <PinInput
            value={otpValue}
            placeholder=""
            size="lg"
            onValueChange={(e) => setOTPValue(e.value)}
            otp
          />

          {resendTimer > 0 ? (
            <Text color="inactive" mt={5}>
              Resend OTP in {resendTimer}
            </Text>
          ) : (
            <Text
              color="id.activeblue"
              cursor="pointer"
              mt={5}
              onClick={() => setResendTimer(120)}
            >
              Resend OTP
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Onetimepassword;
