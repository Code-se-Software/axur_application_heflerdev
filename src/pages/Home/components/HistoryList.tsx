import React, {useEffect, useState} from "react";
import {Stack} from "react-bootstrap";
import {TrashIcon} from "src/assets/icons/Icons";
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {AppDispatch} from "src/redux/store";
import {removeData, setData} from "src/redux/slices/websiteSlice";

interface Paginated {
    itemsPerPage: number,
    items: String[]
}

export const HistoryList = ({list}: { list: Array<{ id: string, keyword: string }> }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const dispatch: AppDispatch = useDispatch()
    const itemsPerPage = 4;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(list.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list]);

    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % list.length;
        setItemOffset(newOffset);
    };

    const cutKeyword = (keyword: string) => keyword.length > 8 ? keyword.slice(0, 8) + "..." : keyword;

    return (
        <Stack gap={1}>
            <div className="title-container">
                <div className="id">Id (Click to view)</div>
                <div>|</div>
                <div className="keyword">Search Term</div>
                <div>|</div>
                <div className="delete">Delete</div>
            </div>
            {currentItems &&
                currentItems.map(({id, keyword}: { id: string, keyword: string }, index: number) => (
                    <div key={id + index} className={"key-container"}>
                        <div className="id" onClick={() => dispatch((setData(id)))}>{id}</div>
                        <div className="keyword" title={keyword}>{cutKeyword(keyword)}</div>
                        <div className="icon" onClick={() => dispatch(removeData(id))}>
                            <TrashIcon/>
                        </div>
                    </div>
                ))
            }
            {list.length >= 5 &&
                <ReactPaginate pageCount={pageCount}
                               breakLabel="..."
                               nextLabel=">>"
                               onPageChange={handlePageClick}
                               pageRangeDisplayed={5}
                               previousLabel="<<"
                               renderOnZeroPageCount={null}
                               pageClassName="page-class-name"
                               pageLinkClassName="page-link"
                               previousClassName="previous-class-name"
                               previousLinkClassName="previous-link-class-name"
                               nextClassName="next-class-name"
                               nextLinkClassName="next-link-class-name"
                               breakClassName="break-class-name"
                               breakLinkClassName="break-link-class-name"
                               containerClassName="container-class-name"
                               activeClassName="active-class-name"
                />
            }
        </Stack>
    )
}