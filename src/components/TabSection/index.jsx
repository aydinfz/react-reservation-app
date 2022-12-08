import React from "react";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
 
} from "@chakra-ui/react";
import { MainSection } from "../MainSection";
import { HowSection } from "../HowSection";

export function TabSection() {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Reservation Panel</Tab>
        <Tab>How to use?</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MainSection/>
        </TabPanel>
        <TabPanel>
         <HowSection/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
