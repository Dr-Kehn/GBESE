"use client";

import { Button } from "@/components/ui/button";
import CryptoChart from "../Chart/CryptoChart";
import { FaArrowCircleDown, FaArrowCircleUp, FaCopy, FaDownload } from "react-icons/fa";
import { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import QRCode from "react-qr-code";
import { copyToClipboard, downloadQRCode, useIsMobile } from "@/lib/utils";

interface CryptoDetailsProps {
  currency: string;
  onBack: () => void;
}

export function CryptoDetailPage({ currency, onBack }: CryptoDetailsProps) {
  const isMobile = useIsMobile();
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [receiveDialogOpen, setReceiveDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    address: "",
    amount: ""
  });
  
  //test address
  const walletAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";

  // Map crypto IDs to TradingView symbols
  const symbolMap: Record<string, string> = {
    ETH: "BITSTAMP:ETHUSD",
    USDC: "COINBASE:USDTUSDC",
    GBESE: "BINANCE:GBSUSDT",
  };

  const tradingViewSymbol = symbolMap[currency] ?? "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // function for internal
  const handleSendInternal = () => {
    console.log("Sending internally:", formData.userName, formData.amount);
    setSendDialogOpen(false);
  };

  // function for external
  const handleSendOnchain = () => {
    console.log("Sending onchain:", formData.address, formData.amount);
    setSendDialogOpen(false);
  };


  return (
    <div>
      <div className="p-4 bg-black text-white">
        <button className="text-blue-500 underline mb-4" onClick={onBack}>
          Back
        </button>
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            {currency.charAt(0).toUpperCase() + currency.slice(1)} Chart
          </h1>
          <p className="text-gray-400">Live price chart</p>
        </div>

        {/* TradingView Chart */}
        <div className="bg-white rounded-lg p-4 mb-6">
          {tradingViewSymbol === "" ? (
            <div className="text-center text-red-500">
              No chart available for this currency yet.
            </div>
          ) : (
            <CryptoChart pair={tradingViewSymbol} />
          )}
        </div>

        <div className="flex justify-center gap-4 items-center">
          <div>
            <Button
              className="p-6 w-30 rounded-full bg-blue-500"
              onClick={() => setSendDialogOpen(true)}
            >
              Send
              <FaArrowCircleUp className="ml-2" />
            </Button>
          </div>
          <div>
            <Button 
              className="p-6 w-30 rounded-full bg-gray-600"
              onClick={() => setReceiveDialogOpen(true)}
            >
              Receive
              <FaArrowCircleDown className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Send Dialog */}
      <Dialog open={sendDialogOpen} onOpenChange={setSendDialogOpen}>
        <DialogContent className="bg-[#141414] text-white border-none md:p-14 p-8" >
          <DialogHeader>
            <DialogTitle>Send {currency}</DialogTitle>
            <DialogDescription>
              Choose how you want to send your {currency}
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="internal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-500">
              <TabsTrigger value="internal" className="text-white">Internal</TabsTrigger>
              <TabsTrigger value="onchain" className="text-white">Onchain</TabsTrigger>
            </TabsList>
            
            <TabsContent value="internal" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="userName">Username</Label>
                <Input 
                  id="userName" 
                  name="userName"
                  placeholder="Enter recipient username"
                  value={formData.userName}
                  onChange={handleInputChange}
                  className=" border-gray-700 p-6"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="internalAmount">Amount</Label>
                <Input 
                  id="internalAmount" 
                  name="amount"
                  type="number"
                  placeholder={`Amount in ${currency}`}
                  value={formData.amount}
                  onChange={handleInputChange}
                  className=" border-gray-700 p-6"
                />
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleSendInternal}
              >
                Send {currency}
              </Button>
            </TabsContent>
            
            <TabsContent value="onchain" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="address">Wallet Address</Label>
                <Input 
                  id="address" 
                  name="address"
                  placeholder="Enter wallet address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className=" border-gray-700 p-6"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="onchainAmount">Amount</Label>
                <Input 
                  id="onchainAmount" 
                  name="amount"
                  type="number"
                  placeholder={`Amount in ${currency}`}
                  value={formData.amount}
                  onChange={handleInputChange}
                  className=" border-gray-700 p-6"
                />
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleSendOnchain}
              >
                Send {currency}
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Receive Dialog */}
      <Dialog open={receiveDialogOpen} onOpenChange={setReceiveDialogOpen}>
        <DialogContent className="bg-[#141414] flex flex-col justify-center mx-auto  text-white border-none">
          <DialogHeader>
            <DialogTitle  className="text-center">Receive {currency}</DialogTitle>
          </DialogHeader>
          
          <Card className="p-6 flex flex-col items-center bg-transparent border-none">
            <div className=" p-4 rounded-lg mb-4 bg-white">
              <QRCode
                id="wallet-qr-code"
                value={walletAddress}
                size={
                  isMobile ? 128 : 150
                }
              />
            </div>
            
            <div className="w-full p-2 rounded-md flex items-center justify-center mb-4">
              <div className="text-sm truncate w-3/5 text-gray-400">
                {walletAddress}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => copyToClipboard(walletAddress)}
                className="text-gray-300"
              >
                <FaCopy />
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => downloadQRCode(currency)}
              className="bg-transparent text-white"
            >
              <FaDownload className="mr-2" />
              Save Image
            </Button>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}