import navLinkData from 'assets/navLinkData.json';
import JsonToArrayDeserializer from 'serializers/JsonToArrayDeserializer';

export const NavbarItemDataProvider = () => JsonToArrayDeserializer(navLinkData);
