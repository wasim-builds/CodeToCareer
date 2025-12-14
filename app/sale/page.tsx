'use client'

import Link from 'next/link'
import { products } from '@/data/products'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { useCart } from '@/contexts/CartContext'
import { useWishlist } from '@/contexts/WishlistContext'

export default function SalePage() {
  const saleProducts = products.filter((p) => p.isSale)
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-gravitas font-bold mb-4">SALE</h1>
      <p className="text-gray-600 mb-8">
        Discover amazing deals on our premium candles. Limited time offers!
      </p>

      {saleProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No sale items available at the moment.</p>
          <Link
            href="/shop"
            className="inline-block mt-4 text-primary-600 hover:text-primary-700"
          >
            Browse all products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => {
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      -{discount}%
                    </span>
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 line-through text-sm">
                        ₹{product.originalPrice?.toFixed(2)}
                      </span>
                      <span className="text-primary-600 font-bold text-lg">
                        ₹{product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`p-2 rounded ${
                        isInWishlist(product.id)
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      } transition-colors`}
                      title={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                      <FiHeart className="w-4 h-4" />
                    </button>
                    {product.variants && product.variants.length > 0 ? (
                      <Link
                        href={`/product/${product.id}`}
                        className="flex-1 bg-primary-600 text-white text-center py-2 rounded hover:bg-primary-700 transition-colors"
                      >
                        Select options
                      </Link>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-primary-600 text-white py-2 rounded hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <FiShoppingCart className="w-4 h-4" />
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

