import { register, load } from "@shopify/theme-sections"
import Header from "@/shopify/sections/header"
import FeaturedProducts from "@/shopify/sections/featured-products"
import cart_section from "@/shopify/sections/cart"

cart_section.init()

register("header", Header)
register("featured-products", FeaturedProducts)
load("*")
