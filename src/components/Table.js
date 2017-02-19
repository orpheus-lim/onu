import React from 'react';
import './Table.css';
const Table = () => {
  return (
    <div>
      <h2>Bordered Table Dividers</h2>
      <p>Add the border-bottom property to th and td for horizontal dividers:</p>

        <table>
        <tr>
        <th>요일</th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
        <th>토</th>
        <th>일</th>
        </tr>
        <tr>
        <td className="part">파트</td>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
        <td>$100</td>
        </tr>
        <tr>
        <td className="part">파트</td>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
        <td>$100</td>
        </tr>
        <tr>
        <td className="part">파트</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>$100</td>
        </tr>
        <tr>
        <td className="part">파트</td>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>$250</td>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>$250</td>
        <td>$100</td>
        </tr>
        </table>
    </div>
  );
};

export default Table;
