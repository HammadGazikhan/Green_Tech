import React, { useState, useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useGetAll } from "../../Hooks/useGetAll";

import AuthContext from "../../context/authContext/AuthContext";
import { Button } from "@/components/ui/button";

const CardList = () => {


    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState({});
    const { Logout, isLogin } = useContext(AuthContext);

    const { data: Cards, refetch } = useGetAll({
        key: `/stats/card/nt`,
        select: (data) => data.data || [],
        onSuccess: (data) => {
            console.log(data, "<----------CardsIndex");
            setData(data);
            setRows(data.rows);
        },
    });



    console.log("Data ====>", data)
    console.log("Rows..====>", rows)


    return (
        <div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {rows.map((row, index) => (
                    <div key={row.item_id} className="grid grid-cols-4  px-4 py-2 shadow-lg hover:bg-lime-100 p-4 m-3 gap-5 ">
                        <div className="flex flex-col align-middle h-full content-center justify-around">
                            <img src={row.image} alt="" className="w-52" />
                        </div>
                        <div className="col-span-3 flex flex-col align-middle h-full content-center justify-around">
                            <div className="text-xl ">
                                <p> <span className="font-semibold">Title : </span> {row.card_title}</p>
                                <p> <span className="font-semibold">Desc : </span> {row.card_desc}</p>
                                <p><span className="font-semibold">Created At : </span>{new Date(row.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="flex gap-3 my-2 ">
                                <Button className="bg-red-600 hover:bg-red-800" >Delete</Button>
                                <Button className="bg-sky-600 hover:bg-sky-800" >Edit</Button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default CardList