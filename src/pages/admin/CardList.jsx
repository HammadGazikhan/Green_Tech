import React, { useState, useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useGetAll } from "../../Hooks/useGetAll";

import AuthContext from "../../context/authContext/AuthContext";

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
            
            <div className="grid grid-cols-2 gap-2">
                {rows.map((row, index) => (
                    <div key={index} className="grid grid-cols-4  px-4 py-2 border-b border-gray-200 p-4 m-3 gap-5 border rounded-md">
                        <div>
                            <img src={row.image} alt="" className="w-52" />
                        </div>
                        <div className="col-span-3">
                            <div className="text-xl">
                                <p> <span className="font-semibold">Title : </span> {row.card_title}</p>
                                <p> <span className="font-semibold">Desc : </span> {row.card_desc}</p>
                                <p><span className="font-semibold">Created At : </span>{row.createdAt}</p>
                            </div>
                            <div className=" gap-3">
                                <button>Delete</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardList