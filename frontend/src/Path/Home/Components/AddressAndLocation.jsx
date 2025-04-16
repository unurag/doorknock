import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

const AddressAndLocation = () => {
  return (
                <Flex
                    w='100%'
                    h='auto'
                    px={1}
                    alignItems='center'
                    mt={['-0.5rem', '-1rem']}
                    // mt='-2.5rem'
                >
    
                    <Flex
                        w='1.5rem'
                        h='1.5rem'
                        bgSize='1.5rem'
                        bgPos='center left'
                        bgRepeat='no-repeat'
                        bgImage={`url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Im0gOCAwIGMgLTMuMzEyNSAwIC02IDIuNjg3NSAtNiA2IGMgMC4wMDc4MTIgMC43MTA5MzggMC4xMzY3MTkgMS40MTQwNjIgMC4zODY3MTkgMi4wNzgxMjUgbCAtMC4wMTU2MjUgLTAuMDAzOTA2IGMgMC42MzY3MTggMS45ODgyODEgMy43ODEyNSA1LjA4MjAzMSA1LjYyNSA2LjkyOTY4NyBoIDAuMDAzOTA2IHYgLTAuMDAzOTA2IGMgMS41MDc4MTIgLTEuNTA3ODEyIDMuODc4OTA2IC0zLjkyNTc4MSA1LjA0Njg3NSAtNS43NTM5MDYgYyAwLjI2MTcxOSAtMC40MTQwNjMgMC40Njg3NSAtMC44MDg1OTQgMC41ODU5MzcgLTEuMTcxODc1IGwgLTAuMDE5NTMxIDAuMDAzOTA2IGMgMC4yNSAtMC42NjQwNjMgMC4zODI4MTMgLTEuMzY3MTg3IDAuMzg2NzE5IC0yLjA3ODEyNSBjIDAgLTMuMzEyNSAtMi42ODM1OTQgLTYgLTYgLTYgeiBtIDAgMy42OTE0MDYgYyAxLjI3MzQzOCAwIDIuMzA4NTk0IDEuMDM1MTU2IDIuMzA4NTk0IDIuMzA4NTk0IHMgLTEuMDM1MTU2IDIuMzA4NTk0IC0yLjMwODU5NCAyLjMwODU5NCBjIC0xLjI3MzQzOCAtMC4wMDM5MDYgLTIuMzA0Njg4IC0xLjAzNTE1NiAtMi4zMDQ2ODggLTIuMzA4NTk0IGMgLTAuMDAzOTA2IC0xLjI3MzQzOCAxLjAzMTI1IC0yLjMwNDY4OCAyLjMwNDY4OCAtMi4zMDg1OTQgeiBtIDAgMCIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=)`}
                    >
    
                    </Flex>
    
                    <Flex
                        w='90%'
                        h='auto'
                        ml={1}
                        color='text.homeminutes'
                    >
    
                        <Flex
                            flexDir='column'
                        >
                            <Flex
                                alignItems='center'
                            >
                                <Text fontWeight='800' fontSize={['1rem', '1.5rem']} >Home</Text>
                                <Image src={`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNS43MDcxMSA5LjcxMDY5QzUuMzE2NTggMTAuMTAxMiA1LjMxNjU4IDEwLjczNDQgNS43MDcxMSAxMS4xMjQ5TDEwLjU5OTMgMTYuMDEyM0MxMS4zODA1IDE2Ljc5MjcgMTIuNjQ2MyAxNi43OTI0IDEzLjQyNzEgMTYuMDExN0wxOC4zMTc0IDExLjEyMTNDMTguNzA4IDEwLjczMDggMTguNzA4IDEwLjA5NzYgMTguMzE3NCA5LjcwNzA4QzE3LjkyNjkgOS4zMTY1NSAxNy4yOTM3IDkuMzE2NTUgMTYuOTAzMiA5LjcwNzA4TDEyLjcxNzYgMTMuODkyN0MxMi4zMjcxIDE0LjI4MzMgMTEuNjkzOSAxNC4yODMyIDExLjMwMzQgMTMuODkyN0w3LjEyMTMyIDkuNzEwNjlDNi43MzA4IDkuMzIwMTYgNi4wOTc2MyA5LjMyMDE2IDUuNzA3MTEgOS43MTA2OVoiIGZpbGw9IiMwRjBGMEYiLz4KPC9zdmc+`} w='1.2rem' h='1.2rem' />
                            </Flex>
    
                            <Text fontWeight='500' color='text.maindim' fontSize={['1rem', '1.5rem']} mt={['-0.4rem', '-0.6rem']}>D1 502, Shalimar Mannat, India</Text>
                        </Flex>
    
                    </Flex>
    
                </Flex>
  )
}

export default AddressAndLocation