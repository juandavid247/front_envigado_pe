/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Pagination } from 'react-bootstrap';

const ElementosTable = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    perPage: 4,
    currentPage: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/elementos', {
          params: { page: pagination.currentPage },
        });
        setData(response.data);
        setPagination((prev) => ({ ...prev, total: response.data.length }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pagination.currentPage]);

  const handlePageChange = (page) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  return (
    <div>
      <Table striped bordered hover>
        {/* Render your table headers here */}
        <tbody>
          {/* Map over your data and render table rows */}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: Math.ceil(pagination.total / pagination.perPage) }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === pagination.currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default ElementosTable;
