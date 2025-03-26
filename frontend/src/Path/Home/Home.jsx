import { Flex, Text, Box } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Flex
        w='100dvw'
        h='100dvh'
        bg='#fff'
        flexDir='column'
    >
        <Flex
            w='100%'
            h='30%'
            // bg='homegradient.half'
            bgGradient='to-b'
            gradientFrom='homegradient'
            gradientVia='homegradient.half'
            gradientTo='homegradient.full'
            borderBottomWidth='1px'
            borderBottomStyle='solid'
            borderBottomColor='border.home'
            flexDir='column'
            justifyContent='flex-end'
        >

            {/* container profile and navigation */}
            <Flex
                w='100%'
                h='auto'
                color='text.homeminutes'
                bg='id.secondary'
                px={6}
            >

                <Flex
                    flexDir='column'
                    w='90%'
                >
                    <Text fontWeight={800} fontSize='1.3rem' letterSpacing='-1px'>Knocking in</Text>
                    <Flex
                        h='fit-content'
                        mt='-1.15rem'
                        alignItems='center'
                    >
                        <Text fontWeight={800} letterSpacing='-1px' fontSize='2.5rem'>20 minutes</Text>
                        {/* free delivery tag */}
                        <Flex
                            w='35%'
                            h='1.9rem'
                            bg='inactive.freedelivery'
                            borderRadius='39px'
                            alignItems='center'
                            px={'0.3rem'}
                            ml={4}
                        >

                            <Flex
                                w={'1.35rem'}
                                h={'1.35rem'}
                                bg='id.activeblue'
                                borderRadius='full'
                            >

                            </Flex>

                        </Flex>
                    </Flex>
                </Flex>

                <Flex
                    w='10%'
                >
                    <Text>pfp</Text>
                </Flex>

            </Flex>

        </Flex>

        {/* bottom display */}
        <Flex
            w='100%'
            h='70%'
        >

        </Flex>

    </Flex>
  )
}

export default Home