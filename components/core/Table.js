import { checkChildType } from '@/utils/checkChildType';
import UpdateTableEntry from './UpdateTableEntry';
import DeleteTableEntry from './DeleteTableEntry';

const Table = (props) => {
  const { headings = [], children = [], data = [] } = props;

  return (
    <div className='w-full overflow-x-auto'>
      <table className='w-full border-collapse overflow-x-scroll'>
        <thead>
          <tr className='bg-gray-200'>
            {headings?.map((heading, i) => (
              <th key={i} className='px-4 py-2 border'>
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 &&
            data.map((object, i) => (
              <tr key={object.id} className='hover:bg-gray-100'>
                <td className='px-4 py-2 border'>{i + 1}</td>
                {children.map((child, i) => (
                  <td key={i} className='px-4 py-2 border'>
                    {checkChildType(object, child)}
                  </td>
                ))}
                {headings[headings.length - 1] === 'Actions' && (
                  <td className='px-4 py-2 border flex flex-col gap-3 sm:flex-row sm:gap-0 justify-center'>
                    <UpdateTableEntry />
                    <DeleteTableEntry object={object} />
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
