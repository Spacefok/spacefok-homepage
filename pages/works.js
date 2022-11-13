import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbRailWalker from '../public/images/works/railwalker_beta.jpg'
import thumbSiegeofLeningrad from '../public/images/works/siegeofleningrad.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="railwalker" title="RailWalker" thumbnail={thumbRailWalker}>
                            Air Monitoring System «Railwalker: Robot Operations on Rails» with the Use of UAV and AI Elements
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="siegeofleningrad" title="Siege of Leningrad: Egress" thumbnail={thumbSiegeofLeningrad}>
                            A small VR game about an evacuation during World War II
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                        <Heading as="h3" fontSize={20} mb={4}>
                            Collaborations
                        </Heading>
                </Section>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="railwalker" title="RailWalker" thumbnail={thumbRailWalker}>
                            Air Monitoring System «Railwalker: Robot Operations on Rails» with the Use of UAV and AI Elements
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="siegeofleningrad" title="Siege of Leningrad: Egress" thumbnail={thumbSiegeofLeningrad}>
                            A small VR game about an evacuation during World War II
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                        <Heading as="h3" fontSize={20} mb={4}>
                            Old Works
                        </Heading>
                </Section>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="railwalker" title="RailWalker" thumbnail={thumbRailWalker}>
                            Air Monitoring System «Railwalker: Robot Operations on Rails» with the Use of UAV and AI Elements
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="siegeofleningrad" title="Siege of Leningrad: Egress" thumbnail={thumbSiegeofLeningrad}>
                            A small VR game about an evacuation during World War II
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works