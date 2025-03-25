import { Flex, Heading, Text, Box, Button, chakra } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import InputLogin from "./Components/InputLogin/InputLogin";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Onetimepassword from "./OneTimePassword/Onetimepassword";
import axios from "axios";

const Login = () => {
  const phoneInputRef = useRef(null);
  const [showOTPComponent, setShowOTPComponent] = useState(false);
  const [phone, setPhone] = useState("");
  const [continueBtnStatus, setContinueBtnStatus] = useState(true);

  const MotionBox = chakra(motion.div);

  const continueBtnStatusFn = (tempPhone) => {
    if(tempPhone.length === 10) {
      setContinueBtnStatus(false);
    } else {
      setContinueBtnStatus(true);
    };
  };

  const handleContinue = async () => {
    setContinueBtnStatus(true);
    if (phoneInputRef.current) {
      const phoneNumber = phoneInputRef.current.value;
      setPhone(phoneNumber);

      const data = { phone: phoneNumber };

      try {
        axios
          .post(`${import.meta.env.VITE_BACKEND_SERVER_URL}/v1/accounts`, data)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.data);
          });
        setShowOTPComponent(true);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  

  return (
    <Flex w="100dvw" h="100dvh" direction={"column"}>
      <AnimatePresence>
        {showOTPComponent && (
          <MotionBox
            initial={{ x: "10%" }} // Start from right
            animate={{ x: 0 }} // Slide to visible
            exit={{ x: "100%", opacity: 0 }} // Slide out when hidden
            transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            position="absolute"
            width="100%"
            zIndex="10"
            bg="white"
            //   p="4"
            boxShadow="lg"
          >
            <Onetimepassword
              setShowOTPComponent={setShowOTPComponent}
              phoneNumber={phone}
            />
          </MotionBox>
        )}
      </AnimatePresence>
      {!showOTPComponent && (
        <>
          <Flex
            w={"100%"}
            h={"55%"}
            bgImage={"url('/bg_login.png')"}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
          >
            <Flex
              w={"4rem"}
              h={"4rem"}
              bg={"#fff"}
              borderRadius={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={6}
              ml={4}
              cursor="pointer"
              boxShadow={"0px 2px 70px 5px rgba(0, 0, 0, 0.1)"}
              bgImage={`url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA2NiA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjAwMDQgMjcuNUw5LjA1NTg1IDI5LjQ0NDVMNy4xMTEzMyAyNy41TDkuMDU1ODUgMjUuNTU1NEwxMS4wMDA0IDI3LjVaTTU3Ljc1MDQgNDkuNUM1Ny43NTA0IDUxLjAxODggNTYuNTE5MiA1Mi4yNSA1NS4wMDA0IDUyLjI1QzUzLjQ4MTYgNTIuMjUgNTIuMjUwNCA1MS4wMTg4IDUyLjI1MDQgNDkuNUg1Ny43NTA0Wk0yMi44MDU5IDQzLjE5NDVMOS4wNTU4NSAyOS40NDQ1TDEyLjk0NSAyNS41NTU0TDI2LjY5NSAzOS4zMDU0TDIyLjgwNTkgNDMuMTk0NVpNOS4wNTU4NSAyNS41NTU0TDIyLjgwNTkgMTEuODA1NEwyNi42OTUgMTUuNjk0NUwxMi45NDUgMjkuNDQ0NUw5LjA1NTg1IDI1LjU1NTRaTTExLjAwMDQgMjQuNzVIMzguNTAwNFYzMC4yNUgxMS4wMDA0VjI0Ljc1Wk01Ny43NTA0IDQ0VjQ5LjVINTIuMjUwNFY0NEg1Ny43NTA0Wk0zOC41MDA0IDI0Ljc1QzQ5LjEzMTkgMjQuNzUgNTcuNzUwNCAzMy4zNjg1IDU3Ljc1MDQgNDRINTIuMjUwNEM1Mi4yNTA0IDM2LjQwNjEgNDYuMDk0MyAzMC4yNSAzOC41MDA0IDMwLjI1VjI0Ljc1WiIgZmlsbD0iIzM2MzYzNiIvPgo8L3N2Zz4K)`}
              bgSize={"25px"}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
            ></Flex>

            <Flex
              boxSize={"125px"}
              bgImage={
                "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI4IiBoZWlnaHQ9IjIyOCIgdmlld0JveD0iMCAwIDIyOCAyMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDUzLjQzNzVDMCAyMy45MjQ4IDIzLjkyNDggMCA1My40Mzc1IDBIMTc0LjU2MkMyMDQuMDc1IDAgMjI4IDIzLjkyNDggMjI4IDUzLjQzNzVWMTc0LjU2MkMyMjggMjA0LjA3NSAyMDQuMDc1IDIyOCAxNzQuNTYyIDIyOEg1My40Mzc1QzIzLjkyNDggMjI4IDAgMjA0LjA3NSAwIDE3NC41NjJWNTMuNDM3NVoiIGZpbGw9IiNFRjRGNUYiLz4KPHBhdGggZD0iTTM4LjI0NTggMTA5LjMyNEMzOS4xNzUzIDEwOS4zMjQgNDAuMDM5NiAxMDkuNTM2IDQwLjg1NSAxMDkuOTI4QzQxLjY3MDQgMTEwLjMxOSA0Mi4yNDEyIDExMC42OTQgNDIuNTgzNyAxMTEuMDY5TDQzLjA4OTIgMTExLjY3M1YxMDIuNjU0SDQ3LjU5MDJWMTI2LjA0SDQzLjA4OTJWMTI0LjAzNEM0My4wNDAzIDEyNC4wOTkgNDIuOTc1MSAxMjQuMTgxIDQyLjg3NzIgMTI0LjI3OEM0Mi43Nzk0IDEyNC4zNzYgNDIuNTgzNyAxMjQuNTcyIDQyLjI5MDEgMTI0LjgzM0M0MS45OTY2IDEyNS4wOTQgNDEuNjcwNCAxMjUuMzM5IDQxLjMyOCAxMjUuNTUxQzQwLjk2OTIgMTI1Ljc2MyA0MC41Mjg5IDEyNS45NDIgMzkuOTc0NCAxMjYuMTA1QzM5LjQxOTkgMTI2LjI2OCAzOC44MzI5IDEyNi4zNSAzOC4yNDU4IDEyNi4zNUMzNi4xMjU4IDEyNi4zNSAzNC4yODMgMTI1LjUzNCAzMi43MTc0IDEyMy44ODdDMzEuMTUxOSAxMjIuMjQgMzAuMzg1NCAxMjAuMjE4IDMwLjM4NTQgMTE3LjgzN0MzMC4zODU0IDExNS40NTYgMzEuMTUxOSAxMTMuNDUgMzIuNzE3NCAxMTEuODAzQzM0LjI4MyAxMTAuMTU2IDM2LjEyNTggMTA5LjMyNCAzOC4yNDU4IDEwOS4zMjRaTTM5LjA2MTIgMTIyLjM3QzQwLjE3MDEgMTIyLjM3IDQxLjExNiAxMjEuOTQ2IDQxLjg5ODcgMTIxLjA5OEM0Mi42ODE1IDEyMC4yNSA0My4wNzI5IDExOS4xNTggNDMuMDcyOSAxMTcuODUzQzQzLjA3MjkgMTE2LjUzMiA0Mi42ODE1IDExNS40NTYgNDEuODk4NyAxMTQuNjA4QzQxLjExNiAxMTMuNzYgNDAuMTcwMSAxMTMuMzM2IDM5LjA2MTIgMTEzLjMzNkMzNy45NTIyIDExMy4zMzYgMzcuMDA2NCAxMTMuNzYgMzYuMjIzNiAxMTQuNjA4QzM1LjQ0MDggMTE1LjQ1NiAzNS4wNDk0IDExNi41MzIgMzUuMDQ5NCAxMTcuODUzQzM1LjA0OTQgMTE5LjE1OCAzNS40NDA4IDEyMC4yNSAzNi4yMjM2IDEyMS4wOThDMzcuMDA2NCAxMjEuOTQ2IDM3Ljk1MjIgMTIyLjM3IDM5LjA2MTIgMTIyLjM3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU2LjExMDcgMTE3Ljg1M0M1Ni4xMTA3IDExOS4wNzYgNTYuNTAyMSAxMjAuMTA0IDU3LjMwMTIgMTIwLjkzNUM1OC4wODM5IDEyMS43NjcgNTkuMDI5OCAxMjIuMTc1IDYwLjEyMjQgMTIyLjE3NUM2MS4xOTg3IDEyMi4xNzUgNjIuMTQ0NiAxMjEuNzY3IDYyLjk0MzcgMTIwLjkzNUM2My43MjY0IDEyMC4xMDQgNjQuMTM0MSAxMTkuMDc2IDY0LjEzNDEgMTE3Ljg1M0M2NC4xMzQxIDExNi42MyA2My43MjY0IDExNS42MDMgNjIuOTQzNyAxMTQuNzU1QzYyLjE0NDYgMTEzLjkyMyA2MS4xOTg3IDExMy40OTkgNjAuMTIyNCAxMTMuNDk5QzU5LjAyOTggMTEzLjQ5OSA1OC4wODM5IDExMy45MjMgNTcuMzAxMiAxMTQuNzU1QzU2LjUwMjEgMTE1LjYwMyA1Ni4xMTA3IDExNi42MyA1Ni4xMTA3IDExNy44NTNaTTY4Ljc5ODIgMTE3LjgzN0M2OC43OTgyIDEyMC4xMiA2Ny45MzM5IDEyMi4xMSA2Ni4yMDUyIDEyMy44MDZDNjQuNDc2NiAxMjUuNTAyIDYyLjQ1NDQgMTI2LjM1IDYwLjEyMjQgMTI2LjM1QzU3Ljc3NDEgMTI2LjM1IDU1Ljc1MTkgMTI1LjUwMiA1NC4wMjMzIDEyMy44MDZDNTIuMjk0NiAxMjIuMTEgNTEuNDMwMyAxMjAuMTIgNTEuNDMwMyAxMTcuODM3QzUxLjQzMDMgMTE1LjU3IDUyLjI5NDYgMTEzLjU4MSA1NC4wMjMzIDExMS44ODVDNTUuNzUxOSAxMTAuMTg5IDU3Ljc3NDEgMTA5LjM0MSA2MC4xMjI0IDEwOS4zNDFDNjIuNDU0NCAxMDkuMzQxIDY0LjQ3NjYgMTEwLjE4OSA2Ni4yMDUyIDExMS44ODVDNjcuOTMzOSAxMTMuNTgxIDY4Ljc5ODIgMTE1LjU3IDY4Ljc5ODIgMTE3LjgzN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03Ni4xNDQ1IDExNy44NTNDNzYuMTQ0NSAxMTkuMDc2IDc2LjUzNTkgMTIwLjEwNCA3Ny4zMzUgMTIwLjkzNUM3OC4xMTc4IDEyMS43NjcgNzkuMDYzNiAxMjIuMTc1IDgwLjE1NjIgMTIyLjE3NUM4MS4yMzI2IDEyMi4xNzUgODIuMTc4NCAxMjEuNzY3IDgyLjk3NzUgMTIwLjkzNUM4My43NjAzIDEyMC4xMDQgODQuMTY4IDExOS4wNzYgODQuMTY4IDExNy44NTNDODQuMTY4IDExNi42MyA4My43NjAzIDExNS42MDMgODIuOTc3NSAxMTQuNzU1QzgyLjE3ODQgMTEzLjkyMyA4MS4yMzI2IDExMy40OTkgODAuMTU2MiAxMTMuNDk5Qzc5LjA2MzYgMTEzLjQ5OSA3OC4xMTc4IDExMy45MjMgNzcuMzM1IDExNC43NTVDNzYuNTM1OSAxMTUuNjAzIDc2LjE0NDUgMTE2LjYzIDc2LjE0NDUgMTE3Ljg1M1pNODguODMyIDExNy44MzdDODguODMyIDEyMC4xMiA4Ny45Njc3IDEyMi4xMSA4Ni4yMzkxIDEyMy44MDZDODQuNTEwNCAxMjUuNTAyIDgyLjQ4ODMgMTI2LjM1IDgwLjE1NjIgMTI2LjM1Qzc3LjgwNzkgMTI2LjM1IDc1Ljc4NTggMTI1LjUwMiA3NC4wNTcxIDEyMy44MDZDNzIuMzI4NSAxMjIuMTEgNzEuNDY0MiAxMjAuMTIgNzEuNDY0MiAxMTcuODM3QzcxLjQ2NDIgMTE1LjU3IDcyLjMyODUgMTEzLjU4MSA3NC4wNTcxIDExMS44ODVDNzUuNzg1OCAxMTAuMTg5IDc3LjgwNzkgMTA5LjM0MSA4MC4xNTYyIDEwOS4zNDFDODIuNDg4MyAxMDkuMzQxIDg0LjUxMDQgMTEwLjE4OSA4Ni4yMzkxIDExMS44ODVDODcuOTY3NyAxMTMuNTgxIDg4LjgzMiAxMTUuNTcgODguODMyIDExNy44MzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAyLjM1OSAxMDkuNDg3TDEwMi4zNDMgMTE0LjAyMUMxMDIuMDE3IDExMy45MDcgMTAxLjUxMSAxMTMuODQxIDEwMC44NDIgMTEzLjgyNUM5OS42NjgyIDExMy44MjUgOTguNzIyNCAxMTQuMiA5OC4wMzc1IDExNC45NUM5Ny4zNTI1IDExNS43MDEgOTYuOTkzOCAxMTYuNzc3IDk2Ljk5MzggMTE4LjE3OVYxMjYuMDIzSDkyLjQ5MjhWMTA5LjY1SDk2Ljk5MzhWMTExLjY1NkM5Ny4xMjQyIDExMS41MDkgOTcuMzE5OSAxMTEuMzE0IDk3LjU0ODIgMTExLjA2OUM5Ny43OTI4IDExMC44MjUgOTguMzE0NyAxMTAuNDk4IDk5LjEzMDEgMTEwLjA5MUM5OS45NDU1IDEwOS42OTkgMTAwLjc5MyAxMDkuNDg3IDEwMS42OSAxMDkuNDg3SDEwMi4zNTlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTExLjg3NCAxMTkuNjhMMTA5Ljg4NSAxMjIuMDEyVjEyNi4wMjNIMTA1LjM2OFYxMDIuNjM4SDEwOS44ODVWMTE2LjMzN0wxMTUuNzIzIDEwOS42NUgxMjAuODkzTDExNC43MjggMTE2LjY3OUwxMjEuMjM1IDEyNi4wMjNIMTE2LjIyOUwxMTEuODc0IDExOS42OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMjguMjM5IDEwOS42NUwxMjguMjIzIDExMS42NzNDMTI4LjM1MyAxMTEuNDkzIDEyOC41NDkgMTExLjI4MSAxMjguNzc3IDExMS4wMkMxMjkuMDIyIDExMC43NTkgMTI5LjU0NCAxMTAuNDE3IDEzMC4zNTkgMTA5Ljk3N0MxMzEuMTc0IDEwOS41NTMgMTMyLjAyMiAxMDkuMzI0IDEzMi45MDMgMTA5LjMyNEMxMzQuNzc4IDEwOS4zMjQgMTM2LjMxMSAxMDkuOTc3IDEzNy40ODUgMTExLjI2NUMxMzguNjYgMTEyLjU2OSAxMzkuMjQ3IDExNC4zMTQgMTM5LjI0NyAxMTYuNVYxMjYuMDIzSDEzNC43NDZWMTE3LjAwNUMxMzQuNzQ2IDExNi4wMSAxMzQuNDUyIDExNS4yMTEgMTMzLjg2NSAxMTQuNTkyQzEzMy4yNzggMTEzLjk3MiAxMzIuNTEyIDExMy42NjIgMTMxLjU4MiAxMTMuNjYyQzEzMC41NTUgMTEzLjY2MiAxMjkuNzM5IDExNC4wMDUgMTI5LjEzNiAxMTQuNjczQzEyOC41MzIgMTE1LjM0MiAxMjguMjM5IDExNi4yODggMTI4LjIzOSAxMTcuNTExVjEyNi4wMjNIMTIzLjczOFYxMDkuNjVIMTI4LjIzOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNDcuNjA0IDExNy44NTNDMTQ3LjYwNCAxMTkuMDc2IDE0Ny45OTYgMTIwLjEwNCAxNDguNzk1IDEyMC45MzVDMTQ5LjU3NyAxMjEuNzY3IDE1MC41MjMgMTIyLjE3NSAxNTEuNjE2IDEyMi4xNzVDMTUyLjY5MiAxMjIuMTc1IDE1My42MzggMTIxLjc2NyAxNTQuNDM3IDEyMC45MzVDMTU1LjIyIDEyMC4xMDQgMTU1LjYyOCAxMTkuMDc2IDE1NS42MjggMTE3Ljg1M0MxNTUuNjI4IDExNi42MyAxNTUuMjIgMTE1LjYwMyAxNTQuNDM3IDExNC43NTVDMTUzLjYzOCAxMTMuOTIzIDE1Mi42OTIgMTEzLjQ5OSAxNTEuNjE2IDExMy40OTlDMTUwLjUyMyAxMTMuNDk5IDE0OS41NzcgMTEzLjkyMyAxNDguNzk1IDExNC43NTVDMTQ3Ljk5NiAxMTUuNjAzIDE0Ny42MDQgMTE2LjYzIDE0Ny42MDQgMTE3Ljg1M1pNMTYwLjI5MiAxMTcuODM3QzE2MC4yOTIgMTIwLjEyIDE1OS40MjcgMTIyLjExIDE1Ny42OTkgMTIzLjgwNkMxNTUuOTcgMTI1LjUwMiAxNTMuOTQ4IDEyNi4zNSAxNTEuNjE2IDEyNi4zNUMxNDkuMjY4IDEyNi4zNSAxNDcuMjQ1IDEyNS41MDIgMTQ1LjUxNyAxMjMuODA2QzE0My43ODggMTIyLjExIDE0Mi45MjQgMTIwLjEyIDE0Mi45MjQgMTE3LjgzN0MxNDIuOTI0IDExNS41NyAxNDMuNzg4IDExMy41ODEgMTQ1LjUxNyAxMTEuODg1QzE0Ny4yNDUgMTEwLjE4OSAxNDkuMjY4IDEwOS4zNDEgMTUxLjYxNiAxMDkuMzQxQzE1My45NDggMTA5LjM0MSAxNTUuOTcgMTEwLjE4OSAxNTcuNjk5IDExMS44ODVDMTU5LjQyNyAxMTMuNTgxIDE2MC4yOTIgMTE1LjU3IDE2MC4yOTIgMTE3LjgzN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNjIuOTU4IDExNy44MzdDMTYyLjk1OCAxMTUuNTcgMTYzLjgyMiAxMTMuNTgxIDE2NS41NjcgMTExLjg4NUMxNjcuMzI4IDExMC4xODkgMTY5LjM5OSAxMDkuMzI0IDE3MS43OTYgMTA5LjMyNEMxNzIuNjQ0IDEwOS4zMjQgMTczLjQ2IDEwOS40NTUgMTc0LjIyNiAxMDkuNjgzQzE3NC45OTMgMTA5LjkxMSAxNzUuNjEzIDExMC4xODkgMTc2LjEwMiAxMTAuNTE1QzE3Ni41OTEgMTEwLjg0MSAxNzcuMDMxIDExMS4xNTEgMTc3LjQwNiAxMTEuNDc3QzE3Ny43OTggMTExLjgwMyAxNzguMDc1IDExMi4wOTcgMTc4LjIzOCAxMTIuMzI1TDE3OC40ODMgMTEyLjY2N0wxNzUuNjQ1IDExNS41MDVDMTc1LjU2NCAxMTUuMzU4IDE3NS40MTcgMTE1LjE2MiAxNzUuMjIxIDExNC45MDJDMTc1LjAyNSAxMTQuNjU3IDE3NC41ODUgMTE0LjMzMSAxNzMuOTE2IDExMy45MzlDMTczLjI0OCAxMTMuNTQ4IDE3Mi41NDcgMTEzLjMzNiAxNzEuNzk2IDExMy4zMzZDMTcwLjYyMiAxMTMuMzM2IDE2OS41OTUgMTEzLjc3NiAxNjguNzQ3IDExNC42NTdDMTY3Ljg5OSAxMTUuNTM3IDE2Ny40NTkgMTE2LjYxNCAxNjcuNDU5IDExNy44NTNDMTY3LjQ1OSAxMTkuMDkzIDE2Ny44OTkgMTIwLjE1MyAxNjguNzQ3IDEyMS4wMzNDMTY5LjYxMSAxMjEuOTE0IDE3MC42MjIgMTIyLjM1NCAxNzEuNzk2IDEyMi4zNTRDMTcyLjU0NyAxMjIuMzU0IDE3My4yNDggMTIyLjE3NSAxNzMuOTE2IDEyMS44MTZDMTc0LjU4NSAxMjEuNDU3IDE3NS4wNzQgMTIxLjA5OCAxNzUuMzY4IDEyMC43NEwxNzUuODA4IDEyMC4xODVMMTc4LjQ4MyAxMjMuMDIzQzE3OC40MTcgMTIzLjEyMSAxNzguMzM2IDEyMy4yMzUgMTc4LjIyMiAxMjMuMzk4QzE3OC4xMDggMTIzLjU2MSAxNzcuODQ3IDEyMy44MjIgMTc3LjQyMyAxMjQuMTk3QzE3Ny4wMTUgMTI0LjU3MiAxNzYuNTc1IDEyNC44OTggMTc2LjA4NSAxMjUuMTkyQzE3NS42MTMgMTI1LjQ4NSAxNzQuOTkzIDEyNS43NDYgMTc0LjIyNiAxMjUuOTkxQzE3My40NiAxMjYuMjM1IDE3Mi42NDQgMTI2LjM1IDE3MS43OTYgMTI2LjM1QzE2OS4zOTkgMTI2LjM1IDE2Ny4zMjggMTI1LjUwMiAxNjUuNTgzIDEyMy44MDZDMTYzLjgyMiAxMjIuMTEgMTYyLjk1OCAxMjAuMTIgMTYyLjk1OCAxMTcuODM3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4OC41MiAxMTkuNjhMMTg2LjUzIDEyMi4wMTJWMTI2LjAyM0gxODIuMDEzVjEwMi42MzhIMTg2LjUzVjExNi4zMzdMMTkyLjM2OCAxMDkuNjVIMTk3LjUzOEwxOTEuMzc0IDExNi42NzlMMTk3Ljg4MSAxMjYuMDIzSDE5Mi44NzRMMTg4LjUyIDExOS42OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=)"
              }
              bgSize={"125px"}
              pos={"absolute"}
              bottom={"50%"}
              left={"50%"}
              transform={"translateX(-50%) translateY(88%)"}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
            ></Flex>
          </Flex>

          <Flex
            w={"100%"}
            h={"45%"}
            bg="#fff"
            flexDirection={"column"}
            justifyContent="space-between"
            pt="5.5rem"
          >
            <Flex
              w="100%"
              justifyContent={"center"}
              textAlign={"center"}
              alignItems={"center"}
              // py={'5.2rem'}
              flexDir={"column"}
            >
              <Heading
                fontSize={"1.7rem"}
                fontWeight={"800"}
                fontFamily={"body"}
                color={"text"}
                letterSpacing={"-0.7px"}
              >
                Instant knock, instant delivery!
              </Heading>
              <Text
                color={"text.secondary"}
                fontSize={"1rem"}
                mt={2}
                fontWeight={"600"}
              >
                Log in or sign up
              </Text>
              {/* 
                <Stack gap={"10"} w="80%" boxShadow={"0px 34px 115px -53px rgba(3, 3, 3, 0.1)"}>
                    <Group attached h='3.2rem'>
                        <InputAddon border='none' boxShadow="-1.5px 0 0 0 #D0D4DC, 0 1.5px 0 0 #D0D4DC, 0 -1.5px 0 0 #D0D4DC" bg='#fff' color='text' fontWeight='600' borderRadius={'10px'} fontSize='1.2rem'>+91</InputAddon>

                        <Input placeholder='Enter mobile number' variant='outline' w='100%' border='none' boxShadow="1.5px 0 0 0 #D0D4DC, 0 1.5px 0 0 #D0D4DC, 0 -1.5px 0 0 #D0D4DC" h='3.2rem' borderRadius={'10px'} color='#000' fontSize='1.2rem' fontWeight='600' />

                    </Group>
                </Stack> */}
              {/* 
                <Stack gap={"10"} w="80%">
                   <Group attached>
                        <Input placeholder='Enter mobile number' type='tel' variant='outline' maxLength={10} _placeholder={{ color: "inactive" }} w='100%' h="3.2rem" color='#000' fontSize='1.2rem' fontWeight='600' css={{ border-Radius: "12px" }} />
                    </Group> 
                </Stack> */}

              <InputLogin ref={phoneInputRef} onValueChange={continueBtnStatusFn} />

              <Button
                variant={"subtle"}
                w="80%"
                h="3.7rem"
                borderRadius="10px"
                bg="id.activeblue"
                color="#fff"
                fontSize="lg"
                onClick={handleContinue}
                disabled={continueBtnStatus}
                _disabled={{
                  bg: "gray.400", // Background color for disabled state
                  color: "gray.600", // Text color for disabled state
                }}
              >
                Continue
              </Button>
            </Flex>

            <Flex
              bg="box_login"
              borderTopWidth="1px"
              borderTopStyle="solid"
              borderTopColor="box_login.border"
              w="100%"
              h="3.5rem"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="text.inactive" fontSize="0.75rem">
                By continuing you agree to our:{" "}
                <Box as="span" fontWeight="500" mx={1}>
                  <Link href="/terms" fontWeight="500">
                    Terms of Service
                  </Link>
                </Box>{" "}
                &{" "}
                <Box as="span" fontWeight={"500"} ml={1}>
                  <Link href="/privacy" fontWeight="500">
                    Privacy policy
                  </Link>
                </Box>
              </Text>
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Login;
