import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Blurhash } from 'react-blurhash';
import { motion } from 'framer-motion';
import { maxDeviceSize } from 'utils/deviceSize';
import { colors } from 'utils/colors';

export const BlurImage = ({
  src,
  alt,
  hash,
  width,
  height,
  small,
  bgcolor,
  style,
  fullwidth,
  boxShadow,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width={Number(width)}
          height={Number(height)}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && (
        <StyledImageContainer small={small} bgcolor={bgcolor}>
          <StyledImage
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ opacity: { duration: 0.1 } }}
            src={src}
            loading="lazy"
            alt={alt}
            width={width}
            height={height}
            style={style}
            fullwidth={fullwidth}
            boxShadow={boxShadow}
          />
        </StyledImageContainer>
      )}
    </>
  );
};

BlurImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  small: PropTypes.string,
  bgcolor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  fullwidth: PropTypes.string,
  boxShadow: PropTypes.string,
};

BlurImage.defaultProps = {
  width: '400',
  height: '400',
  bgcolor: colors.lightBlack,
  small: 'false',
  style: { border: '1px solid rgba(228, 183, 116, 0.74)' },
  fullwidth: 'false',
  boxShadow: 'true',
};

const StyledImage = styled(motion.img)`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  display: block;
  border: 2px solid ${colors.rottenGreen};
  transition: ease-in-out 0.3s;
  box-shadow: ${({ boxShadow }) =>
    boxShadow === 'true' ? '8px 8px 24px 0px rgba(66, 68, 90, 1)' : 'none'};
  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
  @media ${maxDeviceSize.tablet} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImageContainer = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
  width: ${({ small }) => (small === 'true' ? '200px' : 'auto')};
  height: ${({ small }) => (small === 'true' ? '200px' : 'auto')};

  @media ${maxDeviceSize.tablet} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
