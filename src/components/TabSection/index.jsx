import React from "react";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import { MainSection } from "../MainSection";
import { HowSection } from "../HowSection";

export function TabSection() {
  return (
    <Container h="100vh" maxW="container.lg">
      <Tabs variant="enclosed" colorScheme="gray">
        <TabList p={1}>
          <Tab>Reservation Panel</Tab>
          <Tab>How to use?</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MainSection />
          </TabPanel>
          <TabPanel>
            <HowSection />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
