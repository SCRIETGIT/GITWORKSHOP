interface ComparisonTableProps {
  title?: string;
  columns: string[];
  rows: {
    headers: string;
    cells: string[];
  }[];
}

export default function ComparisonTable({ title, columns, rows }: ComparisonTableProps) {
  return (
    <div className="card">
      {title && <h3 className="text-projector-lg font-bold mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-workshop-neutral-100 border-b-2 border-workshop-neutral-300">
              <th className="p-4 text-left text-projector-sm font-bold text-workshop-neutral-900"></th>
              {columns.map((col, idx) => (
                <th key={idx} className="p-4 text-left text-projector-sm font-bold text-workshop-neutral-900">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-workshop-neutral-200 hover:bg-workshop-neutral-50">
                <td className="p-4 font-semibold text-projector-sm text-workshop-neutral-800">
                  {row.headers}
                </td>
                {row.cells.map((cell, cellIdx) => (
                  <td key={cellIdx} className="p-4 text-projector-sm text-workshop-neutral-600">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
