import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_LINK = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
        }
    }
`;

const CreateLink = () => {
    const [formData, setFormData] = useState({
        description: "",
        url: "",
    });

    const [createLink, { data }] = useMutation(CREATE_LINK, {
        variables: {
            description: formData.description,
            url: formData.url,
        },
    });

    console.log(data, "data");
    console.log(formData, "formdata");

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createLink();
                }}
            >
                <input
                    type="text"
                    placeholder="Description for the link"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            description: e.target.value,
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="url for the link"
                    value={formData.url}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            url: e.target.value,
                        })
                    }
                />
                <button type="submit"> Submit </button>
            </form>
        </div>
    );
};

export default CreateLink;
