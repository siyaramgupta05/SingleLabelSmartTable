import React, { useState, useEffect } from "react";
import CustomPaginationActionsTable from "../../component/table/SingleLavelSmartTable";
import axios from "axios";

const header = [
  { id: "id", label: "ID" },
  { id: "title", label: "Title" },
  { id: "body", label: "Body" }
  // { id: "action", label: "Action", format: (value) => value }
  // {
  //   id: "population",
  //   label: "Population",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toLocaleString("en-US")
  // },
  // {
  //   id: "size",
  //   label: "Size\u00a0(km\u00b2)",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toLocaleString("en-US")
  // },
  // {
  //   id: "density",
  //   label: "Density",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toFixed(2)
  // }
];

const User = () => {
  const [rows, setRowsData] = useState();
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setRowsData(res.data);

      setLoad(false);
    }, 5000);
    // (async () => {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // // let data = res.data;
    // setRowsData(res.data);
    // setRowsData(null);

    // })();
  }, []);
  const actionFun = (e, button) => {
    // console.log(e.id);
    // console.log(button);
    if (button == "Delete") alert("Delete");
    if (button == "Edit") alert("edit");
    if (button == "View") alert("View");
  };

  return (
    <>
      <div>User</div>
      <CustomPaginationActionsTable
        headerColumn={header}
        action={["Delete", "Edit", "View"]}
        actionFun={actionFun}
        rows={rows}
        loading={loading}
      />
    </>
  );
};
export default User;
