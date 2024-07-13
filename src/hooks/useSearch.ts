import { useState } from "react";
import { IPost } from "../interfaces";

interface useSearchParams {
  data: IPost[] | undefined;
}

export const useSearch = ({ data }: useSearchParams) => {
  const [text, setText] = useState("");

  const onChangeInput = (value: string) => {
    setText(value);
  };

  const result =
    text.toLocaleLowerCase().trim().length >= 2
      ? data?.filter((post) =>
          post.title
            .toLocaleLowerCase()
            .trim()
            .includes(text.toLocaleLowerCase().trim())
        )
      : data;

  return { text, onChangeInput, result };
};
