import { useQuery, gql } from "@apollo/client";
import React from "react";
import Link from "./Link";

const FEED_QUERY = gql`
    {
        title
        feed {
            id
            url
            description
        }
    }
`;

const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);
    console.log("data", data);
    return (
        <div>
            {data && (
                <div>
                    {data.feed.map((link) => (
                        <Link key={link.id} link={link} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LinkList;
