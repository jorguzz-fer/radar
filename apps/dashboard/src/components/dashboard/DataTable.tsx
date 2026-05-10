'use client'

import { useMemo, useState } from 'react'
import { ChevronDown, ChevronUp, ChevronsUpDown, Search } from 'lucide-react'

export type Column<T> = {
  key: keyof T & string
  header: string
  sortable?: boolean
  render?: (row: T) => React.ReactNode
  className?: string
}

interface DataTableProps<T extends { id: string | number }> {
  data: T[]
  columns: Column<T>[]
  searchKeys?: (keyof T & string)[]
  pageSize?: number
  emptyMessage?: string
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  searchKeys = [],
  pageSize = 10,
  emptyMessage = 'Nenhum registro encontrado.',
}: DataTableProps<T>) {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<(keyof T & string) | null>(null)
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (!search.trim() || searchKeys.length === 0) return data
    const q = search.toLowerCase()
    return data.filter((row) =>
      searchKeys.some((k) => String(row[k] ?? '').toLowerCase().includes(q))
    )
  }, [data, search, searchKeys])

  const sorted = useMemo(() => {
    if (!sortKey) return filtered
    const copy = [...filtered]
    copy.sort((a, b) => {
      const av = a[sortKey]
      const bv = b[sortKey]
      if (av === bv) return 0
      const cmp = av > bv ? 1 : -1
      return sortDir === 'asc' ? cmp : -cmp
    })
    return copy
  }, [filtered, sortKey, sortDir])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const safePage = Math.min(page, totalPages)
  const pageRows = sorted.slice((safePage - 1) * pageSize, safePage * pageSize)

  const toggleSort = (key: keyof T & string) => {
    if (sortKey !== key) {
      setSortKey(key)
      setSortDir('asc')
    } else if (sortDir === 'asc') {
      setSortDir('desc')
    } else {
      setSortKey(null)
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      {searchKeys.length > 0 && (
        <div className="px-5 py-3 border-b border-gray-200">
          <div className="relative max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              placeholder="Buscar..."
              className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wide">
            <tr>
              {columns.map((col) => {
                const isActive = sortKey === col.key
                return (
                  <th
                    key={col.key}
                    className={`px-5 py-3 text-left font-medium ${col.className ?? ''}`}
                  >
                    {col.sortable ? (
                      <button
                        type="button"
                        onClick={() => toggleSort(col.key)}
                        className="inline-flex items-center gap-1 hover:text-gray-900"
                      >
                        {col.header}
                        {!isActive && <ChevronsUpDown className="w-3 h-3" />}
                        {isActive && sortDir === 'asc' && <ChevronUp className="w-3 h-3" />}
                        {isActive && sortDir === 'desc' && <ChevronDown className="w-3 h-3" />}
                      </button>
                    ) : (
                      col.header
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pageRows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-gray-400"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              pageRows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {columns.map((col) => (
                    <td key={col.key} className={`px-5 py-3 ${col.className ?? ''}`}>
                      {col.render ? col.render(row) : String(row[col.key] ?? '')}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {sorted.length > pageSize && (
        <div className="px-5 py-3 border-t border-gray-200 flex items-center justify-between text-sm">
          <span className="text-gray-500">
            {(safePage - 1) * pageSize + 1}–{Math.min(safePage * pageSize, sorted.length)} de{' '}
            {sorted.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={safePage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-md border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Anterior
            </button>
            <span className="px-3 py-1.5 text-gray-600">
              {safePage} / {totalPages}
            </span>
            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded-md border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Próxima
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
