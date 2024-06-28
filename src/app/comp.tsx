'use client'
import { Main, Container, Section, Area, Box, Item, Content } from '@/styles/layouts'

const HomeComponent = () => {
  return (
    <>
      <Main>
        <Container>
          <Section>
            <Area>
              <Box>
                <Item>Item 1</Item>
              </Box>
              <Box>
                <Item>Item 2</Item>
              </Box>
            </Area>
          </Section>
          <Content>This is some content inside the container.</Content>
        </Container>
      </Main>
    </>
  )
}

const testing = () => {
  return (
    <>
      <div>
        <div></div>
      </div>
    </>
  )
}
