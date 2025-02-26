export interface Image {
  url: string;
}

export interface Button {
  link: string;
  text: string;
}

export interface Main {
  title: string;
  description: string;
  image: Image;
  button: Button;
}

export interface Client {
  text: string;
  logo: Image;
}

export interface OurClients {
  title: string;
  subtitle: string;
  clients: Client[];
}

export interface Card {
  title: string;
  description: string;
  icon: Image;
}

export interface Community {
  title: string;
  subtitle: string;
  cards: Card[];
}

export interface Info1 {
  title: string;
  description: string;
  image: Image;
  button?: Button;
}
export interface InfoActionType {
  title: string;
  description: string;
  image: Image;
  button?: Button;
}

export interface Metrix {
  title: string;
  description: string;
  icon: Image;
}

export interface OurMetrix {
  title: string;
  subtitle: string;
  metrix: Metrix[];
}

export interface Info2 {
  title: string;
  description: string;
  image: Image;
}

export interface MarketingCard {
  description: string;
  image: Image;
  read_more: {
    url: string;
    title: string;
  };
}

export interface Marketing {
  title: string;
  subtitle: string;
  cards: MarketingCard[];
}

export interface Testimonial {
  testomonial: string;
  position: string;
  author: string;
  image: Image;
  customers: {
    url: string;
  }[];
}

export interface GetDemo {
  title: string;
  goTo: Button;
}

export interface LandingPage {
  main: Main;
  our_clients: OurClients;
  community: Community;
  info_1: InfoActionType;
  ourMetrix: OurMetrix;
  info_2: InfoActionType;
  marketing: Marketing;
  testimonial: Testimonial;
  [key: string]: SectionContent;
}

export type SectionContent =
  | Main
  | OurClients
  | Community
  | Info1
  | OurMetrix
  | Info2
  | Marketing
  | Testimonial
  | InfoActionType
  | GetDemo;

export type SectionName =
  | "main"
  | "our_clients"
  | "community"
  | "info_1"
  | "ourMetrix"
  | "info_2"
  | "marketing"
  | "testimonial"
  | "getDemo";
