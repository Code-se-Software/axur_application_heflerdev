import React from "react";
import {Stack} from "react-bootstrap";

export const HistoryList = ({list}: { list: String[] }) => (
    <Stack>
        {
            list.map((item: string, index: number) => (
                <div key={item + index}>
                    {item}
                </div>
            ))
        }
    </Stack>
)