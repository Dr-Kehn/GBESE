export interface Bank {
  name: string;
  account: string;
  logo: string;
}

export const mockBanks: Bank[] = [
  { name: 'GTBank', account: 'Ubuara Dorothy', logo: '/banks/gtbank.png' },
  { name: 'First Bank', account: 'Okereke Khen', logo: '/banks/firstbank.png' },
  { name: 'Zenith Bank', account: 'Divine Tochi', logo: '/banks/zenithbank.png' },
];

// Simulated API call
export const fetchBanks = (): Promise<Bank[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBanks);
    }, 1000); // simulate 1 second delay
  });
};
