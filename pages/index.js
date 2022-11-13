import NetxLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Icon,
    useColorModeValue,
    Button,
} from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection , BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'
import thumbYoutube from '../public/images/links/youtube.png'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a developer based in Russia!
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Constantine Bazuev
                        </Heading>
                        <p>Digital Craftzman ( Artist / Developer / Designer )</p>
                    </Box>
                    <Box flexShrlink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/constantine1.jpg"
                            alt="Profile Image"
                            />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Constantine is a free and a full-stack developer based in Ekaterinburg with a
            passion for building digital services/stuff he wants. He has a knack
            for all things launching products, from planning and designing all the
            way to solving real-life problems with code. When not online, he loves
            hanging out with his camera, guitar and some friends :) Currently, he is living off of his own
            project called{' '}
                        <NetxLink href="/works/railwalker">
                            <Link>RailWalker</Link>
                        </NetxLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NetxLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NetxLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title" >
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        Born in Ekaterinburg (Екатеринбург), Russia.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Completed the middle-high school
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 to present</BioYear>
                        Study at College of railway transport and working with some people on some projects
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♡
                    </Heading>
                    <Paragraph>
                        {' '}
                        <Link href="https://www.google.com/search?q=art&sxsrf=ALiCzsZFBoJ8WzSyEBRob8A1JNZgyknCPg:1668292704666&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjN2avQ2qn7AhVqmIsKHSRgD0AQ_AUoAXoECAEQAw&biw=2505&bih=1265&dpr=0.75">
                            Art
                        </Link>
                        ,{' '}
                        <Link href="https://spotify.com">
                            Music
                        </Link>
                        ,{' '}
                        <Link href="https://steamcommunity.com/id/SpaceFok/screenshots/">
                            Drawing
                        </Link>
                        ,{' '}
                        <Link href="https://youtube.com/@spacefok">
                            Videogames
                        </Link>
                        , Photography, Coding
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/Spacefok" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @Spacefok
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/Spacefok" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                    @Spacefok
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://instagram.com/spacefok" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @spacefok
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://discord.com/Spacefok" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    Discord (soon)
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <SimpleGrid columns={[1,2,2]} gap={6}>
                        <GridItem
                            href="https://www.youtube.com/@spacefok"
                            title="Spacefok"
                            thumbnail={thumbYoutube}
                        >
                            My YouTube channel
                        </GridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
    
}

export default Page