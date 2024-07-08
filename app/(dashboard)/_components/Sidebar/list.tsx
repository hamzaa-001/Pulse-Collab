"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./Item";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul>
      {userMemberships.data?.map((memberShips) => (
        <Item
          key={memberShips.organization.id}
          id={memberShips.organization.id}
          name={memberShips.organization.name}
          imageUrl={memberShips.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default List;
