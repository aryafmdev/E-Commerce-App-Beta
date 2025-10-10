"use client";

import BuyerSidebar from "@/components/BuyerSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";
import OrderItem from "@/components/OrderItem";
import OrderStore from "@/components/OrderStore";
import Search from "@/components/Search";
import {useMyReviews} from "@/hooks/useMyReviews";
import {BuyerSidebarPage} from "@/types/enums/BuyerSidebarPage";
import {CheckoutPaymentStatus} from "@/types/enums/CheckoutPaymentStatus";
import Image from "next/image";
import React, {useState} from "react";


const Review: React.FC = () => {
    const [index] = useState<number>(1);

    const {} = useMyReviews(index);

    return (
        <React.Fragment>
            <Header/>
            <MenuMobile/>
            <main className="gap-6 items-start site">
                <BuyerSidebar page={BuyerSidebarPage.Review}/>
                <section className="grow flex flex-col gap-4">
                    <h2 className="text-32_ font-bold">Review</h2>
                    <Search/>
                    <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                        <OrderStore order={{
                            id: 1,
                            code: "ORD-001",
                            paymentStatus: CheckoutPaymentStatus.PAID,
                            address: "Jl. Test Address",
                            totalAmount: 150000,
                            createdAt: new Date(),
                            items: [
                                {
                                    id: 1,
                                    productId: 1,
                                    shopId: 1,
                                    qty: 2,
                                    priceSnapshot: 75000,
                                    status: "DELIVERED",
                                    product: {
                                    id: 1,
                                    title: "Product Test",
                                    price: 75000,
                                    slug: "product-test",
                                    isActive: true,
                                    rating: 4.5,
                                    reviewCount: 10,
                                    soldCount: 20,
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                    images: ["/images/product-placeholder.png"],
                                    description: "Product description",
                                    stock: 10,
                                    shopId: 1,
                                    categoryId: 1,
                                        category: {
                                            id: 1,
                                            name: "Category Test",
                                            slug: "category-test"
                                        },
                                        shop: {
                                            id: 1,
                                            name: "Shop Test",
                                            slug: "shop-test",
                                            logo: "/images/logo-placeholder.png",
                                            address: "Shop Address",
                                            isActive: true
                                        },
                                        reviews: []
                                    },
                                    shop: {
                                        id: 1,
                                        name: "Shop Test",
                                        slug: "shop-test",
                                        logo: "/images/logo-placeholder.png",
                                        address: "Shop Address",
                                        isActive: true
                                    }
                                }
                            ]
                        }}/>
                        <div className="line"></div>
                        <OrderItem item={{
                            id: 1,
                            productId: 1,
                            shopId: 1,
                            qty: 2,
                            priceSnapshot: 75000,
                            status: "DELIVERED",
                            product: {
                                    id: 1,
                                    title: "Product Test",
                                    price: 75000,
                                    slug: "product-test",
                                    isActive: true,
                                    rating: 4.5,
                                    reviewCount: 10,
                                    soldCount: 20,
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                    images: ["/images/product-placeholder.png"],
                                    description: "Product description",
                                    stock: 10,
                                    shopId: 1,
                                    categoryId: 1,
                                category: {
                                    id: 1,
                                    name: "Category Test",
                                    slug: "category-test"
                                },
                                shop: {
                                    id: 1,
                                    name: "Shop Test",
                                    slug: "shop-test",
                                    logo: "/images/logo-placeholder.png",
                                    address: "Shop Address",
                                    isActive: true
                                },
                                reviews: []
                            },
                            shop: {
                                id: 1,
                                name: "Shop Test",
                                slug: "shop-test",
                                logo: "/images/logo-placeholder.png",
                                address: "Shop Address",
                                isActive: true
                            }
                        }}/>
                        <div className="line"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-semibold">My Review</h3>
                            <div className="flex gap-0.5">
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Ullamcorper tellus quam
                                congue id. At neque massa ultrices ultrices nulla aliquet.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-5 bg-contrast-0 rounded-xl">
                        <OrderStore order={{
                            id: 2,
                            code: "ORD-002",
                            paymentStatus: CheckoutPaymentStatus.PAID,
                            address: "Jl. Test Address 2",
                            totalAmount: 200000,
                            createdAt: new Date(),
                            items: [
                                {
                                    id: 2,
                                    productId: 2,
                                    shopId: 1,
                                    qty: 1,
                                    priceSnapshot: 200000,
                                    status: "DELIVERED",
                                    product: {
                                        id: 2,
                                        title: "Product Test 2",
                                        price: 200000,
                                        slug: "product-test-2",
                                        isActive: true,
                                        rating: 4.0,
                                        reviewCount: 5,
                                        soldCount: 15,
                                        createdAt: new Date(),
                                        updatedAt: new Date(),
                                        images: ["/images/product-placeholder.png"],
                                        description: "Product description 2",
                                        stock: 5,
                                        shopId: 1,
                                        categoryId: 1,
                                        category: {
                                            id: 1,
                                            name: "Category Test",
                                            slug: "category-test"
                                        },
                                        shop: {
                                            id: 1,
                                            name: "Shop Test",
                                            slug: "shop-test",
                                            logo: "/images/logo-placeholder.png",
                                            address: "Shop Address",
                                            isActive: true
                                        },
                                        reviews: []
                                    },
                                    shop: {
                                        id: 1,
                                        name: "Shop Test",
                                        slug: "shop-test",
                                        logo: "/images/logo-placeholder.png",
                                        address: "Shop Address",
                                        isActive: true
                                    }
                                }
                            ]
                        }}/>
                        <div className="line"></div>
                        <OrderItem item={{
                            id: 2,
                            productId: 2,
                            shopId: 1,
                            qty: 1,
                            priceSnapshot: 200000,
                            status: "DELIVERED",
                            product: {
                                id: 2,
                                title: "Product Test 2",
                                price: 200000,
                                slug: "product-test-2",
                                isActive: true,
                                rating: 4.0,
                                reviewCount: 5,
                                soldCount: 15,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                                images: ["/images/product-placeholder.png"],
                                description: "Product description 2",
                                stock: 5,
                                shopId: 1,
                                categoryId: 1,
                                category: {
                                    id: 1,
                                    name: "Category Test",
                                    slug: "category-test"
                                },
                                shop: {
                                    id: 1,
                                    name: "Shop Test",
                                    slug: "shop-test",
                                    logo: "/images/logo-placeholder.png",
                                    address: "Shop Address",
                                    isActive: true
                                },
                                reviews: []
                            },
                            shop: {
                                id: 1,
                                name: "Shop Test",
                                slug: "shop-test",
                                logo: "/images/logo-placeholder.png",
                                address: "Shop Address",
                                isActive: true
                            }
                        }}/>
                        <div className="line"></div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-semibold">My Review</h3>
                            <div className="flex gap-0.5">
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                                <Image src={'/images/icon-star.png'} width={24} height={24} alt={'Star Icon'}/>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Ullamcorper tellus quam
                                congue id. At neque massa ultrices ultrices nulla aliquet.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default Review;
