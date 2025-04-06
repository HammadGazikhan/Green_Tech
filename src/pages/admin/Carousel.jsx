import React, { useState, useContext, useEffect } from "react";
import { useGetAll } from "../../Hooks/useGetAll";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AuthContext from "../../context/authContext/AuthContext";
import { Button } from "@/components/ui/button";
import { useCreateOrUpdate } from '../../Hooks/useCreateOrUpdate';
import { useDelete } from '../../Hooks/useDelete';
import CustomDialog from '@/components/Elements/CustomDialog'; // Import the custom dialog

const CarouselList = () => {
    const URL = "http://127.0.0.1:8000/";
    const [rows, setRows] = useState([]);
    const { Logout, isLogin } = useContext(AuthContext);
    const [initialValues, setInitialValues] = useState({
        remark: '',
        image: '',
    });
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility

    const { data: Carousel, refetch } = useGetAll({
        key: `/stats/carousel/nt/?limit=200`,
        select: (data) => data.data || [],
        onSuccess: (data) => {
            console.log(data, "<----------CarouselIndex");
            setRows(data.rows);
        },
    });

    const { mutate: createOrUpdate } = useCreateOrUpdate({
        url: isEdit ? `/stats/carousel/nt/${currentId}/` : `/stats/carousel/nt/`,
        method: isEdit ? "put" : "post",
        refetch,
    });

    const { mutate: deleteProduct } = useDelete({
        url: `/stats/carousel/nt/`,
        refetch,
    });

    const validations = yup.object({
        remark: yup.string().required('Remark is required!'),
    });

    const handleDelete = (id) => {
        deleteProduct(id, {
            onSuccess: () => {
                console.log("Delete Success");
                refetch();
            },
            onError: (error) => {
                console.error("Delete Error", error);
            },
        });
    };

    const handleEdit = (row) => {
        setInitialValues({
            remark: row.carousel_remark,
            image: row.image,
        });
        setIsEdit(true);
        setCurrentId(row.carousel_id);
        setIsDialogOpen(true); // Open the dialog
    };

    const resetFormState = () => {
        setInitialValues({
            remark: '',
            image: ''
        });
        setIsEdit(false);
        setCurrentId(null);
    };

    return (
        <div>
            <Button
                className={`m-3 bg-lime-600 hover:bg-lime-800`}
                onClick={() => setIsDialogOpen(true)} // Open the dialog
            >
                Add New
            </Button>

            <CustomDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title={isEdit ? "Edit Carousel" : "Create New Carousel"}> {/* Use custom dialog */}
                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    validationSchema={validations}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values, "==========>Values");

                        const formData = new FormData();
                        formData.append("carousel_remark", values.remark);

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
                            <div className="grid grid-cols-1 gap-5 my-12">
                                <div>
                                    <Field
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        name="remark"
                                        placeholder="Enter Remark"
                                    />
                                    <ErrorMessage name="remark" component="div" className="text-red-600 mt-2" />
                                </div>
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
                        </Form>
                    )}
                </Formik>
            </CustomDialog>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-1">
                {rows.map((row) => (
                    <div key={row.carousel_id} className="grid grid-cols-4 px-4 py-2 shadow-lg hover:bg-lime-100 p-4 m-3 gap-5">
                        <div className="flex flex-col align-middle h-full content-center justify-around">
                            <img src={row.image} alt="" className="w-52" />
                        </div>
                        <div className="col-span-3 flex flex-col align-middle h-full content-center justify-around">
                            <div className="text-xl">
                                <p><span className="font-semibold">Title: </span> {row.carousel_remark}</p>
                                <p><span className="font-semibold">Created At: </span>{new Date(row.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="flex gap-3 my-2">
                                <Button className="bg-red-600 hover:bg-red-800" onClick={() => handleDelete(row.carousel_id)}>Delete</Button>
                                <Button className="bg-sky-600 hover:bg-sky-800" onClick={() => handleEdit(row)}>Edit</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselList;
