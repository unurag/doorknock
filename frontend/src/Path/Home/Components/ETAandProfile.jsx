import { Flex, Text, Image } from '@chakra-ui/react'
import Truck from '../../../icons/Truck-splash_screen.png'
import React from 'react'

const ETAandProfile = () => {
  return (
                <Flex
                    w='100%'
                    h='fit-content'
                    color='text.homeminutes'
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
                        w='auto'
                        h='100%'
                        justifyContent='flex-end'
                        alignItems='center'
                    >
                        <Flex
                            w='2.5rem'
                            h='2.5rem'
                            cursor='pointer'
                            borderRadius='50%'
                            bg='inactive.profilehome'
                        >
                            <Flex
                                w='2.5rem'
                                h='2.5rem'
                                borderRadius='50%'
                                bgSize='1.15rem'
                                bgRepeat='no-repeat'
                                bgPos='center'
                                bgImage={`url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+Cjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAKICAgIDx0aXRsZT5wcm9maWxlIFsjMTMzNV08L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KCjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEcmliYmJsZS1MaWdodC1QcmV2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIwLjAwMDAwMCwgLTIxNTkuMDAwMDAwKSIgZmlsbD0iIzMzMzMzMyI+CiAgICAgICAgICAgIDxnIGlkPSJpY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMDAwMDAwLCAxNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzc0LDIwMDkgQzM3MS43OTQsMjAwOSAzNzAsMjAwNy4yMDYgMzcwLDIwMDUgQzM3MCwyMDAyLjc5NCAzNzEuNzk0LDIwMDEgMzc0LDIwMDEgQzM3Ni4yMDYsMjAwMSAzNzgsMjAwMi43OTQgMzc4LDIwMDUgQzM3OCwyMDA3LjIwNiAzNzYuMjA2LDIwMDkgMzc0LDIwMDkgTTM3Ny43NTgsMjAwOS42NzMgQzM3OS4xMjQsMjAwOC41NzQgMzgwLDIwMDYuODkgMzgwLDIwMDUgQzM4MCwyMDAxLjY4NiAzNzcuMzE0LDE5OTkgMzc0LDE5OTkgQzM3MC42ODYsMTk5OSAzNjgsMjAwMS42ODYgMzY4LDIwMDUgQzM2OCwyMDA2Ljg5IDM2OC44NzYsMjAwOC41NzQgMzcwLjI0MiwyMDA5LjY3MyBDMzY2LjU4MywyMDExLjA0OCAzNjQsMjAxNC40NDUgMzY0LDIwMTkgTDM2NiwyMDE5IEMzNjYsMjAxNCAzNjkuNTg5LDIwMTEgMzc0LDIwMTEgQzM3OC40MTEsMjAxMSAzODIsMjAxNCAzODIsMjAxOSBMMzg0LDIwMTkgQzM4NCwyMDE0LjQ0NSAzODEuNDE3LDIwMTEuMDQ4IDM3Ny43NTgsMjAwOS42NzMiIGlkPSJwcm9maWxlLVsjMTMzNV0iPgoKPC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)`}
                            >
    
                            </Flex>
    
                        </Flex>
                    </Flex>
    
                </Flex>
  )
}

export default ETAandProfile