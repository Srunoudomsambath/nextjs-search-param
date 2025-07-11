'use client'

import React from 'react'
import DataTable,{TableColumn} from 'react-data-table-component'

interface Movie {
  id: number
  title: string
  year: string
}

const columns : TableColumn<Movie>[]= [
  {
    name: 'Title',
    selector: (row: Movie) => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: (row: Movie) => row.year,
    sortable: true,
  },
]

const data: Movie[] = [
  { id: 1, title: 'Beetlejuice', year: '1988' },
  { id: 2, title: 'Ghostbusters', year: '1984' },
]

export default function MovieTablePage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Movie List</h1>
      <DataTable<Movie>
        columns={columns}
        data={data}
  // pagination
      />
    </div>
  )
}
