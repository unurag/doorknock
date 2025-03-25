import { Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Truck from '../icons/Truck-splash_screen.png';

const SplashScreen = ({ onComplete }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

  return (
    <Flex
        w={'100dvw'}
        h={'100dvh'}
        bg={"id.secondary"}
        justifyContent={'flex-start'}
        alignItems={'flex-end'}
    >

        <Flex
            flexDir={'column'}
            lineHeight={1.1}
            w={'100%'}
            h={'55%'}
            alignItems={'center'}
            justifyContent={'space-between'}
            paddingBottom={8}
        >
            <Flex
                w='fit-content'
                textAlign={'center'}
                flexDir={'column'}
            >
                <Text
                    fontFamily={'intro'}
                    fontSize={'3rem'}
                    color={'white'}
                    fontWeight={'800'}
                    letterSpacing={'1px'}
                >doorknock</Text>
                <Text
                    fontWeight={'500'}
                    fontSize={'1.2rem'}
                >Skip the Wait, Just Knock!</Text>
            </Flex>

            <Flex
                alignItems={'center'}
                gap='5px'
            >
                <Text
                    fontSize={'0.9rem'}
                    letterSpacing={'2px'}
                    fontWeight={'700'}
                    fontFamily={'intro'}
                >
                    A DEADBONE COMPANY
                </Text>
                <Image src={Truck} alt='Truck' w='37px' />
            </Flex>
        </Flex>

    </Flex>
  )
}

export default SplashScreen