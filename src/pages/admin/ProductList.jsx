import React, { useState, useContext, useEffect, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAll } from "../../Hooks/useGetAll";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AuthContext from "../../context/authContext/AuthContext";
import { Button } from "@/components/ui/button";
import { useCreateOrUpdate } from '../../Hooks/useCreateOrUpdate';
import { useDelete } from '../../Hooks/useDelete';
import CustomDialog from '@/components/Elements/CustomDialog'; // Import the custom dialog
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const ProductList = () => {
    const URL = "http://127.0.0.1:8000/";
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [catgList, setCatgList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const { Logout, isLogin } = useContext(AuthContext);
    const [initialValues, setInitialValues] = useState({
        title: '',
        desc: '',
        image: '',
        category: ''
    });
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility

    const { data: Products, refetch } = useGetAll({
        key: `/products/item/nt`,
        select: (data) => data.data || [],
        onSuccess: (data) => {
            console.log(data, "<----------ProductsIndex");
            setData(data);
            setRows(data.rows);
        },
    });
    const { data: Category } = useGetAll({
        key: `/products/category/nt`,
        select: (data) => data.data || [],
        onSuccess: (data) => {
            console.log(data, "<----------CategoryIndex");
            setCatgList(data.rows);
        },
    });

    const { mutate: createOrUpdate } = useCreateOrUpdate({
        url: isEdit ? `/products/item/nt/${currentId}/` : `/products/item/nt/`,
        method: isEdit ? "put" : "post",
        refetch,
    });

    const { mutate: deleteProduct } = useDelete({
        url: `/products/item/nt/`,
        refetch,
    });

    const validations = yup.object({
        title: yup
            .string()
            .required('Title is required!'),
        category: yup
            .string()
            .required('Category is required!'),
    });

    const handleDelete = (id) => {
        deleteProduct(id);
    };

    const handleEdit = (row) => {
        setInitialValues({
            title: row.item_title,
            desc: row.item_desc,
            image: '',
            category: row.category,
        });
        setIsEdit(true);
        setCurrentId(row.item_id);
        setIsDialogOpen(true); // Open the dialog
    };

    const resetFormState = () => {
        setInitialValues({
            title: '',
            desc: '',
            image: '',
            category: ''
        });
        setIsEdit(false);
        setCurrentId(null);
    };

    function getCategoryTitleById(id) {
        const category = catgList.find(cat => cat.category_id === id);
        return category ? category.category_title : null;
    }

    const filteredRows = useMemo(() => {
        return rows;
    }, [rows]);

    const paginatedRows = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredRows.slice(start, start + itemsPerPage);
    }, [filteredRows, currentPage]);

    const totalPages = Math.ceil(filteredRows.length / itemsPerPage);

    const renderPaginationItems = (currentPage) => {
        const items = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                items.push(
                    <PaginationItem key={i}>
                        <PaginationLink onClick={() => setCurrentPage(i)} className={i === currentPage ? "border bg-gray-100" : ""} >{i}</PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            items.push(
                <PaginationItem key={1}>
                    <PaginationLink onClick={() => setCurrentPage(1)}>1</PaginationLink>
                </PaginationItem>
            );
            items.push(
                <PaginationItem key={2}>
                    <PaginationLink onClick={() => setCurrentPage(2)}>2</PaginationLink>
                </PaginationItem>
            );
            items.push(
                <PaginationItem key={3}>
                    <PaginationLink onClick={() => setCurrentPage(3)}>3</PaginationLink>
                </PaginationItem>
            );
            items.push(
                <PaginationItem key="ellipsis1">
                    <PaginationEllipsis />
                </PaginationItem>
            );
            items.push(
                <PaginationItem key={totalPages - 1}>
                    <PaginationLink onClick={() => setCurrentPage(totalPages - 1)}>{totalPages - 1}</PaginationLink>
                </PaginationItem>
            );
            items.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink onClick={() => setCurrentPage(totalPages)}>{totalPages}</PaginationLink>
                </PaginationItem>
            );
        }
        return items;
    };

    return (
        <div>
            <Button
                className={`m-3 bg-lime-600 hover:bg-lime-800`}
                onClick={() => setIsDialogOpen(true)} // Open the dialog
            >
                Add New
            </Button>

            <CustomDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title={isEdit ? "Edit Product" : "Create New Product"}> {/* Use custom dialog */}
                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    validationSchema={validations}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values, "==========>Values");

                        const formData = new FormData();
                        formData.append("item_title", values.title);
                        formData.append("item_desc", values.desc);
                        formData.append("category", values.category);

                        if (values.image instanceof File) {
                            formData.append("image", values.image);
                        }
                        if (values.brochure instanceof File) {
                            formData.append("brochure", values.brochure);
                        }

                        createOrUpdate(formData, {
                            onSuccess: (data) => {
                                console.log("Post Success", data);
                                setSubmitting(false);
                                refetch();
                                resetForm();
                                resetFormState();
                                setIsDialogOpen(false); // Close the dialog
                            },
                            onError: (error) => {
                                console.error("Post Error", error);
                                setSubmitting(false);
                            },
                        });
                    }}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="space-y-5">
                            <div className="">
                                <div className="grid grid-cols-1 gap-5 my-12">
                                    <div>
                                        <label htmlFor="title">Product Title</label>
                                        <Field
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="title"
                                            placeholder="Enter Title"
                                        />
                                        <ErrorMessage name="title" component="div" className="text-red-600 mt-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="desc">Product Description</label>
                                        <Field
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="desc"
                                            placeholder="Details"
                                        />
                                        <ErrorMessage name="desc" component="div" className="text-red-600 mt-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="image">Product Image</label>
                                        <input
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="file"
                                            name="image"
                                            onChange={(event) => {
                                                setFieldValue("image", event.currentTarget.files[0]);
                                            }}
                                        />
                                        <ErrorMessage name="image" component="div" className="text-red-600 mt-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="brochure">Brochure</label>
                                        <input
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="file"
                                            name="brochure"
                                            onChange={(event) => {
                                                setFieldValue("brochure", event.currentTarget.files[0]);
                                            }}
                                        />
                                        <ErrorMessage name="brochure" component="div" className="text-red-600 mt-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="category">Category</label>
                                        <Field
                                            as="select"
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            name="category"
                                        >
                                            <option value="">---Categories---</option>
                                            {catgList?.map((catg) => <option key={catg.category_id} value={catg.category_id}>{catg.category_title}</option>)}
                                        </Field>
                                        <ErrorMessage name="category" component="div" className="text-red-600 mt-2" />
                                    </div>
                                </div>
                                <div className="my-2 w-full">
                                    <button
                                        type="submit"
                                        className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-lime-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                        disabled={isSubmitting}
                                    >
                                        {isEdit ? "Update" : "Send"}
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </CustomDialog>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
                {paginatedRows.map((row) => (
                    <div key={row.item_id} className="grid grid-cols-4 px-4 py-2 shadow-lg hover:bg-lime-100 p-4 m-3 gap-5">
                        <div className="flex flex-col align-middle h-full content-center justify-around">
                            <img src={row.image} alt="" className="w-52" />
                        </div>
                        <div className="col-span-3 flex flex-col align-middle h-full content-center justify-around">
                            <div className="text-xl">
                                <p><span className="font-semibold">Title: </span> {row.item_title}</p>
                                <p><span className="font-semibold">Desc: </span> {row.item_desc}</p>
                                <p><span className="font-semibold">Created At: </span>{new Date(row.createdAt).toLocaleDateString()}</p>
                                <p><span className="font-semibold">Category: </span>{getCategoryTitleById(row.category)}</p>
                            </div>
                            <div className="flex gap-3 my-2">
                                <Button className="bg-red-600 hover:bg-red-800" onClick={() => handleDelete(row.item_id)}>Delete</Button>
                                <Button className="bg-sky-600 hover:bg-sky-800" onClick={() => handleEdit(row)}>Edit</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination>
                    <PaginationContent>
                        {currentPage > 1 && (
                            <PaginationItem>
                                <PaginationPrevious onClick={() => setCurrentPage(page => Math.max(page - 1, 1))} />
                            </PaginationItem>
                        )}
                        {renderPaginationItems(currentPage)}
                        {currentPage < totalPages && (
                            <PaginationItem>
                                <PaginationNext onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))} />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
};

export default ProductList;
