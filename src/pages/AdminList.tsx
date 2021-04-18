import { useContext, useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { IUser } from "../interfaces/User";
import { Container } from "../layouts/Container";
import { fetchAllUsers } from "../utils/users/fetchAllUsers";

import styled from "styled-components";
import { redirectNonAdmin } from "../utils/users/redirectNonAdmin";
import { userContext } from "../contexts/userContext";
import { courseList } from "../assets/courses";
import { ISection } from "../assets/sections";

const AdminContainer = styled(Container)`
  width: 92%;
`;

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
    padding: 16px 8px;
  }
`;

export default function AdminList({ history }: RouteComponentProps) {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const { user, setUser } = useContext(userContext);

  const countContents = (sectionList: ISection[]) =>
    sectionList.reduce((secCnt, secCur): number => {
      return secCnt + secCur.contentsList.length;
    }, 0);

  const countComplete = (sectionList: ISection[], completionList: string[]) =>
    sectionList.reduce((secCnt, secCur): number => {
      return (
        secCnt +
        secCur.contentsList.reduce((contentCnt, contentCur): number => {
          return (
            contentCnt + (completionList.includes(contentCur.link) ? 1 : 0)
          );
        }, 0)
      );
    }, 0);

  useEffect(() => {
    const unSub = redirectNonAdmin(history, user, setUser);
    const f = async () => {
      const fetchedAllUsers = await fetchAllUsers();
      setAllUsers(fetchedAllUsers);
    };
    f();
    return () => {
      unSub();
    };
  }, []);

  return (
    <AdminContainer>
      <Table>
        <thead>
          <tr>
            <th scope={"col"}>氏名</th>
            <th scope={"col"}>ロール</th>
            <th scope={"col"}>生年月日</th>
            {courseList.map(({ name }, index) => (
              <th key={`course/${index}`} scope={"col"}>
                {name}
              </th>
            ))}
            <th scope={"col"}>メールアドレス</th>
          </tr>
        </thead>

        {allUsers.map((watchedUser) => (
          <tbody key={`users/${watchedUser.uid}`}>
            <tr>
              <th>
                <Link to={`admin/${watchedUser.uid}`}>
                  {watchedUser.displayName == ""
                    ? "No Name"
                    : watchedUser.displayName}
                </Link>
              </th>
              {watchedUser.role === "ADMIN" ? (
                <th>
                  管理者
                  <br />
                  👑
                </th>
              ) : watchedUser.role === "MEMBER" ? (
                <th>
                  一般部員
                  <br />
                  🎉
                </th>
              ) : watchedUser.role === "WAITING_AUTHENTICATION" ? (
                <th>
                  承認待ち
                  <br />
                  🙏
                </th>
              ) : (
                <th>
                  認証拒否
                  <br />❌
                </th>
              )}
              <th>{watchedUser.birthDate}</th>
              {courseList.map(({ sections }, index) => (
                <th key={`users/${watchedUser.uid}/${index}`} scope={"col"}>
                  {Math.floor(
                    (countComplete(sections, watchedUser.completionList) /
                      countContents(sections)) *
                      100
                  )}
                  %<br />({countComplete(sections, watchedUser.completionList)})
                </th>
              ))}
              <th>{watchedUser.email}</th>
            </tr>
          </tbody>
        ))}
      </Table>
    </AdminContainer>
  );
}
