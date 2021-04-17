import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../interfaces/User";
import { ResponsiveWrapper } from "../layouts/ResponsiveWrapper";
import { fetchAllUsers } from "../utils/users/fetchAllUsers";

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
    <>
      <ResponsiveWrapper>
        <ul>
          {allUsers.map(({ uid, displayName }) => (
            <li>
              <Link to={`admin/${uid}`}>
                {displayName == "" ? "No Name" : displayName}
              </Link>
            </li>
          ))}
        </ul>
      </ResponsiveWrapper>
    </>
  );
}
