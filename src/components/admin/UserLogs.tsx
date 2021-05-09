import { IActivityLog } from "../../interfaces/User";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  tr {
    background-color: #fff;
  }

  tbody tr:hover {
    background-color: #fffae9;
  }

  th,
  td {
    padding: 0.35em 1em;
    border-bottom: 1px solid #eee;
  }

  thead {
    th {
      font-size: 0.9em;
      padding: 1em;
    }
    tr {
      background-color: #30c8d6;
      color: #fff;
    }
  }

  tbody td {
    font-size: 0.85em;
    padding: 16px 8px;
  }
`;

interface Props {
  activityLog: IActivityLog[];
}

export default function Admin({ activityLog }: Props) {
  const createDate = (timestamp: string) => {
    const dateInfo = new Date(timestamp);
    return (
      dateInfo.getFullYear() +
      "年" +
      dateInfo.getMonth() +
      "月" +
      dateInfo.getDate() +
      "日 " +
      ("00" + dateInfo.getHours().toString()).slice(-2) +
      ("00" + dateInfo.getMinutes().toString()).slice(-2)
    );
  };

  return (
    <Table>
      <thead>
        <tr>
          <th scope={"col"} style={{ width: "160px" }}>
            時刻
          </th>
          <th scope={"col"} style={{ width: "740px" }}>
            行動履歴
          </th>
        </tr>
      </thead>
      {activityLog.map((logItem, index) => (
        <tbody key={`log/${index}`}>
          <tr>
            <td>{createDate(logItem.timestamp)}</td>
            <td>{logItem.targetLink}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}
