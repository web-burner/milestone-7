import { use } from "react";
import Friend from "./Friend";


export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  return (
    <div className="friend">
      <h2>Friends: {friends.length}</h2>
      <div>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id}></Friend>
        ))}
      </div>
    </div>
  );
}
