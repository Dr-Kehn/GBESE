export interface Bank {
  name: string;
  account: string;
  logo: string;
  accountNumber: number;
}

export const mockBanks: Bank[] = [
  { name: 'UBA', account: 'Ubuara Dorothy', logo: '/banks/UBA.png', accountNumber: 7034758922 },
  { name: 'First Bank', account: 'Okereke Khen', logo: '/banks/FirstBank.png', accountNumber: 1219894627 },
  { name: 'Zenith Bank', account: 'Divine Tochi', logo: '/banks/Zenith.jpg', accountNumber: 6030123456 },
  { name: 'Access Bank', account: 'Chukwudi Chijioke', logo: '/banks/accessbank.png', accountNumber: 1234567890 },
];

// Simulated API call
export const fetchBanks = (): Promise<Bank[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBanks);
    }, 1000); // simulate 1 second delay
  });
};
