import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../interfaces/User";
import { Container } from "../layouts/Container";
import { fetchAllUsers } from "../utils/users/fetchAllUsers";

import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  box-shadow: 0 0 15px -6px #00000073;
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
  tbody th {
    text-align: center;
    font-size: 0.85em;
    padding: 16px;
  }
`;

export default function AdminList() {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const f = async () => {
      const fetchedAllUsers = await fetchAllUsers();
      setAllUsers(fetchedAllUsers);
    };
    f();
  }, []);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th scope={"col"}>氏名</th>
            <th scope={"col"}>ロール</th>
            <th scope={"col"}>生年月日</th>
            <th scope={"col"}>メールアドレス</th>
          </tr>
        </thead>

        {allUsers.map(({ uid, displayName, role, birthDate, email }) => (
          <tbody>
            <th>
              <Link to={`admin/${uid}`}>
                {displayName == "" ? "No Name" : displayName}
              </Link>
            </th>
            <th>{
              role === "ADMIN" ? "管理者 😎"
               : role === "MEMBER" ? "一般部員 🥳"
               : role === "WAITING_AUTHENTICATION" ? "承認待ち 🙇‍♂️"
               : "認証拒否 ❌"
              }</th>
            <th>{birthDate}</th>
            <th>{email}</th>
          </tbody>
        ))}
      </Table>
    </Container>
  );
}
