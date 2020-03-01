import React from "react";
import { Table } from "antd";

let { Column } = Table;

const Header = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Username",
    dataIndex: "uname",
    key: "uname"
  },
  {
    title: "Firstname",
    dataIndex: "fname",
    key: "fname"
  },
  {
    title: "Lastname",
    dataIndex: "lname",
    key: "lname"
  }
];

export default props => {
  return (
    <Table dataSource={props.data} rowKey={record => record.id}>
      {Header.map(item => (
        <Column
          title={item.title}
          dataIndex={item.dataIndex}
          key={item.key}
          onHeaderCell={column => {
            return {
              onClick: () => {
                console.log(column.dataIndex);
              }
            };
          }}
        />
      ))}
    </Table>
  );
};
