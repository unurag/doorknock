import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ETAandProfile from "./Components/ETAandProfile";
import AddressAndLocation from "./Components/AddressAndLocation";
import SearchBar from "./Components/SearchBar";
import { updateThemeColor } from "../../themeColor";

import CategoriesSlider from "./Components/CategoriesSlider";

const Home = () => {

  useEffect(() => {
    updateThemeColor("#fefefe");
  }, []);

  return (
    <Flex w="100dvw" h="100dvh" bg="#fff" flexDir="column">
      <Flex
        w="100%"
        h={["28%", "28%", "22%", "23%", "28%"]}
        minH={["16.5rem", "19rem", "19rem", "20rem", "19rem"]}
        gap="2rem"
        // bg='homegradient.half'
        bgGradient="to-b"
        gradientFrom="homegradient"
        gradientVia="homegradient.half"
        gradientTo="homegradient.full"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="border.home"
        flexDir="column"
        justifyContent="space-between"
        // pos='absolute'
        // paddingBottom='4rem'
      >
        <Flex flexDir="column" pt={5} gap={"0rem"}>
          {/* container profile and navigation */}
          <ETAandProfile />

          {/* Address */}
          <AddressAndLocation />
          {/* Search Bar */}
          <SearchBar />
        </Flex>
            
            {/* Categories */}
            <CategoriesSlider />
      </Flex>

      {/* bottom display */}
      <Flex w="100%" flex='1' bg="magenta"></Flex>
    </Flex>
  );
};

export default Home;
