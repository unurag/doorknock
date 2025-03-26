import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import Truck from '../../icons/Truck-splash_screen.png'

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
                px={2}
                justifyContent='space-between'
            >

                <Flex
                    flexDir='column'
                    // w='90%'
                    w='fit-content'
                >
                    <Text fontWeight={800} fontSize={['0.85rem', '1.3rem']}>Knocking in</Text>
                    <Flex
                        h='fit-content'
                        mt={['-0.7rem', '-1.15rem']}
                        alignItems='center'
                    >
                        <Text fontWeight={800} letterSpacing='-1px' fontSize={['1.75rem', '2.5rem']}>20 minutes</Text>
                        {/* free delivery tag */}
                        <Flex
                            w='fit-content'
                            h={['1.35rem', '1.9rem']}
                            bg='inactive.freedelivery'
                            borderRadius='39px'
                            alignItems='center'
                            pl={['0.25rem', '0.3rem']}
                            pr={'0.55rem'}
                            ml={[3, 4]}
                        >

                            <Flex
                                w={['1rem', '1.35rem']}
                                h={['1rem', '1.35rem']}
                                bg='id.activeblue'
                                borderRadius='full'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Image src={Truck} alt='Truck' w={['10px', '14px']} />
                            </Flex>

                            <Text color='id.activeblue' ml={1} fontWeight='600' fontSize='0.75rem'>Free Delivery</Text>

                        </Flex>
                    </Flex>
                </Flex>

                {/* for user profile */}
                <Flex
                    w='15%'
                    h='100%'
                    justifyContent='flex-end'
                    alignItems='center'
                >
                    <Flex
                        w='2.5rem'
                        h='2.5rem'
                        borderRadius='50%'
                        bg='inactive.profilehome'
                    >

                    </Flex>
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