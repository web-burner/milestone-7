import React from "react";

const Issue = ({ issue }) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-5 space-y-1.5">
      <div>
        <img className="w-14 rounded-full" src={issue.userImg} alt="" />
      </div>
      <p className="font-bold">{issue.requestedBy}</p>
      <div className="flex justify-between">
        <p className="text-xl font-bold">{issue.subject}</p>
        <p
          className={`${
            issue.status === "Submitted"
              ? "bg-amber-100 text-amber-500"
              : issue.status === "Pending"
              ? "bg-red-100 text-red-500"
              : issue.status === "Reviewed" && "bg-green-100 text-green-600"
          } py-1 px-2 rounded-4xl`}
        >
          {issue.status}
        </p>
        <p className={`${issue.priority==="High" ? "bg-red-100 text-red-600": issue.priority==="Medium" ? "bg-yellow-100 text-yellow-600" : issue.priority==="Low"&& "bg-green-100 text-green-600"} rounded-4xl py-1 px-2`}>{issue.priority}</p>
      </div>
      <p>{issue.description}</p>
    </div>
  );
};

export default Issue;

// {
//     "ticketId": "PH-2001",
//     "subject": "Password reset request",
//     "description": "User forgot password and needs a reset.",
//     "status": "Submitted",
//     "priority": "High",
//     "category": "Authentication",
//     "createdAt": "2025-09-20T10:15:00Z",
//     "assignedTo": "Agent001",
//     "requestedBy": "Jhankar Mahbub",
//     "userImg": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
// }
