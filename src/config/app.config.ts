interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company details',
    'View company outlets',
    'View available tools at an outlet',
    'Rent a tool',
    'Manage rental details',
    'View personal rentals',
  ],
  ownerAbilities: [
    'Manage company creation',
    'Invite Admin',
    'View company details',
    'View company outlets',
    'Rent tools',
    'Manage rental details',
    'View rentals',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/6b719fb1-9860-4243-af2f-3228f17b9e99',
};
