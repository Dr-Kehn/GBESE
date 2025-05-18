"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ILoanOfferAddResponse,
  useGetAllLoanOfferMutation,
} from "@/redux/services/slices/loanSlice";

export default function MarketplacePage() {
  const pathname = usePathname();
  const activeTab = pathname === "/marketplace/debtors" ? "debtors" : "lenders";

  const [getAllLoanOffers] = useGetAllLoanOfferMutation();
  const [loanOffers, setLoanOffers] = useState<ILoanOfferAddResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchLoanOffers = async () => {
      try {
        const response = await getAllLoanOffers(null).unwrap();
        console.log("response:", response);
        
        if (Array.isArray(response)) {
          setLoanOffers(response);
          // Calculate total pages
          setTotalPages(Math.ceil(response.length / itemsPerPage));
        } else {
          console.error("Expected an array but got:", response);
        }
      } catch (error) {
        console.error("Error fetching loan offers:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchLoanOffers();
  }, [getAllLoanOffers, itemsPerPage]);
  
  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = loanOffers.slice(indexOfFirstItem, indexOfLastItem);
  
  // Change page
  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Add current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }
    
    // Add ellipsis where needed
    const result = [];
    let prevPage = null;
    
    for (const page of pages) {
      if (prevPage && page - prevPage > 1) {
        result.push("ellipsis");
      }
      result.push(page);
      prevPage = page;
    }
    
    return result;
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 px-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1E58FF] mb-3 md:mb-0">
            Lenders Marketplace
          </h1>
          <div className="flex gap-2">
            <Link href="/w2/marketplace">
              <Button
                variant="outline"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "lenders"
                    ? "bg-balance-card text-white"
                    : "text-gray-500 hover:bg-balance-card hover:text-white"
                }`}
              >
                Lenders
              </Button>
            </Link>
            <Link href="/w2/marketplace/debtors">
              <Button
                variant="outline"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "debtors"
                    ? "bg-balance-card text-white"
                    : "text-gray-500 hover:bg-balance-card hover:text-white"
                }`}
              >
                Debtors
              </Button>
            </Link>
          </div>
        </div>

        {/* Table */}
        {activeTab === "lenders" && (
          <Card className="rounded-xl overflow-x-auto">
            <CardContent className="p-0">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-[#EFF3FD] text-gray-700">
                  <tr>
                    <th className="px-6 py-3">Lenders</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Payment Duration</th>
                    <th className="px-6 py-3">Interest Rate</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {isLoading ? (
                    <tr>
                      <td colSpan={5} className="text-center py-6">
                        Loading offers...
                      </td>
                    </tr>
                  ) : currentItems.length > 0 ? (
                    currentItems.map((offer, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {offer.lenderId.username}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ₦ {offer.minLoanAmount} - ₦ {offer.maxLoanAmount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {offer.terms} Month(s)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {offer.terms}% Interest Rate
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link href="/w2/dashboard/borrow/loan">
                            <Button
                              className="bg-blue-600 border text-white hover:bg-blue-700 hover:text-white transition-colors"
                              variant="outline"
                            >
                              Borrow Money
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center py-6 text-gray-500">
                        No loan offers available at the moment.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 0 && (
          <div className="flex justify-between items-center mt-6">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &larr; Previous
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              {getPaginationNumbers().map((page, index) => (
                page === "ellipsis" ? (
                  <span key={`ellipsis-${index}`}>...</span>
                ) : (
                  <span 
                    key={`page-${page}`}
                    className={`px-2 py-1 rounded cursor-pointer ${
                      currentPage === page 
                        ? "bg-[#1E58FF] text-white" 
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => goToPage(page as number)}
                  >
                    {page}
                  </span>
                )
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next &rarr;
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}