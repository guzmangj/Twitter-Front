import { Button } from "react-bootstrap";
import { useState } from "react";

function NewTweet() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Group>
          <label htmlFor="exampleControlsTextarea1">Example textarea</label>
          <Form.Textarea
            id="exampleControlsTextarea1"
            rows="3"
            name=""
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></Form.Textarea>
          <Button type="submit">Tweet</Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default NewTweet;
