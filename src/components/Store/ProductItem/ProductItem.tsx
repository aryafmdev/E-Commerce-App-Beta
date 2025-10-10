import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {useDeleteProduct} from "@/hooks/useDeleteProduct";
import {Product} from "@/types/interfaces/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Props = {
    index: number;
    product: Product;
};

const ProductItem: React.FC<Props> = ({index, product}) => {
    const {onClick} = useDeleteProduct();

    return (
        <tr>
            <td>{index}</td>
            <td>
                <div className="flex gap-2.5 items-center">
                    <Image className="rounded" src={product.images[0]} width={48} height={48} alt={'Product Thumbnail'}/>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold">{product.title}</p>
                        <p>{product.category.name}</p>
                    </div>
                </div>
            </td>
            <td>Rp{product.price.toLocaleString('id-ID')}</td>
            <td>{product.stock.toLocaleString('id-ID')}</td>
            <td>
                <div className="flex gap-4">
                    <Link href={`/store/products/${product.id}/`}>
                        <Image src={'/images/icon-eye.png'} width={20} height={20} alt={'Eye Icon'}/>
                    </Link>
                    <Link href={`/store/products/${product.id}/`}>
                        <Image src={'/images/icon-pencil.png'} width={20} height={20} alt={'Pencil Icon'}/>
                    </Link>
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Image src={'/images/icon-trash-red.png'} width={20} height={20} alt={'Trash Icon'}/>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="flex-col gap-4 bg-contrast-0 border-0">
                            <AlertDialogHeader className="flex-col gap-4">
                                <AlertDialogTitle className="flex justify-between items-center">
                                    <p className="text-xl font-bold">Delete</p>
                                    <AlertDialogCancel className="bg-transparent border-0 shadow-none">
                                        <Image src={'/images/icon-close.png'} width={20} height={20} alt={'Close Icon'}/>
                                    </AlertDialogCancel>
                                </AlertDialogTitle>
                                <AlertDialogDescription className="text-sm">
                                    <p>The product will be permanently removed from your store</p>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="basis-1/2 h-10 bg-contras-0 border-neutral-300 rounded-lg text-sm font-semibold md:basis-137_">Cancel</AlertDialogCancel>
                                <AlertDialogAction className="basis-1/2 h-10 bg-red-100 border-0 text-sm font-semibold md:basis-137_" onClick={() => onClick({id: product.id})}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </td>
        </tr>
    );
};

export default ProductItem;
