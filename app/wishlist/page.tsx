'use client'

import Link from 'next/link'
import { useWishlist } from '@/contexts/WishlistContext'
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi'
import { useCart } from '@/contexts/CartContext'

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <FiHeart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Your wishlist is empty</h1>
        <p className="text-gray-600 mb-8">Start adding products to your wishlist.</p>
        <Link
          href="/shop"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-gravitas font-bold mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
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
                {product.isSale && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    SALE
                  </span>
                )}
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center justify-between mb-3">
                {product.originalPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through text-sm">
                      €{product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-primary-600 font-bold">
                      €{product.price.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-primary-600 font-bold">
                    €{product.price.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                  title="Remove from wishlist"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
                {product.variants && product.variants.length > 0 ? (
                  <Link
                    href={`/product/${product.id}`}
                    className="flex-1 bg-primary-600 text-white text-center py-2 rounded hover:bg-primary-700 transition-colors"
                  >
                    View Options
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      addToCart(product)
                      removeFromWishlist(product.id)
                    }}
                    className="flex-1 bg-primary-600 text-white py-2 rounded hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FiShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

