"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Filter, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";

// Mock products with detailed metadata
const products = [
  { 
    id: "1", 
    name: "The Signature Charcoal Suit", 
    price: "NPR 45,000", 
    priceValue: 45000,
    fabric: "Wool",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593032465175-481ac7f4ce4a?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938384824-0227670e3092?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=2000&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#4A4A4A", label: "Charcoal", imageIndex: 0 },
      { hex: "#2C3E50", label: "Navy", imageIndex: 1 },
      { hex: "#1A1A1A", label: "Black", imageIndex: 2 }
    ],
    category: "suits" 
  },
  { 
    id: "2", 
    name: "Classic Navy Blazer", 
    price: "NPR 32,000", 
    priceValue: 32000,
    fabric: "Wool",
    images: [
      "https://images.unsplash.com/photo-1592878904946-b3ce8ae24ea5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030103066-009c201fc182?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592878844026-6d557f920f78?q=80&w=2000&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#000080", label: "Navy", imageIndex: 0 },
      { hex: "#483D8B", label: "Slate Blue", imageIndex: 1 },
      { hex: "#2F4F4F", label: "Dark Slate", imageIndex: 2 }
    ],
    category: "blazers" 
  },
  { 
    id: "3", 
    name: "Midnight Silk Tuxedo", 
    price: "NPR 58,000", 
    priceValue: 58000,
    fabric: "Silk",
    images: [
      "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549443105-95077a2827a3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550993013-1498d384372b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=2070&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#191970", label: "Midnight", imageIndex: 0 },
      { hex: "#000000", label: "Jet Black", imageIndex: 1 }
    ],
    category: "tuxedos" 
  },
  { 
    id: "4", 
    name: "Italian Wool Overcoat", 
    price: "NPR 65,000", 
    priceValue: 65000,
    fabric: "Wool",
    images: [
      "https://images.unsplash.com/photo-1520975954732-57dd00842880?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975661595-6453be3f3070?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?q=80&w=2070&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#8B4513", label: "Camel", imageIndex: 0 },
      { hex: "#708090", label: "Slate Grey", imageIndex: 1 },
      { hex: "#556B2F", label: "Olive", imageIndex: 2 }
    ],
    category: "outerwear" 
  },
  { 
    id: "5", 
    name: "Light Gray Linen Suit", 
    price: "NPR 38,000", 
    priceValue: 38000,
    fabric: "Linen",
    images: [
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593032463870-738980ec8905?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?q=80&w=1974&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#D3D3D3", label: "Light Gray", imageIndex: 0 },
      { hex: "#F5F5DC", label: "Beige", imageIndex: 1 }
    ],
    category: "suits" 
  },
  { 
    id: "6", 
    name: "White Poplin Dress Shirt", 
    price: "NPR 8,500", 
    priceValue: 8500,
    fabric: "Cotton",
    images: [
      "https://images.unsplash.com/photo-1620012253295-c15bc3a6f144?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2070&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#FFFFFF", label: "White", imageIndex: 0 },
      { hex: "#ADD8E6", label: "Light Blue", imageIndex: 1 }
    ],
    category: "shirts" 
  },
  { 
    id: "7", 
    name: "Dark Navy Wool Trousers", 
    price: "NPR 18,500", 
    priceValue: 18500,
    fabric: "Wool",
    images: [
      "https://images.unsplash.com/photo-1594938384824-0227670e3092?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593032463870-738980ec8905?q=80&w=1974&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#1A1A1A", label: "Black", imageIndex: 0 },
      { hex: "#2C3E50", label: "Navy", imageIndex: 1 }
    ],
    category: "accessories" 
  },
  { 
    id: "8", 
    name: "Velvet Dinner Jacket", 
    price: "NPR 48,000", 
    priceValue: 48000,
    fabric: "Silk",
    images: [
      "https://images.unsplash.com/photo-1555061527-380d6f30a5cb?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#4B0082", label: "Indigo", imageIndex: 0 },
      { hex: "#000000", label: "Jet Black", imageIndex: 1 }
    ],
    category: "tuxedos" 
  },
  { 
    id: "9", 
    name: "Silk Pocket Square", 
    price: "NPR 3,500", 
    priceValue: 3500,
    fabric: "Silk",
    images: [
      "https://images.unsplash.com/photo-1614179662397-21a46b607060?q=80&w=2000&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#8B0000", label: "Dark Red", imageIndex: 0 },
      { hex: "#DB7093", label: "Pale Violet Red", imageIndex: 1 }
    ],
    category: "accessories" 
  },
  { 
    id: "10", 
    name: "Handmade Suede Loafers", 
    price: "NPR 15,000", 
    priceValue: 15000,
    fabric: "Linen",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=2000&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#D2691E", label: "Chocolate", imageIndex: 0 },
      { hex: "#8B4513", label: "Saddle Brown", imageIndex: 1 }
    ],
    category: "accessories" 
  },
  { 
    id: "11", 
    name: "Checkered Cashmere Scarf", 
    price: "NPR 12,000", 
    priceValue: 12000,
    fabric: "Cashmere",
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=2000&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#696969", label: "Dim Gray", imageIndex: 0 }
    ],
    category: "accessories" 
  },
  { 
    id: "12", 
    name: "Double Breasted Camel Coat", 
    price: "NPR 72,000", 
    priceValue: 72000,
    fabric: "Wool",
    images: [
      "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?q=80&w=2070&auto=format&fit=crop"
    ], 
    colors: [
      { hex: "#C19A6B", label: "Camel", imageIndex: 0 }
    ],
    category: "outerwear" 
  },
];

