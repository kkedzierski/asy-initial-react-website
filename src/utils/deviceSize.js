const size = {
  smallScreen: '1530px',
  verySmallScreen: '1230px',
  tablet: '1111px',
  phone: '576px',
};

export const maxDeviceSize = {
  smallScreen: `(max-width: ${size.smallScreen})`,
  verySmallScreen: `(max-width: ${size.verySmallScreen})`,
  tablet: `(max-width: ${size.tablet})`,
  phone: `(max-width: ${size.phone})`,
};

export const minDeviceSize = {
  smallScreen: `(min-width: ${size.smallScreen})`,
  verySmallScreen: `(min-width: ${size.verySmallScreen})`,
  tablet: `(min-width: ${size.tablet})`,
  phone: `(min-width: ${size.phone})`,
};
