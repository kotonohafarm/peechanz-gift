
import React from 'react';

interface PurchaseButtonProps {
  promoCode?: string;
  purchaseUrl?: string;
}

export const PurchaseButton: React.FC<PurchaseButtonProps> = ({ promoCode, purchaseUrl }) => {
  if (!promoCode || !purchaseUrl) {
    return null;
  }

  return (
    <div className="mt-8 text-center">
      <p className="text-lg text-gray-800 mb-4">
        プロモーションコード: <span className="font-bold text-red-600 bg-yellow-200 px-2 py-1 rounded">{promoCode}</span>
      </p>
      <a
        href={purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
      >
        今すぐ購入する
      </a>
    </div>
  );
};
