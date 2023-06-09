import { Button } from "react-bootstrap";
import { useState } from "react";
import createTweet from "../../redux/tweetSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./NewTweet.css";

function NewTweet() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const tweet = useSelector((state) => state.tweet);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/tweets",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: {
        content: inputValue,
      },
    });
    dispatch(createTweet({ content: inputValue }));
    setInputValue("");
  }

  // Console log de prueba para ver tweets de usuario logueado
  // console.log(
  //   tweet.filter((userTweet) => userTweet.user._id === user.id).map((tweet, index) => tweet),
  // );

  return (
    <section>
      <div className="border p-3">
        <div>
          <h2 className="fs-5 fw-semibold mb-3">Home</h2>
        </div>
        <div className="d-flex">
          <img
            src={
              user.image.includes("https")
                ? user.image
                : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${user.image}`
            }
            alt="Profile picture default"
            style={{ width: "60px", height: "60px" }}
            className="rounded-circle"
          />
          <form className="form-floating flex-fill mx-2" onSubmit={handleSubmit}>
            <div>
              <input
                className="input-text "
                placeholder="What's happening?"
                id="content"
                rows="3"
                name="content"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ border: "0", height: "60px" }}
                required
              />
            </div>

            <div className="d-flex justify-content-end">
              <Button type="submit" className="btn btn-login rounded-pill mt-2">
                Tweet
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewTweet;
