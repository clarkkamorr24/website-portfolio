export type ContactCategory = "Social Media" | "Email" | "location";

export type ContactItem = {
  id: number;
  icon: string;
  name: string;
  username: string;
  category: ContactCategory;
  url?: string;
};

export type ContactSection = {
  title: string;
  description: string;
  contents: ContactItem[];
};

export type Contact = {
  contact: ContactSection;
};
