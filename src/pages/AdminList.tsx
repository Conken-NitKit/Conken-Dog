import { useContext, useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { instanceOfUserRole, IUser } from "../interfaces/User";
import { Container } from "../layouts/Container";
import { fetchAllUsers } from "../utils/users/fetchAllUsers";

import styled from "styled-components";
import { redirectNonAdmin } from "../utils/users/redirectNonAdmin";
import { userContext } from "../contexts/userContext";
import { courseList } from "../assets/courses";
import { ISection } from "../assets/sections";
import { changeRole } from "../utils/users/changeRole";

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

  const handleRoleChanged = (
    watchedUser: IUser,
    index: number,
    role: string
  ) => {
    if (!instanceOfUserRole(role)) {
      return;
    }
    const replacedUsers = allUsers;
    replacedUsers.splice(index, 1, changeRole(watchedUser, role));
    setAllUsers([...replacedUsers]);
  };

  return (
    <AdminContainer>
      <Table>
        <thead>
          <tr>
            <th scope={"col"}>氏名</th>
            <th scope={"col"}>ロール</th>
            <th scope={"col"}>最終活動日</th>
            {courseList.map(({ name }, index) => (
              <th key={`course/${index}`} scope={"col"}>
                {name}
              </th>
            ))}
            <th scope={"col"}>メールアドレス</th>
          </tr>
        </thead>

        {allUsers.map((watchedUser, index) => (
          <tbody key={`users/${watchedUser.uid}`}>
            <tr>
              <th>
                <Link to={`admin/${watchedUser.uid}`}>
                  {watchedUser.displayName == ""
                    ? "No Name"
                    : watchedUser.displayName}
                </Link>
              </th>
              <th>
                <select
                  value={watchedUser.role}
                  onChange={(e) =>
                    handleRoleChanged(watchedUser, index, e.target.value)
                  }
                >
                  <option value="ADMIN">管理者 👑</option>
                  <option value="MEMBER">一般部員 🎉</option>
                  <option value="WAITING_AUTHENTICATION">承認待ち 🙏</option>
                  <option value="DENINED">認証拒否 ❌</option>
                </select>
              </th>
              <th>
                {watchedUser.activityLog.length === 0 ? (
                  <b style={{ color: "gray" }}>{watchedUser.birthDate}</b>
                ) : (
                  <b>
                    {`${new Date(
                      watchedUser.activityLog[0].timestamp
                    ).getFullYear()}-${(
                      "00" +
                      (new Date(
                        watchedUser.activityLog[0].timestamp
                      ).getMonth() +
                        1)
                    ).slice(-2)}-${(
                      "00" +
                      new Date(watchedUser.activityLog[0].timestamp).getDate()
                    ).slice(-2)}
                    `}
                  </b>
                )}
              </th>
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
