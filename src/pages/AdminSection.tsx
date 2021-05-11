import { useContext, useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import styled from "styled-components";

import { ISection } from "../assets/sections";
import { AdminSectionItem } from "../components/admin/AdminSectionItem";
import { userContext } from "../contexts/userContext";
import { defaultUserInfo, IUser } from "../interfaces/User";
import { Container } from "../layouts/Container";
import { Description } from "../styles/fonts/Description";
import { Heading1 } from "../styles/fonts/Heading1";
import { Small } from "../styles/fonts/Small";
import { fetchUser } from "../utils/users/fetchUser";
import { redirectNonAdmin } from "../utils/users/redirectNonAdmin";

const ContentsList = styled.ul`
  background: #fff;
  border: solid 2px #f3eded;
  padding: 36px;
  margin-top: 64px;
  border-radius: 6px;
`;

interface Props extends RouteComponentProps {
  value: ISection;
}

interface ParamTypes {
  id: string;
}

export default function AdminSection({ value, history }: Props) {
  const { id } = useParams<ParamTypes>();
  const { user, setUser } = useContext(userContext);
  const [watchedUser, setWatchedUser] = useState<IUser>(defaultUserInfo);

  useEffect(() => {
    const unSub = redirectNonAdmin(history, user, setUser);
    const f = async () => {
      const fetchedUser = await fetchUser(id);
      setWatchedUser(fetchedUser);
    };
    f();
    return () => {
      unSub();
    };
  }, []);

  const generateMinute = () =>
    value.contentsList.reduce((sum, cur): number => sum + cur.requiredTime, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Heading1>{value.title}</Heading1>
      <Description>{value.description}</Description>
      <Small>
        合計修了時間 |
        {generateMinute() >= 60 && ` ${Math.floor(generateMinute() / 60)}時間`}
        {generateMinute() % 60 !== 0 && ` ${generateMinute() % 60}分`}
      </Small>
      <ContentsList>
        {value.contentsList.map((content, i) => (
          <AdminSectionItem
            key={value.title + i.toString()}
            user={watchedUser}
            content={content}
          />
        ))}
      </ContentsList>
    </Container>
  );
}