const categories = ["Suits", "Tuxedos", "Blazers", "Shirts", "Outerwear", "Accessories"];
const fabrics = ["Wool", "Silk", "Linen", "Cotton", "Cashmere"];
const priceRanges = [
  { label: "Under NPR 10,000", min: 0, max: 10000 },
  { label: "NPR 10,000 - 30,000", min: 10000, max: 30000 },
  { label: "NPR 30,000 - 50,000", min: 30000, max: 50000 },
  { label: "Over NPR 50,000", min: 50000, max: 1000000 },
];
const colors = [
  { label: "Black", hex: "#000000" },
  { label: "Navy", hex: "#000080" },
  { label: "Charcoal", hex: "#4A4A4A" },
  { label: "White", hex: "#FFFFFF" },
  { label: "Camel", hex: "#8B4513" },
];

const ITEMS_PER_PAGE = 6;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePriceRange, setActivePriceRange] = useState<string | null>(null);
  const [activeFabric, setActiveFabric] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  
  const [wishlistedIds, setWishlistedIds] = useState<string[]>([]);
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<'added' | 'removed' | null>(null);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const handleWishlistToggle = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isAdding = !wishlistedIds.includes(id);
    setWishlistedIds(prev => isAdding ? [...prev, id] : prev.filter(item => item !== id));
    setLastAction(isAdding ? 'added' : 'removed');
    if (isAdding) {
      setActiveModalId(id);
    } else {
      setActiveTooltipId(id);
      setTimeout(() => setActiveTooltipId(null), 2000);
    }
  };

  const clearAllFilters = () => {
    setActiveCategory("All");
    setActivePriceRange(null);
    setActiveFabric(null);
    setActiveColor(null);
    setCurrentPage(1);
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activePriceRange, activeFabric, activeColor, sortBy]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter(p => {
      // Category Filter
      if (activeCategory !== "All" && p.category !== activeCategory.toLowerCase()) return false;
      
      // Price Filter
      if (activePriceRange) {
        const range = priceRanges.find(r => r.label === activePriceRange);
        if (range && (p.priceValue < range.min || p.priceValue > range.max)) return false;
      }
      
      // Fabric Filter
      if (activeFabric && p.fabric !== activeFabric) return false;
      
      // Color Filter
      if (activeColor) {
        const hasColor = p.colors.some(c => c.label === activeColor);
        if (!hasColor) return false;
      }
      
      return true;
    });

    // Sorting
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.priceValue - a.priceValue);
    }

    return result;
  }, [activeCategory, activePriceRange, activeFabric, activeColor, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const hasAnyFilter = activeCategory !== "All" || activePriceRange || activeFabric || activeColor;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="pt-24 min-h-screen bg-secondary w-full">
      <div className="bg-primary text-secondary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-4">Shop Collection</h1>
        <p className="text-neutral-gray font-sans tracking-wide">Elevate your wardrobe with our meticulously crafted pieces.</p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="flex items-center justify-between border-b border-neutral-light pb-4 mb-6">
            <div className="flex items-center gap-2 font-serif text-xl">
              <Filter size={20} />
              <h2>Filters</h2>
            </div>
            {hasAnyFilter && (
              <button 
                onClick={clearAllFilters}
                className="text-xs font-sans uppercase tracking-widest text-accent hover:text-primary transition-colors flex items-center gap-1"
              >
                Clear All <X size={12} />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <FilterSection title="Category">
            <ul className="space-y-3 font-sans text-primary">
              <li key="All">
                <button 
                  onClick={() => setActiveCategory("All")}
                  className={`hover:text-accent transition-colors ${activeCategory === "All" ? 'text-accent font-medium' : ''}`}
                >
                  All Collections
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`hover:text-accent transition-colors ${activeCategory === cat ? 'text-accent font-medium' : ''}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </FilterSection>

          {/* Price Filter */}
          <FilterSection title="Price">
            <ul className="space-y-3 font-sans text-primary">
              {priceRanges.map((range) => (
                <li key={range.label}>
                  <button 
                    onClick={() => setActivePriceRange(activePriceRange === range.label ? null : range.label)}
                    className={`hover:text-accent transition-colors text-left ${activePriceRange === range.label ? 'text-accent font-medium' : ''}`}
                  >
                    {range.label}
                  </button>
                </li>
              ))}
            </ul>
          </FilterSection>

          {/* Color Filter */}
          <FilterSection title="Color">
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.label}
                  onClick={() => setActiveColor(activeColor === color.label ? null : color.label)}
                  className={`group relative flex flex-col items-center gap-2 transition-all ${activeColor === color.label ? 'scale-110' : ''}`}
                  title={color.label}
                >
                  <div 
                    className={`w-8 h-8 rounded-full border border-neutral-light p-0.5 transition-all ${activeColor === color.label ? 'ring-2 ring-accent ring-offset-2' : 'hover:ring-1 hover:ring-neutral-gray'}`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className={`text-[10px] uppercase tracking-tighter transition-colors ${activeColor === color.label ? 'text-accent font-bold' : 'text-neutral-gray'}`}>
                    {color.label}
                  </span>
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Fabric Filter */}
          <FilterSection title="Fabric">
            <div className="flex flex-wrap gap-2">
              {fabrics.map((fabric) => (
                <button
                  key={fabric}
                  onClick={() => setActiveFabric(activeFabric === fabric ? null : fabric)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all ${activeFabric === fabric ? 'bg-primary text-secondary border-primary' : 'border-neutral-light hover:border-primary'}`}
                >
                  {fabric}
                </button>
              ))}
            </div>
          </FilterSection>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-10 text-sm font-sans text-neutral-gray tracking-wide bg-white/50 p-4 backdrop-blur-sm shadow-sm rounded-sm">
            <p>Showing <span className="font-bold text-primary">{filteredAndSortedProducts.length}</span> Results</p>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-neutral-light rounded-sm px-3 py-1 outline-none font-medium text-primary cursor-pointer hover:border-primary transition-colors"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {paginatedProducts.length > 0 ? (
              <>
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  {paginatedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard 
                        product={product}
                        wishlistedIds={wishlistedIds}
                        handleWishlistToggle={handleWishlistToggle}
                        activeTooltipId={activeTooltipId}
                        activeModalId={activeModalId}
                        setActiveModalId={setActiveModalId}
                        lastAction={lastAction}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Pagination UI */}
                {totalPages > 1 && (
                  <div className="mt-16 flex justify-center items-center gap-4">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 border border-neutral-light rounded-full disabled:opacity-20 hover:border-primary transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }).map((_, idx) => {
                        const page = idx + 1;
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 flex items-center justify-center font-sans text-sm tracking-widest transition-all cursor-pointer ${currentPage === page ? 'bg-primary text-secondary' : 'hover:bg-neutral-light border border-transparent hover:border-neutral-light'}`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 border border-neutral-light rounded-full disabled:opacity-20 hover:border-primary transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="w-20 h-20 bg-neutral-light rounded-full flex items-center justify-center mb-6">
                  <Filter size={32} className="text-neutral-gray" />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-2">No matching pieces found</h3>
                <p className="text-neutral-gray max-w-xs mx-auto mb-8 font-sans">Try adjusting your filters or clearing them to see all products.</p>
                <button 
                  onClick={clearAllFilters}
                  className="px-8 py-3 bg-primary text-secondary font-sans uppercase tracking-[0.2em] text-xs hover:bg-accent transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-8 border-b border-neutral-light pb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center font-serif text-lg text-primary hover:text-accent transition-colors mb-4 group"
      >
        {title}
        <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
