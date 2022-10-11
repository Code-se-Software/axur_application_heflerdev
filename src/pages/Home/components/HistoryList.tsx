import React from "react";
import {Stack} from "react-bootstrap";
import {TrashIcon} from "../../../assets/icons/Icons";

export const HistoryList = ({list}: { list: Array<{ id: string, keyword: string }> }) => (
    <Stack gap={1}>
        {
            list.map(({id, keyword}: { id: string, keyword: string }, index: number) => (
                <div key={id + index} className={"key-container"}>
                    <div className="keyword">{id}</div>
                    <div className="id">{keyword}</div>
                    <div className="icon"><TrashIcon/></div>
                </div>
            ))
        }
    </Stack>
)