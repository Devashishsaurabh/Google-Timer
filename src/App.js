
import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
        <Tab><Heading>Stopwatch</Heading></Tab>
        <Tab><Heading>Timer</Heading></Tab>
          
        </TabList>
        <TabPanels>
          <TabPanel>
          <Stopwatch />
          </TabPanel>
          <TabPanel>
            <Timer />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
