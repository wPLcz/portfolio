export interface ContactPage {
  name: string;
  email: Channel;
  linkedin: Channel;
  codewars: Channel;
  github: Channel;
  facebook: Channel;
  instagram: Channel;
}

export interface Channel {
  channel: string;
  value: string;
}