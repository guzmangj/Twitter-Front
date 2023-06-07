import { Button } from "react-bootstrap";

import { useState } from "react";

function NewTweet() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
