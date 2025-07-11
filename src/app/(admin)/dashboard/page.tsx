'use client'

import React, { useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { MdDelete } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'
import { BiSolidUserDetail } from 'react-icons/bi'

interface Movie {
  id: number
  title: string
  year: string
  gender: string
}

export default function MovieTablePage() {
  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, title: 'Beetlejuice', year: '1988', gender: 'male' },
    { id: 2, title: 'Ghostbusters', year: '1984', gender: 'female' },
    { id: 3, title: 'The Shining', year: '1980', gender: 'male' },
    { id: 4, title: 'The Exorcist', year: '1973', gender: 'female' },
    { id: 5, title: 'Psycho', year: '1960', gender: 'male' },
    { id: 6, title: 'Get Out', year: '2017', gender: 'female' },
    { id: 7, title: 'A Quiet Place', year: '2018', gender: 'male' },
    { id: 8, title: 'Hereditary', year: '2018', gender: 'female' },
    { id: 9, title: 'The Conjuring', year: '2013', gender: 'male' },
    { id: 10, title: 'It', year: '2017', gender: 'male' },
    { id: 11, title: 'Us', year: '2019', gender: 'female' },
    { id: 12, title: 'The Ring', year: '2002', gender: 'female' },
    { id: 13, title: 'Insidious', year: '2010', gender: 'male' },
    { id: 14, title: 'Saw', year: '2004', gender: 'male' },
    { id: 15, title: 'Paranormal Activity', year: '2007', gender: 'female' },
  ])

  const handleEdit = (id: number) => {
    console.log('Edit movie with ID:', id)
    // navigate or show modal here
  }

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(`Are you sure you want to delete movie ID ${id}?`)
    if (confirmed) {
      setMovies(prev => prev.filter(movie => movie.id !== id))
    }
  }

  const handleViewDetails = (id: number) => {
    console.log('Viewing movie ID:', id)
    // modal or navigation
  }

  const columns: TableColumn<Movie>[] = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      width: '250px',
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
      width: '120px',
    },
    {
      name: 'Gender',
      selector: row => row.gender,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Actions',
      cell: row => (
        <div className="flex space-x-2">
          <button
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleEdit(row.id)}
          >
            <FaUserEdit />
          </button>
          <button
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => handleDelete(row.id)}
          >
            <MdDelete />
          </button>
          <button
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => handleViewDetails(row.id)}
          >
            <BiSolidUserDetail />
          </button>
        </div>
      ),
      width: '200px',
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-sky-900 to-blue-950 p-4 md:p-6">
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-3 shadow-md">
          <span className="text-2xl">🎬</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-100 mb-1">
          Movie Collection
        </h1>
        <p className="text-blue-300 text-sm md:text-base">
          Explore your favorite movies in one place
        </p>
      </div>

      {/* Table Section */}
      <div className="bg-blue-800/40 border border-blue-600 rounded-xl shadow-lg">
        <div className="p-4 md:p-6">
          <DataTable<Movie>
            columns={columns}
            data={movies}
            pagination
            paginationPerPage={5}
            selectableRows
  
          />
        </div>
      </div>
    </div>
  </div>
);

}
