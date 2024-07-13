import React from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { Table, Button, Form, Container } from 'react-bootstrap';
import './Table.css'

const TableComponent = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    // setGlobalFilter,
    canPreviousPage,
    canNextPage,
    // pageOptions,
    // gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <Container className="mt-4 mb-0 pb-0">
      {/* <Row className="mb-4">
        <Col>
          <Form.Control
            value={globalFilter || ''}
            onChange={e => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="mb-4"
          />
        </Col>
      </Row> */}
      <Table {...getTableProps()} striped bordered hover className='pb-0 mb-2'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="text-center bg-dark text-light position-relative"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  <HiArrowsUpDown size={22} className="position-absolute top-2 end-0" />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, i) => (
                  <td {...cell.getCellProps()} className="text-center">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      {data.length === 0 && <div className="alert  mt-0  bg-grey py-lg-4 text-secondary rounded-0  text-secondary" >No information</div>}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div>
          Records from 0 to {data.length} ( {data.length} Records)
        </div>
        <div className="d-flex align-items-center">
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="me-2  bg-grey border-0"
          >
            <FaAngleLeft size={22} className='text-secondary'/>
          </Button>
          <span className="px-3 py-2 bg-grey rounded-3">{pageIndex + 1}</span>
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="ms-2  bg-grey border-0"
          >
            <FaAngleRight size={22} className='text-secondary'/>
          </Button>
          <Form.Select
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}
            className="ms-3"
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
    </Container>
  );
};

export default TableComponent;
