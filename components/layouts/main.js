import Head from 'next/head'
import Navbar from '../navbar'
import noSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import Sign3d from '../sign.js'
import NoSsr from '../no-ssr'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"  />
                <title>Spacefok - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <Sign3d />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main