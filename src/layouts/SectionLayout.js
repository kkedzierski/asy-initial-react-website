import styled from 'styled-components';
import { maxDeviceSize } from 'utils/DeviceSize';
import { colors } from 'utils/colors';

const SectionLayout = styled.div`
  position: relative;
  width: 100%;
  background: ${({ secondary }) => (secondary ? colors.lightBlack : colors.primary)};
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1500px) / 2);

  @media ${maxDeviceSize.tablet} {
    flex-direction: column;
    /* align-items: center; */
    padding: 2rem calc((100vw - 1500px) / 2);
  }

  @media ${maxDeviceSize.smallScreen} {
    padding: 4rem calc((100vw - 1000px) / 2);
  }

  @media ${maxDeviceSize.verySmallScreen} {
    padding: 4rem calc((100vw - 1000px) / 2);
  }
`;

export default SectionLayout;
