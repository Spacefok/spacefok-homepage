import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="RailWalker">
            <Container>
                <Title>
                    RailWalker <Badge>2019</Badge>
                </Title>
                <P>
                Drone is used for testing conditions of rail insulated joints. It can take off, land on rails and go on them to an insulated joint. It can measure a level of ballast trimming, check rails for short circuits and breaks, measure distance between rails.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Chat-bot</Meta>
                        <Link href='https://t.me/RailWalker_bot/'>
                            RailWalker_bot <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Countries</Meta>
                            <span>Russia, other coming soon...</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>Arduino, TelegramAPI, serverPython</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href='404'>
                            Coming soon <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/railwalker_01.jpg" alt="RailWalker" />
                <WorkImage src="/images/works/railwalker_02.jpg" alt="RailWalker" />
            </Container>
        </Layout>
    )
}

export default Work