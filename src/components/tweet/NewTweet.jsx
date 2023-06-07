import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";

function NewTweet() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createTweet(inputValue));
        }}
      >
        <textarea
          placeholder="example textarea"
          id="exampleControlsTextarea1"
          rows="3"
          name=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        <Button type="submit">Tweet</Button>
      </form>
    </>
  );
}

export default NewTweet;
