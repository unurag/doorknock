import React, { useState } from "react";
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import AllIcon from "../../../icons/all.svg";
import SnacksIcon from "../../../icons/snacks.svg";
import DrinksIcon from "../../../icons/drinks.svg";
import PanCornerIcon from "../../../icons/pan_corner.svg";
import RationIcon from "../../../icons/ration.svg";
import DairyIcon from "../../../icons/dairy.svg";

const CategoriesSlider = () => {
  const categories = [
    "All",
    "Snacks",
    "Drinks",
    "Pan Corner",
    "Ration",
    "Dairy",
  ];

  const categoryIcons = {
    All: AllIcon,
    Snacks: SnacksIcon,
    Drinks: DrinksIcon,
    "Pan Corner": PanCornerIcon,
    Ration: RationIcon,
    Dairy: DairyIcon,
  };

  const [selected, setSelected] = useState("All");

  return (
    <Flex
      w="100%"
      h="4.5rem"
      // bg='green.400'
      // position='absolute'
      // bottom='0'
      // left='0'

      overflowX="auto"
      overflowY="hidden"
      whiteSpace="nowrap"
      p={2}
      css={{
        "&::-webkit-scrollbar": { display: "none" },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
      // alignItems='center'
    >
      {categories.map((category) => (
        <Flex
          key={category}
          px={4}
          py={2}
          cursor="pointer"
          position="relative"
          textAlign="center"
          onClick={() => setSelected(category)}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box w="1.6rem" h="1.6rem" overflow="visible" mb="0.1rem">
            <Image src={categoryIcons[category]} height="1.6rem" width="auto" />
          </Box>

          <Text
            fontSize="1rem"
            fontWeight={selected === category ? "600" : "400"}
            color={selected === category ? "#000" : "text.inactive"}
          >
            {category}
          </Text>

          {/* Underline Effect */}
          {selected === category && (
            <Box
              position="absolute"
              bottom="-11px"
              left="50%"
              transform="translateX(-50%)"
              w="75%"
              h="7px"
              bg="#000"
              borderRadius="10px 10px 0 0"
              clipPath="inset(0 0 45% 0)"
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default CategoriesSlider;
