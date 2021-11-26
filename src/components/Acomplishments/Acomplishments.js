import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Projects' },
  { number: 1000, text: 'Students', },
  { number: 12, text: 'Demoed Hackatons', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (

  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((item, index) => (
        <Box key={index}>
          <BoxNum>{item.number}</BoxNum>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>

);

export default Acomplishments;
