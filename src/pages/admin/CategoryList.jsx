import React, { useState, useContext, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAll } from "../../Hooks/useGetAll";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AuthContext from "../../context/authContext/AuthContext";
import { Button } from "@/components/ui/button";
import { useCreateOrUpdate } from '../../Hooks/useCreateOrUpdate';
import { useDelete } from '../../Hooks/useDelete';
import CustomDialog from '@/components/Elements/CustomDialog';
import { Switch } from "@/components/ui/switch"


const CategoryList = () => {
    const URL = "http://127.0.0.1:8000/";
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const { Logout, isLogin } = useContext(AuthContext);
    const [initialValues, setInitialValues] = useState({
        title: '',
        desc: '',
        image: '',
        category: '',
        is_active: false
    });
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { data: Category, refetch } = useGetAll({
        key: `/products/category/nt/?limit=200`,
        select: (data) => data.data || [],
        onSuccess: (data) => {
            console.log(data, "<----------CategoryIndex");
            setData(data);
            setRows(data.rows);
        },
    });

    const { mutate: createOrUpdate } = useCreateOrUpdate({
        url: isEdit ? `/products/category/nt/${currentId}/` : `/products/category/nt/`,
        method: isEdit ? "put" : "post",
        refetch,
    });

    const { mutate: deleteProduct } = useDelete({
        url: `/products/category/nt/`,
        refetch,
    });

    const validations = yup.object({
        title: yup
            .string()
            .required('Title is required!'),
        is_active: yup
            .boolean()
            .required('Status is required!')
    });

    const handleDelete = (id) => {
        deleteProduct(id);
    };

    const handleEdit = (row) => {
        setInitialValues({
            title: row.category_title,
            desc: row.category_desc,
            image: '',
            is_active: row.is_active
        });
        setIsEdit(true);
        setCurrentId(row.category_id);
        setIsDialogOpen(true);
    };

    const resetFormState = () => {
        setInitialValues({
            title: '',
            desc: '',
            image: '',
            is_active: false
        });
        setIsEdit(false);
        setCurrentId(null);
    };

    return (
        <div>
            <Button
                className={`m-3 bg-lime-600 hover:bg-lime-800`}
                onClick={() => setIsDialogOpen(true)}
            >
                Add New
            </Button>

            <CustomDialog isOpen={isDialogOpen}
                onClose={() => {
                    setIsDialogOpen(false);
                    setCurrentId(null)
                }}
                title={isEdit ? "Edit Category" : "Create New Category"}>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    validationSchema={validations}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values, "==========>Values");

                        const formData = new FormData();
                        formData.append("category_title", values.title);
                        formData.append("category_desc", values.desc);
                        formData.append("is_active", values.is_active);

                        if (values.image instanceof File) {
                            formData.append("image", values.image);
                        }

                        createOrUpdate(formData, {
                            onSuccess: (data) => {
                                console.log("Post Success", data);
                                setSubmitting(false);
                                refetch();
                                resetForm();
                                resetFormState();
                                setIsDialogOpen(false);
                            },
                            onError: (error) => {
                                console.error("Post Error", error);
                                setSubmitting(false);
                            },
                        });
                        setCurrentId(null);
                    }}
                >
                    {({ isSubmitting, setFieldValue, values }) => (
                        <Form className="space-y-5">
                            <div className="">
                                <div className="grid grid-cols-1 gap-5 my-12">
                                    <div>
                                        <Field
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="title"
                                            placeholder="Enter Title"
                                        />
                                        <ErrorMessage name="title" component="div" className="text-red-600 mt-2" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="is_active"
                                            checked={values.is_active}
                                            onCheckedChange={(checked) => setFieldValue("is_active", checked)}
                                        />
                                        <label htmlFor="is_active">Active</label>
                                    </div>
                                    <ErrorMessage name="is_active" component="div" className="text-red-600 mt-2" />
                                    <div>
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
                {rows.map((row) => (
                    <div key={row.category_id} className="grid grid-cols-4 px-4 py-2 shadow-lg hover:bg-lime-100 p-4 m-3 gap-5">
                        <div className="flex flex-col align-middle h-full content-center justify-around">
                            <img src={row.image} alt="" className="w-52" />
                        </div>
                        <div className="col-span-3 flex flex-col align-middle h-full content-center justify-around">
                            <div className="text-xl">
                                <p><span className="font-semibold">Title: </span> {row.category_title}</p>
                                <p><span className="font-semibold">Created At: </span>{new Date(row.createdAt).toLocaleDateString()}</p>
                                <p>{row.is_active ? <span className="font-semibold px-2 text-center bg-lime-200 rounded-md ">Active </span> : <span className="font-semibold px-2 text-center bg-red-200 rounded-md ">Hidden</span>} </p>
                            </div>
                            <div className="flex gap-3 my-2">
                                <Button className="bg-red-600 hover:bg-red-800" onClick={() => handleDelete(row.category_id)}>Delete</Button>
                                <Button className="bg-sky-600 hover:bg-sky-800" onClick={() => handleEdit(row)}>Edit</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;