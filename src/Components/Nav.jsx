import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import {FaShoppingBag} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Box
            as='nav'
            bg={'gray.900'}
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            padding={'5'}>
            <Link to={'/'}>
                <Heading color={'white'}>OnlineShop</Heading>
            </Link>
            <Box
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                position={'relative'}>
                <Link to={'/cart'}>
                    <FaShoppingBag
                        color={'white'}
                        size={30}
                    />
                </Link>
                <Box
                    as='span'
                    h={'6'}
                    w={'5'}
                    rounded={'full'}
                    bg={'yellow'}
                    textAlign={'center'}
                    position={'absolute'}
                    top={0}
                    left={5}>
                    2
                </Box>
            </Box>
        </Box>
    )
}

export default Nav
